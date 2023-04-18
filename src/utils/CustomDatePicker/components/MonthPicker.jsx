import React from "react";
const monthsNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const MonthPicker = ({ todayMonth, setMonth, todayYear, setYear }) => {
  const updateMonth = (arg) => {
    if (arg == "+") {
      todayMonth = todayMonth += 1;
      if (todayMonth > 12) {
        todayMonth = 1;
        setYear((todayYear += 1));
      }
      setMonth(todayMonth);
    } else if (arg == "-") {
      todayMonth = todayMonth -= 1;
      if (todayMonth < 1) {
        todayMonth = 12;
        setYear((todayYear -= 1));
      }
      setMonth(todayMonth);
    }
  };

  return (
    <div className='w-full flex justify-between items-center'>
      <p
        onClick={() => {
          updateMonth("-");
        }}
      >
        Prev
      </p>
      <p>{monthsNames[todayMonth]}</p>
      <p
        onClick={() => {
          updateMonth("+");
        }}
      >
        Next
      </p>
    </div>
  );
};

export default MonthPicker;
