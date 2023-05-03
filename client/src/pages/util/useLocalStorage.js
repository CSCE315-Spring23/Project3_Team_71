import {useEffect , useState} from "react"

/**
Custom hook for managing state using local storage

@param {*} defaultValue - the initial value of the state

@param {string} key - the key to use for the local storage item

@returns {Array} an array containing the state value and the function to update it
*/
function useLocalState(defaultValue , key){
    const [value,setValue] = useState(() =>{
        const localStorageValue = localStorage.getItem(key);
        console.log("peep: ", localStorageValue);
        return localStorageValue !== null ? JSON.parse(localStorageValue):defaultValue;
    }
    
    );
    console.log("from localState:",key ," value is: ",value);

    /**
    Updates the local storage item when the state changes
    */
    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(value));
        console.log("popo: ",value);
    },[key,value]);

    return [value, setValue];
}

export {useLocalState}