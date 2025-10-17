import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchSearchId,
  fetchTickets as fetchTicketsBatch,
} from "../../api/ticketsApi";

const initialState = {
  tickets: [],
  status: "idle",
  error: null,
  searchId: null,
  stop: false,
};

const MAX_RETRIES = 3;

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (_, { rejectWithValue }) => {
    try {
      const searchId = await fetchSearchId();
      let stop = false;
      let retriesLeft = MAX_RETRIES;
      let ticketsAccumulator = [];

      while (!stop) {
        try {
          const { tickets, stop: batchStop } =
            await fetchTicketsBatch(searchId);
          if (Array.isArray(tickets) && tickets.length) {
            ticketsAccumulator.push(...tickets);
          }
          stop = batchStop;
          retriesLeft = MAX_RETRIES;
        } catch (error) {
          const isServerError =
            error instanceof Error && error.message.includes("500");

          if (isServerError && retriesLeft > 1) {
            retriesLeft -= 1;
            continue;
          }

          throw error;
        }
      }

      return { tickets: ticketsAccumulator, searchId };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Неизвестная ошибка загрузки билетов");
    }
  },
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action) {
      state.tickets = action.payload;
    },
    resetTickets: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.stop = false;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "success";
        state.tickets = action.payload.tickets;
        state.searchId = action.payload.searchId;
        state.stop = true;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Не удалось загрузить билеты";
      });
  },
});

export const { resetTickets, setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
