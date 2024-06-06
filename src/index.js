import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

//Renders the react application to the division with id="root" in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);