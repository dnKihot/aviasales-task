const ALL_FILTER_ID = "all";

const getAllowedTransferCounts = (activeFilters) => {
  if (!Array.isArray(activeFilters) || activeFilters.length === 0) {
    return null;
  }

  const withoutAll = activeFilters.filter((id) => id !== ALL_FILTER_ID);

  if (withoutAll.length === 0 || activeFilters.includes(ALL_FILTER_ID)) {
    return null;
  }

  return new Set(withoutAll);
};

export const filterTickets = (tickets, activeFilters) => {
  const source = Array.isArray(tickets) ? tickets : [];
  const allowedTransfers = getAllowedTransferCounts(activeFilters);

  if (!allowedTransfers) {
    return source;
  }

  return source.filter((ticket) =>
    ticket.segments?.every((segment) =>
      allowedTransfers.has(String(segment.stops?.length ?? 0)),
    ),
  );
};

const calculateTotalDuration = (ticket) =>
  ticket.segments?.reduce((acc, segment) => acc + (segment.duration ?? 0), 0) ??
  0;

const sortByCheapest = (a, b) => a.price - b.price;

const sortByFastest = (a, b) =>
  calculateTotalDuration(a) - calculateTotalDuration(b);

const sortByOptimal = (a, b) => {
  const priceDiff = sortByCheapest(a, b);
  if (priceDiff !== 0) return priceDiff;
  return sortByFastest(a, b);
};

export const sortTickets = (tickets, sortBy) => {
  const source = Array.isArray(tickets) ? tickets : [];
  const copied = [...source];

  switch (sortBy) {
    case "fastest":
      return copied.sort(sortByFastest);
    case "optimal":
      return copied.sort(sortByOptimal);
    case "cheapest":
    default:
      return copied.sort(sortByCheapest);
  }
};
