import React, { useState, useEffect, useRef } from "react";
import { days } from "./assets/days";

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
      {open &&
        days.map((day, i) => (
          <p onClick={(e) => handleSelect(e.target.textContent)} key={i}>
            {day}
          </p>
        ))}
    </div>
  );
};

export default CustomDatePicker;
