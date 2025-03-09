import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex justify-center gap-6 text-gray-400">
        <li>
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product/1" className="hover:text-white transition-colors">
            Product
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-white transition-colors">
            Cart
          </Link>
        </li>
        <li>
          <Link
            to="/checkout-success"
            className="hover:text-white transition-colors"
          >
            Checkout
          </Link>
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
