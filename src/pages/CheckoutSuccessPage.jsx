import { useCart } from "../context/useCart";
import Button from "../components/Button";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";
import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  const { cart, clearCart } = useCart();

  const totalPrice = cart
    .reduce((total, product) => total + product.discountedPrice, 0)
    .toFixed(2);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout Success</h1>
      <p className="text-lg mb-6">Thank you for your purchase!</p>

      <div className="space-y-4">
        {cart.map((product) => {
          const { discountedPrice, originalPrice } =
            getDiscountedPrice(product);
          return (
            <div key={product.id} className="border rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-gray-600">
                    <span className="line-through">{originalPrice} kr</span>{" "}
                    {discountedPrice} kr
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total Price:</span>
          <span>{totalPrice} kr</span>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/">
          <Button variant="primary" onClick={clearCart}>
            Back to Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
