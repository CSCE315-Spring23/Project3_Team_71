import React, { useEffect, useState } from "react";

const ChangeMenu = () => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState ('');

  const handleSubmit = async () => {

    console.log("/changeIngredient/:"+id+"/:"+price+"/:"+name);
    const response = await fetch("http://localhost:3001/changeMenu/"+id+"/"+price+"/"+name);
  };
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h2>Change a Menu Item</h2>
      <form>
        <input 
        type = "text"
        id = "menuID" 
        name ="Menu ID"
        required = "required"
        placeholder="Enter Menu ID"
        value = {id}
        onChange = {handleIdChange}
        />
        <input 
        type = "text" 
        id = "price"
        name ="Price"
        placeholder="Enter New Price"
        value = {price}
        onChange = {handlePriceChange}
        />
        <input 
        type = "text" 
        id = "name"
        name ="Name"
        placeholder="Enter New Name"
        value = {name}
        onChange = {handleNameChange}
        />
        <button type ="button" onClick ={handleSubmit}>Change Menu Item</button>
      </form>
    </div>
  )
}

export default ChangeMenu
