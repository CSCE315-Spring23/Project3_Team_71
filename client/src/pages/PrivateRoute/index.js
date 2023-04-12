import React from "react";
import {Navigate}from "react-router-dom";
import {useLocalState} from "../util/useLocalStorage";
import {useEffect, useState,useMemo} from "react";

// const  PrivateRoute =({children}) => {
//     const [user,setUser]= useLocalState("","user");
//     const [isAuthorized, setIsAuthorized] = useState(false);
//     const [privilege, setPrivilege] = useState(null);
//     const [shouldRender , setShouldRender] = useState(false);
//     //  let privilege = null;
//     // let isAuthorized = null;
//     console.log("route :",user);
//     // useEffect(() => {
//     // //useMemo(async () =>{
//     async function checkPriv(){
//     if(user.hasOwnProperty('email')){ 
//         console.log(user);
//         console.log("user is here");
//         console.log(typeof user);
//         //try {
//             const response = await fetch("http://localhost:3001/check-authorization", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ email: user.email }),
//             });
  
//             const data =  await response.json();
//             console.log("data: ", data, "is authorized: ",data.isAuthorized, "is priv: ",data.privilege);
//             setIsAuthorized(data.isAuthorized);
//             setPrivilege(data.privilege);
//             console.log("got data back");
//             console.log(privilege);

//             if(data.isAuthorized && data.privilege ==='manager' ){
//               console.log("user found")
//               return children;
//             }else{
//               console.log("priv failed")
//               return <Navigate to = "/" />
//             }

//           // } catch (error) {
//           //   console.log(error);
//           // }
          
//         //}
//      }
//     }
//     checkPriv();
    
//   // },[user]);

//   // useEffect(()=>{
//   //   //const renderedComponent = useMemo(()=>{
//   // console.log("after priv privilege:",privilege);
//   //       if(isAuthorized && privilege === "manager"){
//   //         console.log("privilege check pass")
//   //       //return children;
//   //       setShouldRender(true);
//   //   }else if(isAuthorized){
//   //     console.log("not privileged");
//   //     //return <Navigate to = "/" />;
//   //     setShouldRender(false);
//     // else{
//     //     console.log("no user");
//     //     //return <Navigate to = "/" />;
//     //     setShouldRender(false);
//     // }
//   // },[privilege,isAuthorized,children]);

//   // //return renderedComponent;

//   // return (
//   //   <>
//   //     {shouldRender ? (
//   //       {children}
//   //     ) : (
//   //       <Navigate to="/" />
//   //     )}
//   //   </>
//   // )
// };

// export default PrivateRoute;


// const PrivateRoute = ({ children }) => {
//   const [user, setUser] = useLocalState("", "user");
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [privilege, setPrivilege] = useState(null);
//   const [shouldRender, setShouldRender] = useState(false);

//   useEffect(() => {
//     async function checkPriv() {
//       if (user.hasOwnProperty("email")) {
//         const response = await fetch("http://localhost:3001/check-authorization", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email: user.email }),
//         });

//         const data = await response.json();
//         console.log("data: ", data, "is authorized: ", data.isAuthorized, "is priv: ", data.privilege);
//         setIsAuthorized(data.isAuthorized);
//         setPrivilege(data.privilege);
//         console.log("got data back");
//         console.log(privilege);

//         if (data.isAuthorized && data.privilege === "manager") {
//           console.log("user found");
//           setShouldRender(true);
//         } else {
//           console.log("priv failed");
//           setShouldRender(false);
//         }
//       }
//     }
//     checkPriv();
//   }, []);
//   useEffect(() => {
//     console.log("isAuthorized: ", isAuthorized);
//     console.log("privilege: ", privilege);

//     if (isAuthorized && privilege === "manager") {
//       console.log("user found");
//       setShouldRender(true);
//     } else {
//       console.log("priv failed");
//       setShouldRender(false);
//     }
//   }, []);
//   const renderedComponent = useMemo(()=>{
//     console.log("rednsdsdk")
//   if (shouldRender) {
//     return children;
//   } else {
//     return <Navigate to="/" />;
//   }
// },[]);
// return renderedComponent;
// };
// export default PrivateRoute;

const PrivateRouteManager = React.memo(({ children }) => {
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

        if (data.isAuthorized && data.privilege === "manager") {
          console.log("user found");
          // do something here if success
          // setShouldRender(true); // not needed
          setShouldRender(true);
        } else {
          console.log("priv failed");
          // do something here if it failed
          // setShouldRender(false); // not needed
          setShouldRender(false);
         // since you want to navigate to "/" if the check is false, you can simply do it here
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


export default PrivateRouteManager;