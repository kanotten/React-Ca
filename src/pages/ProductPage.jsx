import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/useCart";
import Button from "../components/Button";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addedCount, setAddedCount] = useState(0);
  const timerRef = useRef(null); // 🔹 Referanse for å lagre timeout ID

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

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAddedCount((prevCount) => prevCount + 1);
      setShowConfirmation(true);

      // 🔹 Hvis det allerede er en aktiv timeout, fjern den før vi starter en ny
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // 🔹 Start en ny timeout på 3 sekunder
      timerRef.current = setTimeout(() => {
        setShowConfirmation(false);
        setAddedCount(0);
        timerRef.current = null; // Nullstill referansen
      }, 3000);
    }
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      <img
        src={product.image.url}
        alt={product.title}
        className="rounded-lg mb-4"
      />
      <p className="text-lg font-semibold mb-2">${product.price}</p>
      <p>{product.description}</p>

      {/* 🔹 Legg til i handlekurv-knapp */}
      <Button variant="success" onClick={handleAddToCart}>
        Add to Cart
      </Button>

      {/* 🔹 Bekreftelsesmelding med antall */}
      {showConfirmation && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Product added to cart {addedCount}{" "}
          {addedCount === 1 ? "time" : "times"}!
        </div>
      )}
    </div>
  );
}
