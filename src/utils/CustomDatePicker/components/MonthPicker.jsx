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
    <div
      id='MonthPicker'
      className='w-full flex justify-between items-center bg-tertiary h-10'
    >
      <div
        onClick={() => {
          updateMonth("-");
        }}
        className='cursor-pointer flex justify-center items-center h-7 w-7 border border-primary/20 rounded-md hover:shadow-inner active:bg-secondary'
      >
        <svg
          stroke='currentColor'
          fill='black'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='0.7em'
          width='0.7em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
        </svg>
      </div>

      <p className='text-primary text-sm font-bold'>
        {monthsNames[todayMonth]}
      </p>

      <div
        onClick={() => {
          updateMonth("+");
        }}
        className='cursor-pointer flex justify-center items-center h-7 w-7 border border-primary/20 rounded-md hover:shadow-inner active:bg-secondary'
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='0.7em'
          width='0.7em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'></path>
        </svg>
      </div>
    </div>
  );
};

export default MonthPicker;
