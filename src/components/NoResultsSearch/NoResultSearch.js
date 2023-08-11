import React from 'react';

const NoResultsSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className="text-gray-500 text-lg mb-2">
        No se encontraron resultados para su búsqueda.
      </p>
      <p className="text-gray-400">
        Por favor, intenta con otro producto.
      </p>
    </div>
  );
};

export default NoResultsSearch;
