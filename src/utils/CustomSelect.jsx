import React, { useState, useEffect, useRef } from "react";

function CustomSelect({
  inputStyle,
  placeholder,
  options,
  name,
  onChange,
  value,
}) {
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
      {open && (
        <ul className='max-h-36 overflow-y-auto pt-2'>
          {options.map((item, i) => {
            return (
              <li
                key={i}
                className='hover:bg-primaryLight hover:text-white text-primary'
                onClick={() => handleSelect(item.name)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
