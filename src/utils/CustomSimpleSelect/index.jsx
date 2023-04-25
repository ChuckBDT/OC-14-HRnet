import React, { useState } from "react";

const CustomSimpleSelect = ({ options, handle }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(10);

  const handleSelect = (el) => {
    setSelected(el);
    handle(el);
    setOpen(!open);
  };
  return (
    <>
      <input
        type='text'
        value={selected}
        onClick={() => setOpen(!open)}
        className='bg-secondary'
        readOnly
      />
      {open && (
        <ul className='max-h-36 w-24 bg-secondary overflow-y-auto pt-2'>
          {options.map((item, i) => {
            return (
              <li
                key={i}
                className='hover:bg-primaryLight hover:text-white text-primary pl-2'
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CustomSimpleSelect;
