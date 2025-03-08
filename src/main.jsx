import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import router from "./routes"; // Import the router configuration

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Provide the router here */}
  </React.StrictMode>,
);
