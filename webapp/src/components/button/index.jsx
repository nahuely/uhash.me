import React from "react";
import "./styles.scss";

const Button = ({ children, className, ...otherProps }) => {
  let baseClassName = ["button"];
  if (className) {
    baseClassName.push(className);
  }
  let newClassName = baseClassName.join(" ");

  return <button className={newClassName} {...otherProps}>{children}</button>;
};

export default Button;
