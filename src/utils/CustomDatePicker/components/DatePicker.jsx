import React, { useState } from "react";
import { daysNames } from "../assets/names";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";

const DatePicker = ({ todayYear, todayMonth, todayDay, handleSelect }) => {
  const [month, setMonth] = useState(todayMonth);
  const [year, setYear] = useState(todayYear);

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const blanks = Array(firstDayOfMonth).fill(null);

  const numberOfDaysInMonth = [];
  for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    numberOfDaysInMonth.push(i);
  }

  return (
    <div className='bg-tertiary h-fit rounded-md absolute shadow-lg '>
      <YearPicker todayYear={todayYear} year={year} setYear={setYear} />
      <MonthPicker
        todayMonth={month}
        setMonth={setMonth}
        todayYear={year}
        setYear={setYear}
      />

      <div className='grid grid-cols-7 justify-items-center '>
        {daysNames.map((day, i) => (
          <p className='font-bold' key={i}>
            {day}
          </p>
        ))}

        {blanks.map((blank, i) => (
          <p className='w-full h-full p-1 text-center' key={`blank-${i}`}>
            {" "}
          </p>
        ))}

        {numberOfDaysInMonth.map((day, i) => (
          <p
            className='hover:bg-secondary w-full h-full p-1 text-center cursor-pointer'
            onClick={() => handleSelect(month + "/" + day + "/" + year)}
            key={i}
          >
            {day}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
