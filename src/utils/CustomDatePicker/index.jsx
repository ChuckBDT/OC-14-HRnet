import React, { useState, useEffect, useRef } from "react";
import DatePicker from "./components/DatePicker";

const CustomDatePicker = ({
  inputStyle,
  placeholder,
  name,
  onChange,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const selectRef = useRef();

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
    setOpen(false);
  };

  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth();
  const todayDay = todayDate.getDate();

  return (
    <div ref={selectRef}>
      <input
        type='text'
        value={selected}
        onClick={() => setOpen(!open)}
        className={inputStyle}
        placeholder={placeholder}
        name={name}
        id={name}
        readOnly
      />
      {open && (
        <>
          <DatePicker
            todayYear={todayYear}
            todayMonth={todayMonth}
            todayDay={todayDay}
            handleSelect={handleSelect}
          />
        </>
      )}
    </div>
  );
};

export default CustomDatePicker;
