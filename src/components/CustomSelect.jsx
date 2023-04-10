import React, { useState } from "react";

function CustomSelect({ list, placeholder, inputStyle, liStyle }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  function setState(state) {
    setOpen(!open);
    setValue(state);
  }

  return (
    <>
      <input
        type='text'
        onClick={() => setOpen(!open)}
        className={inputStyle}
        placeholder={placeholder}
        defaultValue={value}
        readOnly
      />
      {open && (
        <ul className='max-h-36 overflow-y-auto pt-1'>
          {list.map((item, i) => {
            return (
              <li
                key={i}
                className={liStyle}
                onClick={() => setState(item.name)}
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
