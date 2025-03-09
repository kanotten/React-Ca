import { RouterProvider } from "react-router-dom"; // Importer RouterProvider
import router from "./routes"; // Importer ruter

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />{" "}
      {/* Sørg for at RouterProvider brukes her */}
    </div>
  );
}
