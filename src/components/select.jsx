import React from "react";

function Select({ value, onChange, options }) {
  return (
    <select onChange={(event) => onChange?.(event.target.value)}>
      {options.map((option) => (
        <option selected={option.value === value} value={option.value}>
          {option.label}{" "}
        </option>
      ))}
    </select>
  );
}

export default Select;
