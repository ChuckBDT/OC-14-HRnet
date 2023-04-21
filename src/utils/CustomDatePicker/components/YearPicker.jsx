import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * A component that allows the user to select a year from a list of available years.
 * @param {number} props.todayYear - The current year.
 * @param {number} props.year - The selected year.
 * @param {function} props.setYear - A function to update the selected year.
 * @returns {JSX.Element} - The YearPicker component.
 */
const YearPicker = ({ todayYear, year, setYear }) => {
  const [show, setShow] = useState(false);
  const startYear = 1920;
  const availableYears = [];

  for (let y = todayYear; y >= startYear; y--) {
    availableYears.push(y);
  }

  /**
   * Updates the selected year and toggles the year picker dropdown.
   * @param {number} selectedYear - The year selected by the user.
   * @returns {void}
   */
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
        <div
          id='YearPicker'
          className='absolute top-0 left-0 h-full w-full rounded-md bg-tertiary flex flex-wrap overflow-auto scrollbar-hide'
        >
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

YearPicker.propTypes = {
  todayYear: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
};

export default YearPicker;
