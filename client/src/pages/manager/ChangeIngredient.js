import React, { useEffect, useState } from "react";
import "../../css/changeIngredient2.css";
import { HOST } from "../../host";

const ChangeIngredient = () => {


  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState ('');

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
      console.log("/changeMenuPrice/"+id+"/"+price);
      const response_quantity = await fetch(`${HOST}/changeMenuPrice/${id}/${price}`);
    }
    if(name !== '') {
      console.log("/changeMenuName/"+id+"/"+name);
      const response_name = await fetch(`${HOST}/changeMenuName/${id}/${name}`);
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


  return (
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
        value = {id}
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
        id = "name"
        name ="Name"
        placeholder="Enter New Name"
        value = {name}
        onChange = {handleNameChangeMenu}
        />
        <button type ="button" onClick ={handleSubmit}>Change Menu Item</button>
      </form>
      </div>
</div>
  

  )
}

export default ChangeIngredient