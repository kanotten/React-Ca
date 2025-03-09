import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.length;

  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex justify-center gap-6 text-gray-400">
        <li>
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="hover:text-white transition-colors">
            Cart
          </Link>
          {totalItems > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </li>
        <li>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
