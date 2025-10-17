import React, { useEffect, useMemo, useState } from "react";
import useTickets from "../features/tickets/hooks/useTickets";
import Ticket from "./Ticket";
import LoadMoreTickets from "./LoadMoreTickets";

const INITIAL_VISIBLE_COUNT = 5;
const LOAD_MORE_STEP = 5;

const buildTicketKey = (ticket) => {
  const segments = Array.isArray(ticket.segments) ? ticket.segments : [];
  const segmentsKey = segments
    .map(
      (segment) =>
        `${segment.origin}-${segment.destination}-${segment.date}-${segment.duration}`,
    )
    .join("|");

  return `${ticket.carrier}-${ticket.price}-${segmentsKey}`;
};

const TicketList = () => {
  const { tickets, status, error, isComplete } = useTickets();
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
  const isInitialLoading = isLoading && tickets.length === 0;
  const isLoadingMore = isLoading && tickets.length > 0 && !isComplete;

  const handleLoadMore = () => {
    setVisibleCount((count) => count + LOAD_MORE_STEP);
  };

  if (isInitialLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
        Загружаем билеты...
      </div>
    );
  }

  const emptyState = !isLoading && !error && visibleTickets.length === 0 && (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
      Рейсов, подходящих под заданные фильтры, не найдено
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
          {error ||
            "Не удалось загрузить билеты. Попробуйте обновить страницу."}
        </div>
      )}

      {visibleTickets.map((ticket) => (
        <Ticket key={buildTicketKey(ticket)} {...ticket} />
      ))}

      {emptyState}

      <LoadMoreTickets
        hasMore={hasMore}
        onClick={handleLoadMore}
        isDisabled={isLoading}
      />

      {isLoadingMore && (
        <div className="bg-white rounded-lg shadow-sm p-4 text-center text-gray-500">
          Получаем дополнительные билеты...
        </div>
      )}
    </div>
  );
};

export default TicketList;
