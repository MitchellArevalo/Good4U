import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Checkout from "./views/Checkout/Checkout";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import ChatBox from "./components/ChatBox/ChatBox";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

//Acomodar el finalizar compar
//Navbar y carrito

export default App;
