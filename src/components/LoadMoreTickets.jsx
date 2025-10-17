import React from "react";
import PropTypes from "prop-types";
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

LoadMoreTickets.propTypes = {
  hasMore: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

LoadMoreTickets.defaultProps = {
  isDisabled: false,
};
