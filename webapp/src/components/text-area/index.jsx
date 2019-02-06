import React from "react";
import "./styles.scss";

const TextArea = ({ value, onChange }) => {
  return <textarea value={value} onChange={onChange} />;
};

export default TextArea;
