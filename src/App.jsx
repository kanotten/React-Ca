import { Outlet } from "react-router-dom"; // Import Outlet to display child routes

export default function App() {
  return (
    <div>
      <h1>Header content (can be your header)</h1>
      <Outlet />{" "}
      {/* This renders the matched route's component (like Homepage) */}
    </div>
  );
}
