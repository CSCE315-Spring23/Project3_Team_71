import React, { useEffect, useState } from "react";
import "../../css/changeIngredient2.css";
import { HOST } from "../../host";
import ManagerPop from "../../components/managerErrorPop";
const ChangeIngredient = () => {


  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState ('');



  const [inputValue, setInputValue] = useState("");
  const[quantity1, setQuantity1] = useState("");
  const [showManagerPop , setManagerPop] = useState(false);
  const [ErrorPrompt , setErrorPrompt] = useState("");
  /**

Function that handles the submit event for changing ingredient's ID, quantity or name.
It uses the current values of id, quantity, and name to update the corresponding values on the server.
@async
@returns {Promise<void>}
*/
  const handleSubmit = async () => {

    if(quantity !== '') {
      const response_quantity = await fetch(`${HOST}/changeIngredientQuantity/${id}/${quantity}`);
    }
    if(name !== '') {
      const response_name = await fetch(`${HOST}/changeIngredientName/${id}/${name}`);
    }
  };

  /**

Function that updates the state variable id to the value entered by the user in the corresponding input field.
@param {object} event - The event object containing information about the input field change.
@returns {void}
*/
  const handleIdChange = (event) => {
    setId(event.target.value);
  };
/**

Function that updates the state variable quantity to the value entered by the user in the corresponding input field.
@param {object} event - The event object containing information about the input field change.
@returns {void}
*/
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
/**

Function that updates the state variable name to the value entered by the user in the corresponding input field.
@param {object} event - The event object containing information about the input field change.
@returns {void}
*/
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
/**

State variables and corresponding update functions for managing the menu information.
*/
  const [idMenu, setIdMenu] = useState('');
  const [price, setPrice] = useState('');
  const [nameMenu, setNameMenu] = useState ('');

/**

Function that handles the submit event for changing menu's ID, price or name.
It uses the current values of id, price, and name to update the corresponding values on the server.
@async
@returns {Promise<void>}
*/
  const handleSubmitMenu = async () => {

    if(price !== '') {
      console.log("/changeMenuPrice/"+idMenu+"/"+price);
      const response_quantity = await fetch(`${HOST}/changeMenuPrice/${idMenu}/${price}`);
    }
    if(nameMenu !== '') {
      console.log("/changeMenuName/"+idMenu+"/"+nameMenu);
      const response_name = await fetch(`${HOST}/changeMenuName/${idMenu}/${nameMenu}`);
    }
  };
/**

Function that updates the state variable idMenu to the value entered by the user in the corresponding input field.
@param {object} event - The event object containing information about the input field change.
@returns {void}
*/
  const handleIdChangeMenu = (event) => {
    setIdMenu(event.target.value);
  };
/**

Function that updates the state variable price to the value entered by the user in the corresponding input field.
@param {object} event - The event object containing information about the input field change.
@returns {void}
*/
  const handlePriceChangeMenu = (event) => {
    setPrice(event.target.value);
  };
/**

Function that updates the state variable nameMenu to the value entered by the user in the corresponding input field.
@param {object} event - The event object containing information about the input field change.
@returns {void}
*/
  const handleNameChangeMenu = (event) => {
    setNameMenu(event.target.value);
  };


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleQuantity1Change = (event) => {
    setQuantity1(event.target.value);
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
    body:JSON.stringify({'name':inputValue , 'quantity': quantity1})
  }) .then(response => response.json())
  .then(data => {console.log(data); answerScreen()})
  .catch(error => { console.error(error); });
  // Reset the form to add ingredients again
};


/**

Function that displays the help menu to the user.
*/
const answerScreen = () =>{
  setErrorPrompt("completeChange");
  setManagerPop(true);
}



  return (
    <>
    <div>
    <div id = "menuadder2">

      <h3>Change a Ingredient</h3>
      <form id = 'menuadder-form2'>
        <input 
        type = "text"
        id = "ingredientID" 
        name ="Ingredient ID"
        required = "required"
        placeholder="Enter Ingredient ID"
        value = {id}
        onChange = {handleIdChange}
        />
        <input 
        type = "text" 
        id = "quantity"
        name ="Quantity"
        placeholder="Enter New Quantity"
        value = {quantity}
        onChange = {handleQuantityChange}
        />
        <input 
        type = "text" 
        id = "name"
        name ="Name"
        placeholder="Enter New Name"
        value = {name}
        onChange = {handleNameChange}
        />
        <button type ="button" onClick ={handleSubmit}>Change Ingredient</button>
      </form>    
  </div>

   <div id = "menuadder3">
    <h3>Change a Menu Item</h3>
      <form id = "menuadder3-form1">
        <input 
        type = "text"
        id = "menuID" 
        name ="Menu ID"
        required = "required"
        placeholder="Enter Menu ID"
        value = {idMenu}
        onChange = {handleIdChangeMenu}
        />
        <input 
        type = "text" 
        id = "price"
        name ="Price"
        placeholder="Enter New Price"
        value = {price}
        onChange = {handlePriceChangeMenu}
        />
        <input 
        type = "text" 
        id = "nameMenu"
        name ="Name"
        placeholder="Enter New Name"
        value = {nameMenu}
        onChange = {handleNameChangeMenu}
        />
        <button type ="button" onClick ={handleSubmitMenu}>Change Menu Item</button>
      </form>
      </div>

      <div id = "menuadder4">
    <h3>Change Ingredient Quantity</h3>
    <div id = "menuadder4-form1">
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Input ingredient name"/>
      <input type="text" value={quantity1} onChange={handleQuantity1Change} placeholder="Input Quantity"/>
      <button type = "button" onClick={handleButtonClick}>Add Ingredient</button>
    </div>
    </div>
</div>
  <div>
  {showManagerPop && (
    <ManagerPop
        ErrorPrompt={ErrorPrompt}
        setErrorPrompt={setErrorPrompt}
        setManagerPop={setManagerPop}
    />
)}
</div>
</>
  )
}

export default ChangeIngredient