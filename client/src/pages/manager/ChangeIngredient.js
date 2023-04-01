import React, { useEffect, useState } from "react";


const ChangeIngredient = () => {


  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState ('');

  const handleSubmit = async () => {

    console.log("/changeIngredient/:"+id+"/:"+quantity+"/:"+name);
    const response = await fetch("http://localhost:3001/changeIngredient/"+id+"/"+quantity+"/"+name);
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


  return (
    <div>
      <h2>Change a Ingredient</h2>
      <form>
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
  )
}

export default ChangeIngredient