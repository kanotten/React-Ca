import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Sørg for at du bruker BrowserRouter
import App from "./App"; // Importer App-komponenten
import "./index.css"; // Importer CSS for prosjektet ditt

// Sett opp React for å rendre App-komponenten i elementet med id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Sørg for at RouterWrapper er rundt hele applikasjonen */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
