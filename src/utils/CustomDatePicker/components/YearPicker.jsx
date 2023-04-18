import React, { useState } from "react";

const YearPicker = ({ todayYear, year, setYear }) => {
  const [show, setShow] = useState(false);
  const startYear = 1920;
  const availableYears = [];

  for (let y = todayYear; y >= startYear; y--) {
    availableYears.push(y);
  }

  const handleSelect = (selectedYear) => {
    setYear(selectedYear);
    setShow(!show);
  };

  return (
    <>
      <div onClick={() => setShow(!show)}>{year}</div>
      {show && (
        <div className='absolute top-0 h-full w-full rounded-md bg-red-500 flex flex-wrap overflow-auto scrollbar-hide'>
          {availableYears.map((yearListed) => (
            <p
              onClick={() => handleSelect(yearListed)}
              className='h-1/4 w-1/4 flex justify-center items-center hover:bg-red-200'
              key={yearListed}
            >
              {yearListed}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default YearPicker;
