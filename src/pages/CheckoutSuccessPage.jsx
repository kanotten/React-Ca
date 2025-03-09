import { useEffect } from "react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      clearCart();
    }, 100);

    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Thank you for your purchase!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been successfully placed.
      </p>

      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
}
