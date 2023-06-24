import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Cart from "./views/Cart/Cart";
import Register from './views/Register/Register';
import Checkout from "./views/Checkout/Checkout";

function App() {
  return (
    <>
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
