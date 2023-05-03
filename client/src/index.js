import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./pages/App";

/**

The root element of the React application
@type {ReactRoot}
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
