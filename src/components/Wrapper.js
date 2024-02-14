import React, { useState } from "react";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox.js";
import "./Wrapper.css";

const Wrapper = () => {
  let [num, setNum] = useState(0);
  let [res, setRes] = useState("");
  let [oper, setOper] = useState("");

  function onButtonClick(event) {
    let value = event.target.innerHTML;

    switch (value) {
      case "C":
        resetClickHandler();
        break;
      case "+-":
        invertClickHandler();
        break;
      case "%":
        percentClickHandler();
        break;
      case "/":
      case "X":
      case "-":
      case "+":
        operClickHandler(value);
        break;
      case "=":
        equalsClickHandler();
        break;
      case ".":
        decClickHandler();
        break;
      default:
        numClickHandler(value);
    }
    console.log("num: " + num);
    console.log("res: " + res);
    console.log("oper: " + oper);
  }

  function resetClickHandler() {
    console.log("In resetClickHandler()");
    setNum(0);
    setOper("");
  }

  function invertClickHandler() {
    console.log("In invertClickHandler()");
    num = num * -1;
    setNum(num);
  }

  function percentClickHandler() {
    console.log("In percentClickHandler()");
    num = num / 100;
    if (num.toString().length > 13) {
      num = num.toExponential(9);
    }
    setNum(num);
  }

  function operClickHandler(value) {
    console.log("In operClickHandler()");
    setOper(value);

    if (oper === "") {
      setRes(num);
      setNum(0);
    } else {

      let result;
      switch (oper) {
        case "+":
          result = res + num;
          break;
      }

      if (result.toString().length > 13) {
        result = result.toString().substring(0, 13);
      }

      setRes(result);
      setNum(result);
    }
  }

  function equalsClickHandler() {
    console.log("In equalsClickHandler()");
  }

  function decClickHandler() {
    console.log("In decClickHandler()");
  }

  function numClickHandler(value) {
    console.log("In numClickHandler()");

    if (num.toString().length < 13) {
      let newValue;

      if (num === 0) {
        newValue = value;
      } else {
        newValue = num + value;
      }
      newValue = Number(newValue);
      setNum(newValue);
    }
  }

  return (
    <div className="wrapper bg-dark-gray pa3 br3">
      <Screen value={num} />
      <ButtonBox handleClick={onButtonClick} />
    </div>
  );
};

export default Wrapper;
