import React, { useState, useEffect } from "react";

const CartNotification = ({ show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  return (
    <>
      {isVisible && (
        <div className="absolute bottom-3 left-5 bg-yellow-300 font-bold text-white p-5 rounded-md">
          El producto se ha añadido al carrito.
        </div>
      )}
    </>
  );
};

export default CartNotification;
