import React from "react";
import { map } from "lodash";

interface TabSelectorProps {
  tabs: { id: number; title: string }[];
  activeTabId: number;
  onTabClick: (tabId: number) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  activeTabId,
  onTabClick,
}) => {
  return (
    <div className="center flex items-center gap-4">
      {map(tabs, (tab) => (
        <span
          key={tab.id}
          className={`cursor-pointer text-[#6a6a6a] font-medium border border-transparent p-2 hover:bg-[#F7F7F7] hover:border hover:rounded-3xl hover:p-2 ${
            activeTabId === tab.id ? "text-black" : ""
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.title}
        </span>
      ))}
    </div>
  );
};

export default TabSelector;
