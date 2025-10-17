import React from "react";
import { getButtonClasses } from "../utils/classNames";

const LoadMoreTickets = ({ hasMore, onClick, isDisabled }) => {
  if (!hasMore) {
    return null;
  }

  return (
    <button
      type="button"
      className={getButtonClasses()}
      onClick={onClick}
      disabled={isDisabled}
    >
      Показать еще 5 билетов
    </button>
  );
};

export default LoadMoreTickets;
