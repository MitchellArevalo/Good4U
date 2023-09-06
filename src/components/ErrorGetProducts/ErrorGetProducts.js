import React from "react";

function ErrorGetProducts() {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">
        Lo sentimos, hubo un error al cargar los productos.
      </strong>
      <span className="block sm:inline">
        Por favor, intenta nuevamente más tarde o comunícate con nuestro
        soporte.
      </span>
    </div>
  );
}

export default ErrorGetProducts;
