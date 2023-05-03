import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * A custom select component that allows users to select an option from a dropdown list.
 *
 * @param {Object} props - The component props.
 * @param {string} props.inputStyle - The CSS class to style the input element.
 * @param {string} props.placeholder - The placeholder text to display in the input element.
 * @param {Array} props.options - An array of options to display in the dropdown list.
 * @param {string} props.name - The name attribute of the input element.
 * @param {function} props.onChange - The callback function to call when the selected option changes.
 * @param {string} props.value - The value of the currently selected option.
 *
 * @returns {JSX.Element} The CustomSelect component.
 */
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
        className={`${inputStyle} cursor-pointer`}
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
                className='hover:bg-primaryLight hover:text-white text-primary pl-2'
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

CustomSelect.propTypes = {
  inputStyle: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomSelect;
