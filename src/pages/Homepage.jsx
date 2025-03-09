import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Produkter</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <img
                src={product.image.url}
                alt={product.title}
                className="object-cover h-48 w-full"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.price} kr</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
