import { useCart } from "../context/useCart";
import Button from "../components/Button";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart
    .reduce((total, product) => total + product.discountedPrice, 0)
    .toFixed(2);

  const originalPrice = cart
    .reduce((total, product) => total + product.originalPrice, 0)
    .toFixed(2);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((product) => {
              const { discountedPrice, originalPrice } =
                getDiscountedPrice(product);
              return (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-md flex items-center"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-600">
                      <span className="line-through">{originalPrice} kr</span>{" "}
                      {discountedPrice} kr
                    </p>
                  </div>
                  <Button
                    onClick={() => removeFromCart(product.id)}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-lg">
              <span>Total (Original):</span>
              <span>{originalPrice} kr</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-2">
              <span>Total (Discounted):</span>
              <span>{totalPrice} kr</span>
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-4">
            <Button onClick={clearCart} variant="danger">
              Clear Cart
            </Button>
            <Link to="/checkout-success">
              <Button variant="primary">Proceed to Checkout</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
