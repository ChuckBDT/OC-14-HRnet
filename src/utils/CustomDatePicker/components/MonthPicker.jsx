import React from "react";
const monthsNames = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const MonthPicker = ({ todayMonth, setMonth, todayYear, setYear }) => {
  const updateMonth = (arg) => {
    if (arg == "+") {
      todayMonth = todayMonth += 1;
      if (todayMonth > 11) {
        todayMonth = 0;
        setYear((todayYear += 1));
      }
      setMonth(todayMonth);
    } else if (arg == "-") {
      todayMonth = todayMonth -= 1;
      if (todayMonth < 0) {
        todayMonth = 11;
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
