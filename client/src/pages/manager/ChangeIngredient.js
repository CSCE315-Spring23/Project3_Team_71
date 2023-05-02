import React, { useEffect, useState } from "react";
import "../../css/changeIngredient2.css";

const ChangeIngredient = () => {


  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState ('');

  /**
   * Description
   * @returns {any}
   */
  const handleSubmit = async () => {

    if(quantity !== '') {
      console.log("/changeIngredient/:"+id+"/:"+quantity+"/:"+quantity);
      const response_quantity = await fetch("http://localhost:3001/changeIngredientQuantity/"+id+"/"+quantity);
    }
    if(name !== '') {
      console.log("/changeIngredient/:"+id+"/:"+quantity+"/:"+name);
      const response_name = await fetch("http://localhost:3001/changeIngredientName/"+id+"/"+name);
    }
  };
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [idMenu, setIdMenu] = useState('');
  const [price, setPrice] = useState('');
  const [nameMenu, setNameMenu] = useState ('');


  const handleSubmitMenu = async () => {

    if(price !== '') {
      console.log("/changeMenuPrice/"+id+"/"+price);
      const response_quantity = await fetch("http://localhost:3001/changeMenuPrice/"+id+"/"+price);
    }
    if(name !== '') {
      console.log("/changeMenuName/"+id+"/"+name);
      const response_name = await fetch("http://localhost:3001/changeMenuName/"+id+"/"+name);
    }
  };

  const handleIdChangeMenu = (event) => {
    setIdMenu(event.target.value);
  };

  const handlePriceChangeMenu = (event) => {
    setPrice(event.target.value);
  };

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