const URL_DEFAULT="https://rickandmortyapi.com/api/character"

export const getData = (url=URL_DEFAULT) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return res.json();
    })
    .then(data => data.results)
    .catch(error => console.log(error));
};
