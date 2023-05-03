import React, { useEffect, useState } from "react";
import "../css/ad.css";

const ManagerPop = ({ ErrorPrompt, setErrorPrompt,setManagerPop }) => {

  /**
  * A side effect hook that sets a timeout to close a popup after a specified time period.
  *
  * @param {function} setErrorPrompt - A function to set an error prompt.
  *
  * @param {boolean} setManagerPop - A function to set the state of a manager popup.
  *
  * @returns {function} A cleanup function to clear the timeout on unmount.
  */
    useEffect(() => {
        
        // set a timeout to close the popup after 5 seconds
        const timeout = setTimeout(() => {
          setManagerPop(false);
        }, 2000);
    
        return () => clearTimeout(timeout); // cleanup function to clear the timeout on unmount
      }, [ setErrorPrompt, setManagerPop]);


  return (
    <>
      <div id="adwrap">
      <div className="heading">

                    <h2>
                        ERROR ERROR ERROR
                    </h2>
          </div>
          {ErrorPrompt == "missIng" &&(
            <h2>Ingredients are missing. Try again after refreshing page</h2>
          )}

          {ErrorPrompt == "Entry" &&(
            <h2>Ingredients are missing</h2>
          )}
          {ErrorPrompt == "helpMenu" &&(
            <>
            <h2> 1.First enter the ingredient name you want to add and the quantity of that ingredient in the recipe</h2>
            <h2>2. Press on the Add Ingredient button. It'll add the ingredient to a list and show it. </h2>
            <h2>3. To add more ingredients, keep on adding ingredient and quantity and click on add ingredient again </h2>
            <h2> 4.Click on done with ingredients afterwards</h2>
            <h2>5. Finish up by entering the name of the menu item and the price</h2>
            </>
          )}
          {ErrorPrompt == "completeChange" &&(
            <h2>Ingredient Quantities have been changed</h2>
          )}
                
                </div>
    </>
  );
};

export default ManagerPop;
