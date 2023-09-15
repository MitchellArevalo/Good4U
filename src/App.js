import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Checkout from "./views/Checkout/Checkout";
import SettingsUser from "./views/SettingsUser/SettingsUser";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import { PrivateRouterCheck, PrivateRouterAuth } from "./routes/PrivateRouter";
import Cart from "./views/Cart/Cart";
import PaymentConfirmation from "./views/PaymentConfirmation/PaymentConfirmation";

function App() {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <PrivateRouterAuth>
            <Register />
          </PrivateRouterAuth>
        }
      />
      <Route
        path="/login"
        element={
          <PrivateRouterAuth>
            <Login />
          </PrivateRouterAuth>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <PrivateRouterCheck>
            <Checkout />
          </PrivateRouterCheck>
        }
      />
      <Route
        path="/settingsuser"
        element={
          <PrivateRouterCheck>
            <SettingsUser />
          </PrivateRouterCheck>
        }
      />

      <Route
        path="/paymentConfirmation"
        element={
          <PrivateRouterCheck>
            <PaymentConfirmation />
          </PrivateRouterCheck>
        }
      />
    </Routes>
  );
}

//Acomodar el finalizar compar
//Navbar y carrito

export default App;
