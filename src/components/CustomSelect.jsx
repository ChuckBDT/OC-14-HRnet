import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <>
      <input
        type='text'
        value={selected}
        onClick={() => setOpen(!open)}
        className={inputStyle}
        placeholder={placeholder}
        name={name}
        readOnly
      />
      {open && (
        <ul className='max-h-36 overflow-y-auto pt-2  '>
          {options.map((item, i) => {
            return (
              <li
                key={i}
                className='hover:bg-primaryLight hover:text-white text-primary px-2'
                onClick={() => handleSelect(item.name)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default CustomSelect;
