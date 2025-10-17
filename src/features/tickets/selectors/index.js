export const selectTicketsState = (state) => state.tickets;

export const selectTicketsStatus = (state) => selectTicketsState(state).status;

export const selectTicketsError = (state) => selectTicketsState(state).error;

export const selectAllTickets = (state) => selectTicketsState(state).tickets;

export const selectTicketsStopFlag = (state) => selectTicketsState(state).stop;
