import React from "react";
import {Navigate}from "react-router-dom";
import {useLocalState} from "../util/useLocalStorage";
import {useEffect, useState,useMemo} from "react";


const PrivateRouteCashier = React.memo(({ children }) => {
    const [user, setUser] = useLocalState("", "user");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [privilege, setPrivilege] = useState(null);
    const [shouldRender, setShouldRender] = useState(false);
  
    const make_request = React.useCallback(async () => {
        return await fetch("http://localhost:3001/check-authorization", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
          })
         .then(res => res.json())
         .then(data => data);
  }, [user])
  
    const checkPriv = React.useCallback(async () => {
        if (user.hasOwnProperty("email")) {
          const data = await make_request()
  
  
          console.log("data: ", data, "is authorized: ", data.isAuthorized, "is priv: ", data.privilege);
          setIsAuthorized(data.isAuthorized);
          setPrivilege(data.privilege);
          console.log("got data back");
          console.log(privilege);
  
          if (data.isAuthorized && (data.privilege === "manager" || data.privilege ==="cashier")) {
            console.log("user found");

            setShouldRender(true);
          } else {
            console.log("priv failed");

            setShouldRender(false);
           document.location.assign('/')
          }
        }else{
          document.location.assign('/')
        }
      }, [user])
  
    useEffect(() => {
      checkPriv();
    }, []);
    
    
      return shouldRender ? children : '';
  });
  
  
  export default PrivateRouteCashier;