import { useEffect, useState } from "react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function CheckoutSuccessPage() {
  const { cart, clearCart } = useCart();
  const [orderSummary, setOrderSummary] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      setOrderSummary(cart);
      const timer = setTimeout(() => {
        clearCart();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [cart, clearCart]);

  const totalPrice = orderSummary.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-2">
        Thank you for your purchase!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your order has been successfully placed. Below is your order summary.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md border mb-6">
        <h2 className="text-xl font-semibold mb-3 text-left">Order Summary</h2>
        {orderSummary.length > 0 ? (
          <div className="space-y-4">
            {orderSummary.map((item, index) => (
              <div key={index} className="flex justify-between border-b pb-3">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image.url}
                    alt={item.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.price} kr</p>
                  </div>
                </div>
                <span className="text-gray-800 font-medium">x1</span>
              </div>
            ))}
            <div className="text-xl font-semibold mt-4 text-right">
              Total: {totalPrice} kr
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No items to display.</p>
        )}
      </div>

      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
}
