import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const data = await res.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Laster produkt...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <img
        src={product.image.url}
        alt={product.title}
        className="rounded-lg mb-4"
      />
      <p className="text-lg font-semibold mb-2">{product.price} kr</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
