import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../../store/slices/ticketsSlice";
import { selectTicketsStatus } from "../selectors";

const useInitTickets = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectTicketsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTickets());
    }
  }, [status, dispatch]);
};

export default useInitTickets;
