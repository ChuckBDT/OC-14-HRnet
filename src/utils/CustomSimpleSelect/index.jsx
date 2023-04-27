import React, { useState, useEffect, useRef } from "react";

const CustomSimpleSelect = ({ options, handle, value }) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef();

  const handleSelect = (el) => {
    handle(el);
    setOpen(!open);
  };

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

  return (
    <div
      ref={selectRef}
      className='w-14 relative flex justify-between items-center'
    >
      <input
        type='text'
        value={value}
        onClick={() => setOpen(!open)}
        className={`${
          open ? "" : "shadow"
        } bg-secondary outline-none w-full p-2 rounded-lg cursor-pointer text-primary select-none`}
        readOnly
      />
      {open ? (
        <svg
          stroke='currentColor'
          onClick={() => setOpen(!open)}
          className='absolute right-2 fill-primary'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z'></path>
        </svg>
      ) : (
        <svg
          stroke='currentColor'
          onClick={() => setOpen(!open)}
          className='absolute right-2 fill-primary cursor-pointer'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
        </svg>
      )}
      {open && (
        <ul className='max-h-36 bg-secondary overflow-y-auto top-12 absolute w-full rounded-lg shadow'>
          {options.map((item, i) => {
            return (
              <li
                key={i}
                className='hover:bg-primaryLight/20 text-primary pl-2 py-1 cursor-pointer'
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSimpleSelect;