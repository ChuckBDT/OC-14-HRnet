import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * A simple select component.
 *
 * @typedef {Object} Props
 * @property {string[]} options - The list of options to display in the select.
 * @property {(el: string) => void} handle - The callback function to handle the selection of an option.
 * @property {string} value - The currently selected value.
 * @property {boolean} [down=true] - Whether to open the select dropdown downwards or upwards.
 *
 * @param {Props} props - The props object.
 * @returns {JSX.Element} - The rendered select component.
 */
const SimpleSelect = ({ options, handle, value, down = true }) => {
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
    <div ref={selectRef} className='relative'>
      <button
        type='text'
        value={value}
        onClick={() => setOpen(!open)}
        className={`${
          open ? "" : "shadow"
        } bg-secondary flex justify-center items-center p-2 rounded-lg h-10 cursor-pointer max-w-full text-primary select-none`}
      >
        {value}
        {open ? (
          <svg
            stroke='currentColor'
            onClick={() => setOpen(!open)}
            className='ml-2 fill-primary'
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
            className='ml-2 fill-primary cursor-pointer'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
          </svg>
        )}
      </button>
      {open && (
        <ul
          className={`${
            down ? "top-12" : "bottom-12"
          } max-h-36 bg-secondary overflow-y-auto absolute min-w-full rounded-lg shadow-lg z-10 `}
        >
          {options.map((item, i) => {
            return (
              <li
                key={i}
                className='hover:bg-primaryLight/20 text-primary w-full px-2 py-1 cursor-pointer'
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

SimpleSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handle: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  down: PropTypes.bool,
};

export default SimpleSelect;
