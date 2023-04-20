import React, { useState } from "react";

const YearPicker = ({ todayYear, year, setYear, major }) => {
  const [show, setShow] = useState(false);
  const startYear = 1920;
  // const endYear = major ? todayYear - 18 : todayYear;
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
      <div
        className='text-center bg-tertiary rounded-md text-md h-8 flex justify-center items-center border border-primary/20 cursor-pointer hover:shadow-inner active:bg-secondary'
        onClick={() => setShow(!show)}
      >
        {year}
      </div>
      {show && (
        <div className='absolute top-0 left-0 h-full w-full rounded-md bg-tertiary flex flex-wrap overflow-auto scrollbar-hide'>
          {availableYears.map((yearListed) => (
            <p
              onClick={() => handleSelect(yearListed)}
              className='h-1/4 w-1/4 flex justify-center items-center  cursor-pointer active:bg-secondary hover:shadow-inner hover:border hover:border-primary/10'
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
