import React from "react";
import Screen from "./Screen.js";
import ButtonBox from "./ButtonBox.js";
import "./Wrapper.css";

const Wrapper = () => {
  return (
    <div className="wrapper bg-dark-gray pa3 br3">
      <Screen value="0" />
      <ButtonBox />
    </div>
  );
};

export default Wrapper;
