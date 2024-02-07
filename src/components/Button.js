import React from "react";
import "./Button.css";

const Button = ({ value, onButtonClick }) => {
  if (value == "=") {
    return (
      <button className="equals br4 grow" onClick={onButtonClick}>
        {value}
      </button>
    );
  }

  return (
    <button className="br4 grow" onClick={onButtonClick}>
      {value}
    </button>
  );
};

export default Button;
