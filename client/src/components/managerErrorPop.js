import React, { useEffect, useState } from "react";
import "../css/ad.css";

const ManagerPop = ({ ErrorPrompt, setErrorPrompt,setManagerPop }) => {

    useEffect(() => {
        
        // set a timeout to close the popup after 5 seconds
        const timeout = setTimeout(() => {
          setManagerPop(false);
        }, 2000);
    
        return () => clearTimeout(timeout); // cleanup function to clear the timeout on unmount
      }, [ setErrorPrompt, setManagerPop]);

  // function handleClicker(event) {
  //   console.log(event.target.closest("button").id);
  //   handleClick(event);
  //   setManagerPop(false);
  // }

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
                
                </div>
    </>
  );
};

export default ManagerPop;
