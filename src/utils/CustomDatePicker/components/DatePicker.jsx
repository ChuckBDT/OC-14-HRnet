import React, { useState } from "react";
import { daysNames } from "../assets/names";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";

const DatePicker = ({ handleSelect, major }) => {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth();
  const todayDay = todayDate.getDate();

  const majorityYear = major ? todayYear - 18 : todayYear;
  const [month, setMonth] = useState(todayMonth);
  const [year, setYear] = useState(majorityYear);

  const firstDaysOfMonth = new Date(year, month, 1).getDay();
  const blanks = Array(firstDaysOfMonth).fill(null);

  const numberOfDaysInMonth = [];
  for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
    if (i <= 9) {
      numberOfDaysInMonth.push("0" + i);
    } else {
      numberOfDaysInMonth.push(String(i));
    }
  }

  return (
    <div className='h-fit rounded-md absolute shadow-lg p-3 bg-tertiary border border-primary/20 select-none'>
      <YearPicker todayYear={majorityYear} year={year} setYear={setYear} />
      <MonthPicker
        todayMonth={month}
        setMonth={setMonth}
        todayYear={year}
        setYear={setYear}
      />

      <div className=' grid grid-cols-7 justify-items-center '>
        {daysNames.map((day, i) => (
          <p
            className='text-xs text-primaryLight bg-tertiary w-8 text-center h-8 flex justify-center items-center'
            key={i}
          >
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
            className={`${
              (todayMonth == month) & (todayDay == day) & (todayYear == year)
                ? "bg-logoLight/25"
                : "bg-tertiary"
            }  rounded-md border border-transparent active:bg-secondary hover:shadow-inner  hover:border-primary/10  w-full h-full p-1 text-center text-primary text-sm cursor-pointer`}
            onClick={() =>
              handleSelect(
                day +
                  "/" +
                  (month <= 9 ? "0" + (month + 1) : month + 1) +
                  "/" +
                  year
              )
            }
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
