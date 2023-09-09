import React, { useState, useEffect } from "react";

const CartNotification = ({ show }) => {
  const [isVisibleNotification, setIsVisibleNotification] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisibleNotification(true);
      const timer = setTimeout(() => {
        setIsVisibleNotification(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  return (
    <>
      {isVisibleNotification && (
        <div className="fixed : top-20 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black text-lg px-4 py-2 rounded-lg shadow-md">
          El producto se ha añadido al carrito.
        </div>
      )}
    </>
  );
};

export default CartNotification;
