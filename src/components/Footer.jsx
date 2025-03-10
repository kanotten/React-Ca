export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sheikh Express. All rights reserved.
        </p>
        <nav className="mt-2">
          <ul className="flex justify-center gap-4 text-gray-400">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-white transition-colors">
                Cart
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
