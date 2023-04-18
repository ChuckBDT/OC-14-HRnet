import React, { useState } from "react";
import { daysNames, monthsNames } from "./names";

const ShowDaysofMonth = () => {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);

  const numberOfDaysInMonth = [];
  for (let i = 1; i <= new Date(year, month, 0).getDate(); i++) {
    numberOfDaysInMonth.push(i);
  }

  return (
    <>
      <select
        onChange={(e) => setMonth(e.target.value)}
        name='Month'
        id='month'
        className='w-full'
      >
        {monthsNames.map((month, i) => (
          <option key={i} value={(i += 1)}>
            {month}
          </option>
        ))}
      </select>
      <div className='grid grid-cols-7 justify-center justify-items-center bg-tertiary'>
        {daysNames.map((day, i) => (
          <p className='font-bold' key={i}>
            {day}
          </p>
        ))}
        {numberOfDaysInMonth.map((day, i) => (
          <p
            className='hover:bg-secondary p-1'
            onClick={() => console.log(month + "/" + day + "/" + year)}
            key={i}
          >
            {day}
          </p>
        ))}
      </div>
    </>
  );
};

export default ShowDaysofMonth;
