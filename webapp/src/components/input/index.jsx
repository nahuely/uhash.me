import React from "react";
import "./styles.scss";

const Input = ({ label, onChange, ...otherProps }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__input" onChange={onChange} {...otherProps} />
    </div>
  );
};

export default Input;
