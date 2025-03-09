import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product/1" className="hover:underline">
            Product
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout-success" className="hover:underline">
            Checkout
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
