import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import App from "./pages/App";
import Cashier from "./pages/cashier/Cashier";
import Header from "./pages/Header";
import Manager from "./pages/manager/Manager";


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
