import React, { useState, useEffect, useRef } from "react";
import DatePicker from "./components/DatePicker";

const CustomDatePicker = ({
  inputStyle,
  placeholder,
  name,
  onChange,
  value,
  major,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const selectRef = useRef();

  useEffect(() => {
    setSelected(value);
  }, [value]);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     console.log(event.composedPath().toString());
  //     console.log(event.composedPath().includes("div#CustomDatePicker"));
  //     if (event.composedPath().includes("div#CustomDatePicker")) {
  //       setOpen(false);
  //     }
  //   }

  //   window.addEventListener("click", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, [selectRef]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={selectRef} id='CustomDatePicker'>
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
      {open && <DatePicker major={major} handleSelect={handleSelect} />}
    </div>
  );
};

export default CustomDatePicker;
