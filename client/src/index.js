import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./pages/App";
import Header from "./pages/Header";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <App />
    </React.StrictMode>
);
