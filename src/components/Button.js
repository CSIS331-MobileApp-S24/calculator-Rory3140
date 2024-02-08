import React from "react";
import "./Button.css";

const Button = ({ value, classname, onButtonClick }) => {
  return (
    <button className={`${classname} br4 grow`} onClick={onButtonClick}>
      {value}
    </button>
  );
};

export default Button;
