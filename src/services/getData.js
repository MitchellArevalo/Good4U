const URL_DEFAULT="https://fakestoreapi.com/products"

export const getData = (url=URL_DEFAULT) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return res.json();
    })
    .catch(error => console.log(error));
};
