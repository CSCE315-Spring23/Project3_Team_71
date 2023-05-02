import React, { useState } from "react";
import "../../css/AddMenuItem.css";
import { HOST } from "../../host";

import ManagerPop from "../../components/managerErrorPop";
// const express = require('express')
// const app =express();
// app.use(express.json)

/**
 * Description
 * @returns {any}
 */
function MenuAdder() {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const[ingDone , setIngDone] = useState(false);
  const [showManagerPop , setManagerPop] = useState(false);
  const [ErrorPrompt , setErrorPrompt] = useState("");
  
  const handleAddIngredient = () => {
    const newIngredient = { name: ingredient, quantity: quantity };
    setIngredients([...ingredients, newIngredient]);
    setIngredient("");
    setQuantity("");
  };

  const handleMissingIngredients = () => {
    setErrorPrompt("missIng");
  };
  const helpScreen = () =>{
    setErrorPrompt("helpMenu");
    setManagerPop(true);
  }
  const handleDoneIngredients = () => {

    console.log(ingredients);
    fetch(`${HOST}/addMenu`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({ingredients})
    }) .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.message ==="fault"){
        console.log("fault");
      }
      const form = document.getElementById("menuadder-form");
    form.innerHTML = ``;
    //   <label htmlFor="item-name">Item Name:</label>
    //   <input type="text" id="item-name" name="item-name" value="${itemName}" onChange={handleItemNameChange} required />
    //   <label htmlFor="price">Price:</label>
    //   <input type="number" id="price" name="price" value="${price}" onChange={handlePriceChange} required />
    //   <button type="button" onClick={handleAddOrder}>Add Order</button>
    // ;
    
    setIngDone(true);
    })
    .catch(error => {
      
      console.error(error)
      console.log("paad");
      const form = document.getElementById("menuadder-form");
      handleMissingIngredients();
      setManagerPop(true);
    form.innerHTML = `
      <label htmlFor="ingredient">Ingredient:</label>
      <input type="text" id="ingredient" name="ingredient" value="${ingredient}" onChange={handleIngredientChange} required />
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" value="${quantity}" onChange={handleQuantityChange} required />
      <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
    `;
    setManagerPop(true);

    });

    
  };

  const handleAddOrder = () => {
    // Do something with the item name and price (e.g. add them to an order list)
    fetch(`${HOST}/addmenu/completeMenu`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({'name':itemName , 'price':price})
    }) .then(response => response.json())
    .then(data => {console.log(data);})
    .catch(error => { console.error(error); });
    // Reset the form to add ingredients again
    const form = document.getElementById("menuadder-form");
    form.innerHTML = `
      <label htmlFor="ingredient">Ingredient:</label>
      <input type="text" id="ingredient" name="ingredient" value="${ingredient}" onChange={handleIngredientChange} required />
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" value="${quantity}" onChange={handleQuantityChange} required />
      <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
    `;
  };

  /**
   * Description
   * @param {any} event
   * @returns {any}
   */
  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  };

  /**
   * Description
   * @param {any} event
   * @returns {any}
   */
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
    <button type = "button" class="my-button"  > Help</button>
    <div id="menuadder">
      
      <h3>Add Ingredients</h3>
      <form id="menuadder-form">
      <button type = "button" onClick ={helpScreen} > Help</button>
        <label htmlFor="ingredient">Ingredient:</label>
        <input type="text" id="ingredient" name="ingredient" value={ingredient} onChange={handleIngredientChange} required />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} required />
        <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        {ingredients.length > 0 && (
          <div>
            <h3>Added Ingredients:</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name} - {ingredient.quantity} | </li>
              ))}
            </ul>
          </div>
        )}
        {ingredients.length > 0 && (
          <button type="button" onClick={handleDoneIngredients}>Done with Ingredients</button>
        )}
        
        {ingDone && (
          <div>
          <label htmlFor="item-name">Item Name:</label>
          <input type="text" id="item-name" name="item-name" value={itemName} onChange={handleItemNameChange} required />
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={price} onChange={handlePriceChange} required />
          <button type="button" onClick={handleAddOrder}>Add Order</button>
          </div>
        )}
        
      </form>
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
  );
}

export default MenuAdder;



/////////////////////////


// import React, { useState } from "react";
// import "../../css/AddMenuItem.css"

// import ManagerPop from "../../components/managerErrorPop";
// // const express = require('express')
// // const app =express();
// // app.use(express.json)

// /**
//  * Description
//  * @returns {any}
//  */
// function MenuAdder() {
//   const [ingredient, setIngredient] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [itemName, setItemName] = useState("");
//   const [price, setPrice] = useState("");
//   const [ingredients, setIngredients] = useState([]);
//   const[ingDone , setIngDone] = useState(false);
//   const [showManagerPop , setManagerPop] = useState(false);
//   const [ErrorPrompt , setErrorPrompt] = useState("");

//   const handleAddIngredient = () => {
//     const newIngredient = { name: ingredient, quantity: quantity };
//     setIngredients([...ingredients, newIngredient]);
//     setIngredient("");
//     setQuantity("");
//   };

//   const handleMissingIngredients = () => {
//     setErrorPrompt("missIng");
//   };

//   const helpScreen = () =>{
//     setErrorPrompt("helpMenu");
//     setManagerPop(true);
//   }
//   const handleDoneIngredients = () => {

//     console.log(ingredients);
//     fetch("http://localhost:3001/addMenu", {
//       method: 'POST',
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({ingredients})
//     }) .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       if(data.message ==="fault"){
//         console.log("fault");
//       }
//       const form = document.getElementById("menuadder-form");
//     form.innerHTML = ``;
//     //   <label htmlFor="item-name">Item Name:</label>
//     //   <input type="text" id="item-name" name="item-name" value="${itemName}" onChange={handleItemNameChange} required />
//     //   <label htmlFor="price">Price:</label>
//     //   <input type="number" id="price" name="price" value="${price}" onChange={handlePriceChange} required />
//     //   <button type="button" onClick={handleAddOrder}>Add Order</button>
//     // ;
    
//     setIngDone(true);
//     })
//     .catch(error => {
      
//       console.error(error)
//       console.log("paad");
//       const form = document.getElementById("menuadder-form");
//       handleMissingIngredients();
//       setManagerPop(true);
//     form.innerHTML = `
//       <label htmlFor="ingredient">Ingredient:</label>
//       <input type="text" id="ingredient" name="ingredient" value="${ingredient}" onChange={handleIngredientChange} required />
//       <label htmlFor="quantity">Quantity:</label>
//       <input type="number" id="quantity" name="quantity" value="${quantity}" onChange={handleQuantityChange} required />
//       <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
//     `;
//     setManagerPop(true);

//     });

    
//   };

//   const handleAddOrder = () => {
//     // Do something with the item name and price (e.g. add them to an order list)
//     fetch("http://localhost:3001/addmenu/completeMenu", {
//       method: 'POST',
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({'name':itemName , 'price':price})
//     }) .then(response => response.json())
//     .then(data => {console.log(data);})
//     .catch(error => { console.error(error); });
//     // Reset the form to add ingredients again
//     const form = document.getElementById("menuadder-form");
//     form.innerHTML = `
//       <label htmlFor="ingredient">Ingredient:</label>
//       <input type="text" id="ingredient" name="ingredient" value="${ingredient}" onChange={handleIngredientChange} required />
//       <label htmlFor="quantity">Quantity:</label>
//       <input type="number" id="quantity" name="quantity" value="${quantity}" onChange={handleQuantityChange} required />
//       <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
//     `;
//   };

//   /**
//    * Description
//    * @param {any} event
//    * @returns {any}
//    */
//   const handleIngredientChange = (event) => {
//     setIngredient(event.target.value);
//   };

//   /**
//    * Description
//    * @param {any} event
//    * @returns {any}
//    */
//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };

//   const handleItemNameChange = (event) => {
//     setItemName(event.target.value);
//   };

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//   };

//   return (
//     <>
//     <button type = "button" class="my-button"  > Help</button>
//     <div id="menuadder">
      
//       <h3>Add Ingredients</h3>
//       <form id="menuadder-form">
//       <button type = "button" onClick ={helpScreen} > Help</button>
//         <label htmlFor="ingredient">Ingredient:</label>
//         <input type="text" id="ingredient" name="ingredient" value={ingredient} onChange={handleIngredientChange} required />
//         <label htmlFor="quantity">Quantity:</label>
//         <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} required />
//         <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
//         {ingredients.length > 0 && (
//           <div>
//             <h3>Added Ingredients:</h3>
//             <ul>
//               {ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient.name} - {ingredient.quantity} | </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {ingredients.length > 0 && (
//           <button type="button" onClick={handleDoneIngredients}>Done with Ingredients</button>
//         )}
        
//         {ingDone && (
//           <div>
//           <label htmlFor="item-name">Item Name:</label>
//           <input type="text" id="item-name" name="item-name" value={itemName} onChange={handleItemNameChange} required />
//           <label htmlFor="price">Price:</label>
//           <input type="number" id="price" name="price" value={price} onChange={handlePriceChange} required />
//           <button type="button" onClick={handleAddOrder}>Add Order</button>
//           </div>
//         )}
        
//       </form>
//     </div>

//     <div>

//   {showManagerPop && (
//     <ManagerPop
//         ErrorPrompt={ErrorPrompt}
//         setErrorPrompt={setErrorPrompt}
//         setManagerPop={setManagerPop}
//     />
// )}
// </div>
// </>
//   );
// }

// export default MenuAdder;