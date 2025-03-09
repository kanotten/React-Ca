import { useCart } from "../context/useCart";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex gap-4">
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="h-16 w-16 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          ))}

          <div className="mt-6 text-xl font-semibold">Total: ${totalPrice}</div>

          <div className="flex gap-4 mt-4">
            <Button variant="danger" onClick={clearCart}>
              Clear Cart
            </Button>
            <Link to="/checkout-success">
              <Button variant="primary">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
