import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/useCart";
import Button from "../components/Button";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const navigate = useNavigate();

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

  const { discountedPrice, originalPrice, discountPercentage } = product
    ? getDiscountedPrice(product)
    : {};

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessageCount((prev) => prev + 1);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  if (!product) return <div>Loading product...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
        Back
      </Button>
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <img
        src={product.image.url}
        alt={product.title}
        className="rounded-lg mb-4"
      />
      <div className="flex items-center gap-4 mb-4">
        {discountPercentage > 0 && (
          <span className="text-red-500 text-sm line-through">
            {originalPrice} kr
          </span>
        )}
        <p className="text-lg font-semibold">{discountedPrice} kr</p>
        {discountPercentage > 0 && (
          <span className="text-teal-500 text-sm">
            -{discountPercentage}% OFF
          </span>
        )}
      </div>
      <p>{product.description}</p>
      <div className="flex gap-4 mt-6">
        <Button variant="primary" onClick={() => handleAddToCart(product)}>
          Add to Cart
        </Button>
      </div>
      {showMessage && (
        <div className="bg-green-200 text-green-800 p-4 rounded-lg mt-4">
          Product added to cart {messageCount}{" "}
          {messageCount > 1 ? "times" : "time"}
        </div>
      )}
    </div>
  );
}
