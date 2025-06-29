"use client";
import { tabTypes } from "@/types/type";
import React, { useState } from "react";
import TabHeader from "./TabHeader";
import TabBody from "./TabBody";

const Tab = () => {
  const [activeTab, setActiveTab] = useState<tabTypes>("work");
  return (
    <div className="mt-6">
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabBody activeTab={activeTab} />
    </div>
  );
};

export default Tab;
