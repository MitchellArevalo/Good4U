import { url_service } from "../utilities/urlsServices";

const url = `${url_service}/opradesign/product`;

export const getProducts = () => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return res.json();
    })
    .catch((error) => console.log(error));
};
