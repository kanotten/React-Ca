import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";

function Price({ originalPrice, discountedPrice, discountPercentage }) {
  return (
    <div className="flex items-center justify-between mt-2">
      {discountedPrice < originalPrice ? (
        <>
          <p className="text-gray-400 line-through">{originalPrice}</p>
          <p className="text-xl font-semibold">{discountedPrice} kr</p>
        </>
      ) : (
        <p className="text-xl font-semibold">{originalPrice} kr</p>
      )}

      {discountedPrice < originalPrice && (
        <span className="absolute top-2 right-2 text-sm text-white bg-teal-600 py-1 px-2 rounded-md">
          {discountPercentage}% Off
        </span>
      )}
    </div>
  );
}

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
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="mb-6 p-2 border rounded w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => {
          const { discountedPrice, originalPrice, discountPercentage } =
            getDiscountedPrice(product);

          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="relative border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={product.image.url}
                  alt={product.title}
                  className="object-cover h-40 w-full"
                />
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <Price
                  originalPrice={originalPrice}
                  discountedPrice={discountedPrice}
                  discountPercentage={discountPercentage}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </Button>

        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
