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
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Input ingredient name"/>
      <button onClick={handleButtonClick}>Add Ingredient</button>
    </div>
    </div>
  );
}

export default UserInputLogger;