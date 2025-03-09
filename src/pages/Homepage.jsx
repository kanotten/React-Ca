import { useState, useEffect } from "react";

export default function Homepage() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Produkter</h1>
    </div>
  );
}
