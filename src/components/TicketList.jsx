import React, { useEffect, useMemo, useState } from "react";
import useTickets from "../features/tickets/hooks/useTickets";
import Ticket from "./Ticket";
import LoadMoreTickets from "./LoadMoreTickets";

const INITIAL_VISIBLE_COUNT = 5;
const LOAD_MORE_STEP = 5;

const TicketList = () => {
  const { tickets, status, error } = useTickets();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleTickets = useMemo(
    () => tickets.slice(0, visibleCount),
    [tickets, visibleCount],
  );

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [tickets]);

  const hasMore = tickets.length > visibleCount;
  const isLoading = status === "loading";
  const isInitialLoading =
    (status === "idle" || status === "loading") && tickets.length === 0;

  const handleLoadMore = () => {
    setVisibleCount((count) => count + LOAD_MORE_STEP);
  };

  if (status === "error") {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
        {error || "Не удалось загрузить билеты. Попробуйте обновить страницу."}
      </div>
    );
  }

  if (isInitialLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
        Загружаем билеты...
      </div>
    );
  }

  if (status === "success" && visibleTickets.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
        Билеты не найдены. Попробуйте изменить фильтры.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {visibleTickets.map((ticket, index) => (
        <Ticket
          key={`${ticket.carrier}-${ticket.price}-${index}`}
          {...ticket}
        />
      ))}

      <LoadMoreTickets
        hasMore={hasMore}
        onClick={handleLoadMore}
        isDisabled={isLoading}
      />
    </div>
  );
};

export default TicketList;
