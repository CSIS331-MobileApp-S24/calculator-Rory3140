import React from "react";
import "./ButtonBox.css";
import Button from "./Button.js";

function handleClick(btnValue) {
  console.log("Button Clicked: " + btnValue);
}

const ButtonBox = () => {
  const btnValues = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="buttonbox">
      {btnValues.flat().map((button, i) => {
        classname = "";
        if (button == "=") {
          classname = "equals";
        }
        return (
          <Button
            key={i}
            classname={classname}
            value={button}
            onButtonClick={() => handleClick(button)}
          />
        );
      })}
    </div>
  );
};

export default ButtonBox;
