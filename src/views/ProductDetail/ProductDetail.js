import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartNotification from "../../components/CartNotification/CartNotification";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../hooks/useCart";
import { useLocation } from "react-router-dom";
const styleIcon = {
  fontSize: "25px",
};
const listSize = ["S", "M", "L", "XL"];
function ProductDetail() {
  const [selectSize, setSelectSize] = useState(null);
  const [showSizeWarning, setShowSizeWarning] = useState(false); // Estado para mostrar el mensaje de "Escoja una talla"
  const [cartNotificationVisible, setCartNotificationVisible] = useState(false);
  const location = useLocation();
  const product = location.state;
  const { addToCart } = useCart();

  const getSizeProduct = (size) => {
    setSelectSize(size);
  };

  const addProductInCart = ({ product, id, size }) => {
    setCartNotificationVisible(true);

    if (!size) return setShowSizeWarning(true);
    addToCart({
      product,
      id: id,
      size: size,
    });
    setTimeout(() => {
      setCartNotificationVisible(false);
    }, 2000);
  };

  useEffect(() => {
    if (!selectSize) return;
    setShowSizeWarning(false);
  }, [selectSize]);
  return (
    <>
      <Navbar />
      <section className="relative m-8">
        <h2 className=" text-xl p-5">{`${product.id} - ${product.title}`}</h2>
        <div className="flex flex-col  justify-around gap-8 p-5  md:flex-row ">
          <div className=" flex flex-col gap-5 md:w-1/3 ">
            <img src={product.image} alt={product.title} />
            <p className="font-bold text-lg self-center ">{`$${product.price}`}</p>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <h2 className="font-bold text-xl">{product.title}</h2>
            <p className="py-5">{product.description}</p>
            <div>
              <h2 className="font-bold ">SELECCIONAR TALLA</h2>
              <div className="my-5">
                {listSize.map((size, i) => (
                  <button
                    key={i}
                    onClick={() => getSizeProduct(size)}
                    className={`py-1 px-2 mx-2 border  rounded-2xl text-sm hover:bg-black hover:text-white ${
                      selectSize === size ? `bg-black text-white` : undefined
                    } `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">{product.name}</p>

              {showSizeWarning && (
                <p className="text-red-600 font-bold ">
                  Debes elegir una talla para tu prenda
                </p>
              )}
              <button
                onClick={() =>
                  addProductInCart({
                    product: product,
                    size: selectSize,
                    id: product.id,
                  })
                }
                className={`w-full p-1  rounded-lg text-white bg-green-600 cursor-pointer 
                `}
              >
                <AddShoppingCartIcon style={styleIcon} />

                <span className="p-2">Agregar al Carrito</span>
              </button>
            </div>
          </div>
        </div>

        <CartNotification show={cartNotificationVisible} />
      </section>

      <Footer />
    </>
  );
}

export default ProductDetail;
