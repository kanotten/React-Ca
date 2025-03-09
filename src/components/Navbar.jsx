import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product/1" className="hover:text-blue-400">
            Product
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-blue-400">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout-success" className="hover:text-blue-400">
            Checkout Success
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
