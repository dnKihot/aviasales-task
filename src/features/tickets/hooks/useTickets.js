import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectAllTickets,
  selectTicketsError,
  selectTicketsStatus,
  selectTicketsStopFlag,
} from "../selectors";
import { selectActiveFilters } from "../../filters/selectors";
import { selectSortBy } from "../../sort/selectors";
import { sortTickets, filterTickets } from "../utils";

const useTickets = () => {
  const tickets = useSelector(selectAllTickets);
  const status = useSelector(selectTicketsStatus);
  const error = useSelector(selectTicketsError);
  const stop = useSelector(selectTicketsStopFlag);
  const activeFilters = useSelector(selectActiveFilters);
  const sortBy = useSelector(selectSortBy);

  const visibleTickets = useMemo(() => {
    const filtered = filterTickets(tickets, activeFilters);
    return sortTickets(filtered, sortBy);
  }, [tickets, activeFilters, sortBy]);

  return {
    tickets: visibleTickets,
    status,
    error,
    isComplete: stop,
  };
};

export default useTickets;
