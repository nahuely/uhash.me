import React from "react";
import "./styles.scss";

// TODO: select wip, empty value not taking in consideration yet
const Select = ({ options, value, onSelectOption }) => {
  return (
    <select className="select" value={value} onChange={onSelectOption}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
