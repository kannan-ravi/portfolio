import { tabTypes } from "@/types/type";
import React from "react";

type propsTypes = {
  activeTab: tabTypes;
  setActiveTab: React.Dispatch<React.SetStateAction<tabTypes>>;
};

const TabHeader = ({ activeTab, setActiveTab }: propsTypes) => {
  const handleTabChange = (tab: tabTypes) => {
    setActiveTab(tab);
  };
  return (
    <div className="border p-1 rounded dark:border-white">
      <div
        className={`flex items-center rounded relative
              before:content-[''] before:absolute before:w-1/2 before:top-0 before:bg-black before:h-full before:-z-10
              before:transition-[left] before:duration-300 before:ease-in-out
              ${
                activeTab == "work" ? "before:left-0" : "before:left-1/2"
              } dark:before:bg-white`}
      >
        <button
          type="button"
          className={`w-full py-2 rounded cursor-pointer duration-300 ${
            activeTab === "work"
              ? "text-white dark:text-black"
              : "dark:text-white"
          }`}
          onClick={() => handleTabChange("work")}
        >
          Work
        </button>
        <button
          type="button"
          className={`w-full py-2 rounded cursor-pointer duration-300 ${
            activeTab === "studies"
              ? "text-white dark:text-black"
              : "dark:text-white"
          }`}
          onClick={() => handleTabChange("studies")}
        >
          Studies
        </button>
      </div>
    </div>
  );
};

export default TabHeader;
