import { createContext, useState, useEffect } from "react";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const { discountedPrice, originalPrice, discountPercentage } =
      getDiscountedPrice(product);
    const updatedProduct = {
      ...product,
      discountedPrice,
      originalPrice,
      discountPercentage,
      image: product.image.url,
    };
    setCart((prevCart) => [...prevCart, updatedProduct]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1);
        return updatedCart;
      }
      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
