import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTabClasses } from "../utils/classNames";
import { SORT_TABS } from "../constants/sort";
import { setSort } from "../store/slices/sortSlice";
import { selectSortBy } from "../features/sort/selectors";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeSort = useSelector(selectSortBy);

  const handleSelect = (id) => {
    if (id !== activeSort) {
      dispatch(setSort(id));
    }
  };

  return (
    <nav className="flex bg-white rounded-lg overflow-hidden shadow-sm mb-6">
      {SORT_TABS.map((tab) => {
        const isActive = tab.id === activeSort;

        return (
          <button
            key={tab.id}
            type="button"
            className={getTabClasses(isActive)}
            onClick={() => handleSelect(tab.id)}
            aria-pressed={isActive}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
