import React, { useState } from "react";

const YearPicker = ({ todayYear, setYear }) => {
  const [open, setOpen] = useState(false);
  const startYear = 1920;
  const availableYears = [];

  for (let year = todayYear; year >= startYear; year--) {
    availableYears.push(year);
  }

  const handleSelect = (year) => {
    setOpen(!open);
    setYear(year);
  };

  return (
    <>
      <div onClick={() => setOpen(!open)}>{todayYear}</div>
      {open && (
        <p className='absolute h-full w-full rounded-md bg-red-500 flex flex-wrap overflow-auto scrollbar-hide'>
          {availableYears.map((year, i) => (
            <span
              onClick={() => setOpen(!open)}
              className='h-1/4 w-1/4 flex justify-center items-center hover:bg-red-200'
              key={i}
            >
              {year}
            </span>
          ))}
        </p>
      )}
    </>
  );
};

export default YearPicker;
