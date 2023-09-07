import React from "react";
import { useProduct } from "../../hooks/useProduct";

const NoResultsSearch = () => {
  const { productSearch } = useProduct();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className="text-gray-500 text-lg mb-2">
        {` No se encontraron resultados para la búsqueda: ${productSearch.product}.`}
      </p>
      <p className="text-gray-400">Por favor, intenta con otro producto.</p>
    </div>
  );
};

export default NoResultsSearch;
