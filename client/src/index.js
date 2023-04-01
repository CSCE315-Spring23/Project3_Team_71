import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import App from "./pages/App";
import Cashier from "./pages/cashier/Cashier";
import Header from "./pages/Header";
import Manager from "./pages/manager/Manager";
import Customer from "./pages/customer/Customer";
import Menu from "./pages/menu/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/cashier",
        element: <Cashier />,
    },
    {
        path: "/manager",
        element: <Manager />,
    },
    {
        path: "/customer",
        element: <Customer />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />

        <RouterProvider router={router} />
    </React.StrictMode>
);
