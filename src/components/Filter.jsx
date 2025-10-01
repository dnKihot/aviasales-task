import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_OPTIONS } from "../constants/filters";
import { toggleFilter } from "../store/slices/filtersSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filters.activeFilters);

  return (
    <aside className="w-full lg:w-72 bg-white rounded-lg shadow-sm p-4 lg:sticky lg:top-4">
      <h2 className="text-sm font-semibold uppercase text-gray-900 mb-4">
        Количество пересадок
      </h2>

      <div className="space-y-1">
        {FILTER_OPTIONS.map((filter) => (
          <label
            key={filter.id}
            className="flex items-center p-2 rounded hover:bg-blue-50 cursor-pointer transition-colors duration-200"
          >
            <input
              type="checkbox"
              checked={activeFilters.includes(filter.id)}
              onChange={() => dispatch(toggleFilter(filter.id))}
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{filter.label}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Filter;
