import { RouterProvider } from "react-router-dom";
import router from "./routes"; // Importerer rutene

export default function App() {
  return <RouterProvider router={router} />; // Håndterer ruting
}
