import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Produkter</h1>

      <input
        type="text"
        placeholder="Søk etter produkter..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="mb-6 p-2 border rounded w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <img
                src={product.image.url}
                alt={product.title}
                className="object-cover h-40 w-full"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.price} kr</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Forrige
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Neste
        </button>
      </div>
    </div>
  );
}
