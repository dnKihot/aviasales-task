import React from "react";
import { getTabClasses } from "../utils/classNames";
import { SORT_TABS } from "../constants/sort";

const Tabs = () => {
  return (
    <nav className="flex bg-white rounded-lg overflow-hidden shadow-sm mb-6">
      {SORT_TABS.map((tab) => {
        const isActive = tab.id === "cheapest";

        return (
          <button key={tab.id} className={getTabClasses(isActive)}>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
