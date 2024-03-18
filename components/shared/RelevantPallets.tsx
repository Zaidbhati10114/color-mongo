"use client";
import React, { useState } from "react";
import CardComp from "./CardComp";

const RelevantPallets = () => {
  const [showCardComp, setShowCardComp] = useState(false);

  const handleToggleCardComp = () => {
    setShowCardComp(!showCardComp);
  };

  const page = 1;

  return (
    <div>
      <h1
        onClick={handleToggleCardComp}
        className="text-center cursor-pointer hover:text-[#7469B6]"
      >
        {showCardComp ? "Show less" : "Show More"}
      </h1>
      {showCardComp && <CardComp page={page} />}
    </div>
  );
};

export default RelevantPallets;
