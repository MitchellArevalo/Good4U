import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Contact from "./views/Contact/Contact";
import Login from './views/Login/Login';
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./views/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
