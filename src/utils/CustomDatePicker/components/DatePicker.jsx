import React, { useState } from "react";
import { daysNames, monthsNames } from "../assets/names";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";

const DatePicker = ({ todayYear, todayMonth, todayDay, handleSelect }) => {
  const [month, setMonth] = useState(todayMonth);
  const [year, setYear] = useState(todayYear);

  const numberOfDaysInMonth = [];
  for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
    numberOfDaysInMonth.push(i);
  }

  return (
    <div className='bg-primaryLight h-fit rounded-md absolute shadow-lg flex flex-col'>
      <YearPicker todayYear={year} setYear={setYear} />
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
        {numberOfDaysInMonth.map((day, i) => (
          <p
            className='hover:bg-secondary p-1'
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
