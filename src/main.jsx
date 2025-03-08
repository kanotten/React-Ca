import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for createRoot
import App from "./App"; // Import your main App component

// Use createRoot to render the app into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
