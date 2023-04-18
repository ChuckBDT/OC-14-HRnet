import React from "react";
const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthPicker = ({ todayMonth, setMonth }) => {
  return <div onClick={() => setMonth(5)}>{monthsNames[todayMonth - 1]}</div>;
};

export default MonthPicker;
