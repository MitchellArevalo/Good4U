import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Contact from "./views/Contact/Contact";
import Login from "./views/Login/Login";
import Cart from "./views/Cart/Cart";
import Register from './views/Register/Register';

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
      </Routes>
    </>
  );
}

export default App;
