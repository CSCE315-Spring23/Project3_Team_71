import React, { useState } from "react";
import "../../css/AddMenuItem.css";
import { HOST } from "../../host";

import ManagerPop from "../../components/managerErrorPop";
/**

A React component that allows the user to add ingredients and create a menu item.
@returns {JSX.Element} A React component that includes input fields for adding ingredients, and creating a menu item.
*/
function MenuAdder() {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingDone, setIngDone] = useState(false);
  const [showManagerPop, setManagerPop] = useState(false);
  const [ErrorPrompt, setErrorPrompt] = useState("");
  /**

Function that adds a new ingredient to the array of ingredients and clears the input fields.
*/
  const handleAddIngredient = () => {
    const newIngredient = { name: ingredient, quantity: quantity };
    setIngredients([...ingredients, newIngredient]);
    setIngredient("");
    setQuantity("");
  };
  /**
  
  Function that prompts the user if they are missing ingredients.
  */
  const handleMissingIngredients = () => {
    setErrorPrompt("missIng");
  };
  /**

Function that displays the help menu to the user.
*/
  const helpScreen = () => {
    setErrorPrompt("helpMenu");
    setManagerPop(true);
  }
  /**

Function that sends the list of ingredients to the server and completes the process of adding a new menu item.
*/
  const handleDoneIngredients = () => {

    console.log(ingredients);
    fetch(`${HOST}/addMenu`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredients })
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.message === "fault") {
          console.log("fault");
        }
        const form = document.getElementById("menuadder-form");
        form.innerHTML = ``;
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

  /**

Handles adding an order to the menu.
Sends an HTTP POST request to the server with the item name and price.
@function
@returns {void}
*/

  const handleAddOrder = () => {
    // Do something with the item name and price (e.g. add them to an order list)
    fetch(`${HOST}/addmenu/completeMenu`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'name': itemName, 'price': price })
    }).then(response => response.json())
      .then(data => { console.log(data); })
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
  
  Handles a change in the ingredient input field and updates the state.
  @function
  @param {Object} event - The event object.
  @returns {void}
  */
  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  };

  /**
  
  Handles a change in the quantity input field and updates the state.
  @function
  @param {Object} event - The event object.
  @returns {void}
  */

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  /**
  
  Handles a change in the item name input field and updates the state.
  @function
  @param {Object} event - The event object.
  @returns {void}
  */
  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };
  /**
  
  Handles a change in the price input field and updates the state.
  @function
  @param {Object} event - The event object.
  @returns {void}
  */
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      {/* <button type = "button" class="my-button"  > Help</button> */}
      <div id="menuadder">
      <div className="help">
            <button type="button" className="help-btn" onClick={helpScreen} > Help</button>
          </div>
        <h3>Add Ingredients</h3>
        <form id="menuadder-form">    
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
        <br></br>
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
