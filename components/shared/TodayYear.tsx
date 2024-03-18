import React from "react";

const TodayYear = () => {
  const getTodayYear = () => {
    const today = new Date();
    return today.getFullYear();
  };

  return <span>{getTodayYear()}</span>;
};

export default TodayYear;
