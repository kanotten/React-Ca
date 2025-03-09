import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Her rendres sidene dynamisk */}
      </main>
      <Footer />
    </div>
  );
}
