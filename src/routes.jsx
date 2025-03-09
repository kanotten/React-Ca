import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout"; // Bruker layout-komponenten
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Bruker RootLayout i stedet for App
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout-success", element: <CheckoutSuccessPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
