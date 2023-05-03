import React, { useState } from "react";
import "../../css/AddMenuItem.css";
/**

A React component that logs user input to the console.
@returns {JSX.Element} A React component that includes an input field and a button to log the user's input to the console.
*/
function UserInputLogger() {
  const [inputValue, setInputValue] = useState("");
/**

Function that updates the state hook with the current value of the input field.
@param {React.ChangeEvent<HTMLInputElement>} event The change event triggered by the input field.
*/
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
/**

Function that logs the current value of the input field to the console.
*/
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