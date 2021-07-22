import React from "react";

function Select({ value, onChange, options }) {
  return (
    <select
      onChange={(event) =>
        onChange?.(
          event.target.value === "Selecionar" ? null : event.target.value
        )
      }
    >
      <option selected={!Boolean(value)}>Selecionar</option>
      {options.map((option) => (
        <option
          key={option.value}
          selected={option.value === value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
