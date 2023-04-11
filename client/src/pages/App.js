import "../css/App.css";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Cashier from "./cashier/Cashier";
import Manager from "./manager/Manager";
import Customer from "./customer/Customer";
import Menu from "./menu/Menu";
import CashierMeal from "./cashier/CashierMeal";
import Home from "./home/Home";
import { CurOrderContextProvider } from "../hooks/CurOrderContext";
import CashierDrink from "./cashier/CashierDrink";
import CustomerMeal from "./customer/CustomerMeal";
import CustomerDrink from "./customer/CustomerDrink";
import CashierSeasonal from "./cashier/CashierSeasonal";
import{useEffect} from 'react';
import {Navigate}from "react-router-dom";
import { useState } from "react";
// import LoginButton from "./../login_comp/login";
// import LogoutButton from "./../login_comp/logout"
// import {gapi} from 'gapi-script';
// import GoogleLogin from "react-google-login";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./PrivateRoute";
import { useLocalState } from "./util/useLocalStorage";
import { useNavigate } from "react-router-dom";

const client_id = "910012439370-t5574l8cl6b2jsg0n2t4n55dg4cgqp7l.apps.googleusercontent.com";
//const google = window.google;

function App() {
    const [user, setUser] = useLocalState("","user");
    //const [user, setUser] = useState({});
    function handleCallbackREsponse(response){
        console.log("Encode JWT ID Google" +response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        console.log("logged in: ",user.email );
        document.getElementById("signInDiv").hidden = true;
    };

    function HandleSignOut (event){
        setUser({});
        console.log(user);
        document.getElementById("signInDiv").hidden = false;
        //const navigate = useNavigate();
        //navigate('/');
        window.location.href = '/';
    };

    useEffect(()=>{
       //if(!user){

        //console.log("google:",google.accounts);
        const google = window.google;
        document.getElementById("signInDiv").hidden = false;
        google.accounts.id.initialize({

            client_id:"910012439370-t5574l8cl6b2jsg0n2t4n55dg4cgqp7l.apps.googleusercontent.com",
                callback:handleCallbackREsponse
            
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme:"outline",size: "large"}
        );
       //}
    },[]);


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route key = "home" path="/" element={
                //<PrivateRoute>
                    <Home />
                //</PrivateRoute>
                } />
                <Route key = "cashier" path="/cashier" element={<Cashier />} />
                <Route key = "cashier-meal" path="/cashier/meal" element={<CashierMeal />} />
                <Route key = "cashier-drink" path="/cashier/drink" element={<CashierDrink />} />
                <Route key = "cashier-seasonal" path="/cashier/seasonal" element={<CashierSeasonal />} />
                <Route key = "manager" path="/manager" element={
                    <PrivateRoute>
                <Manager />
                </PrivateRoute>
                } />
                <Route key = "menu" path="/menu" element={<Menu />} />
                <Route key = "customer" path="/customer" element={<Customer />} />
                <Route key = "customer-drink" path="/customer/drink" element={<CustomerDrink />} />
                <Route key = "customer-meal" path="/customer/meal" element={<CustomerMeal />} />
            </Route>
        )
    );

    return (
        <div id="app">
        <div id ="signInDiv"></div>
        {Object.keys(user).length != 0 &&
            <button onClick = {(e)=> HandleSignOut(e)}>Sign Out</button>

        }

        {user &&
            <div>
                <img src = {user.picture}></img>
                <h3>{user.name}</h3>
            </div>}
        <CurOrderContextProvider>
            <RouterProvider router={router} />
        </CurOrderContextProvider>
        </div>
    );
}

export default App;