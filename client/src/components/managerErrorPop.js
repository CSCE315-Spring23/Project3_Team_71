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
            <h2>Ingredients are missing</h2>
          )}

          {ErrorPrompt == "Entry" &&(
            <h2>Ingredients are missing</h2>
          )}
          {ErrorPrompt == "helpMenu" &&(
            <h2>In here</h2>
          )}
                
                </div>
    </>
  );
};

export default ManagerPop;
