import React, { useState } from "react";
import "../../css/AddMenuItem.css";
import { HOST } from "../../host";
/**

A React component that logs user input to the console.
@returns {JSX.Element} A React component that includes an input field and a button to log the user's input to the console.
*/
function UserInputLogger() {
  const [inputValue, setInputValue] = useState("");
  const[quantity, setQuantity] = useState("");
/**

Function that updates the state hook with the current value of the input field.
@param {React.ChangeEvent<HTMLInputElement>} event The change event triggered by the input field.
*/
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
/**

Function that logs the current value of the input field to the console.
*/
const handleButtonClick = () => {
  // Do something with the item name and price (e.g. add them to an order list)
  fetch(`${HOST}/addIngredient`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({'name':inputValue , 'quantity': quantity})
  }) .then(response => response.json())
  .then(data => {console.log(data);})
  .catch(error => { console.error(error); });
  // Reset the form to add ingredients again
};

  return (
    <div id = "menuadder">
    <h3>Change Ingredient Quantity</h3>
    <div id = "menuadder-form">
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Input ingredient name"/>
      <input type="text" value={quantity} onChange={handleQuantityChange} placeholder="Input Quantity"/>
      <button type = "button" onClick={handleButtonClick}>Add Ingredient</button>
    </div>
    </div>
  );
}

export default UserInputLogger;