import React from "react";
import {Navigate}from "react-router-dom";
import {useLocalState} from "../util/useLocalStorage";

const PrivateRoute =({children}) => {
    const [user,setUser]= useLocalState("","user");
    console.log("route :",user);

    if(user.hasOwnProperty('email')){ 
        console.log(user);
        console.log("user is here");
        console.log(typeof user);
        return children;
    }else{ 
        console.log("no user");
        return <Navigate to = "/" />;
    }
};
export default PrivateRoute;
