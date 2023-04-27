import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DatePicker from "./components/DatePicker";

/**
 *
 * A custom date picker component that uses the DatePicker component and manages its own state.
 * @param {Object} props - The props object for the component.
 * @param {string} props.inputStyle - The class name for the input element.
 * @param {string} props.placeholder - The placeholder text for the input element.
 * @param {string} props.name - The name attribute for the input element.
 * @param {Function} props.onChange - The callback function called when the date is changed.
 * @param {string} props.value - The initial value for the date.
 * @param {boolean} props.major - A flag to indicate whether the major option should be used.
 * @returns {JSX.Element} - A custom date picker component.
 */
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
        onClick={() => setOpen(true)}
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

CustomDatePicker.propTypes = {
  inputStyle: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  major: PropTypes.bool,
};

export default CustomDatePicker;
