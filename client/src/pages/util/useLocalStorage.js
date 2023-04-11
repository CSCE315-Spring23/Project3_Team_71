import {useEffect , useState} from "react"

function useLocalState(defaultValue , key){
    const [value,setValue] = useState(() =>{
        const localStorageValue = localStorage.getItem(key);
        console.log("peep: ", localStorageValue);
        return localStorageValue !== null ? JSON.parse(localStorageValue):defaultValue;
    }
    
    );
    console.log("from localState:",key ," value is: ",value);
    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(value));
        console.log("popo: ",value);
    },[key,value]);

    return [value, setValue];
}



export {useLocalState}