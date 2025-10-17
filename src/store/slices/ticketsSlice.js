import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {
  fetchSearchId,
  fetchTickets as fetchTicketsBatch,
} from "../../api/ticketsApi";

const appendTickets = createAction("tickets/appendTickets");
const setStopFlag = createAction("tickets/setStopFlag");

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
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const searchId = await fetchSearchId();
      let stop = false;
      let retriesLeft = MAX_RETRIES;

      while (!stop) {
        try {
          const { tickets, stop: batchStop } =
            await fetchTicketsBatch(searchId);
          if (Array.isArray(tickets) && tickets.length) {
            dispatch(appendTickets(tickets));
          }
          stop = Boolean(batchStop);
          dispatch(setStopFlag(stop));
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

      return { searchId };
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
    resetTickets: () => initialState,
    setTickets(state, action) {
      state.tickets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.stop = false;
        state.tickets = [];
      })
      .addCase(appendTickets, (state, action) => {
        state.tickets.push(...action.payload);
      })
      .addCase(setStopFlag, (state, action) => {
        state.stop = action.payload;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "success";
        state.searchId = action.payload.searchId;
        state.stop = true;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Не удалось загрузить билеты";
        state.stop = false;
      });
  },
});

export const { resetTickets, setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
export { appendTickets, setStopFlag };
