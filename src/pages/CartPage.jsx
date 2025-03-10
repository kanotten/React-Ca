import { useCart } from "../context/useCart";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CartItem = ({ item, removeFromCart }) => (
  <div
    key={item.id}
    className="flex justify-between items-center border-b py-4"
  >
    <div className="flex gap-4">
      <img
        src={item.image?.url || "/default-image.jpg"}
        alt={item.title}
        className="h-16 w-16 object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p>{item.price} kr</p>
      </div>
    </div>
    <Button variant="danger" onClick={() => removeFromCart(item.id)}>
      Remove
    </Button>
  </div>
);

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (!cart.length) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}

        <div className="mt-6 text-xl font-semibold">Total: {totalPrice} kr</div>

        <div className="flex gap-4 mt-4">
          <Button variant="danger" onClick={clearCart}>
            Clear Cart
          </Button>
          <Link to="/checkout-success">
            <Button variant="primary">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
