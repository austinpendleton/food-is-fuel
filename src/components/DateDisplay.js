import React from "react";

const DateDisplay = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <p className="text-center my-6 text-lg">{formattedDate}</p>;
};

export default DateDisplay;
