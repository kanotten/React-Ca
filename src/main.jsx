import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importerer hovedkomponenten
import "./index.css"; // Importerer global styling

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App /> {/* Kun App håndterer routing */}
  </React.StrictMode>,
);
