import { useState, useEffect } from "react";

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
    <div>
      <h1 className="text-2xl font-bold p-4">Produkter</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
