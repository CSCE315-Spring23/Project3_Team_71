import React, { useState } from "react";
import "../../css/AddMenuItem.css";

function UserInputLogger() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
  };

  return (
    <div id = "menuadder">
    <div id = "menuadder-form">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Log Input Value</button>
    </div>
    </div>
  );
}

export default UserInputLogger;