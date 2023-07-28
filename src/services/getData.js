export const getData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return res.json();
    })
    .then((data) => data.results)
    .catch((error) => console.log(error));
};
