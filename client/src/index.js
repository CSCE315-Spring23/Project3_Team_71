import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import Cashier from "./cashier/Cashier";
import Header from "./Header";
import Manager from "./manager/Manager";


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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />

        <RouterProvider router={router} />
    </React.StrictMode>
);
