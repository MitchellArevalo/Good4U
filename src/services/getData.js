// export const getData = async () => {
//     try {
//           const res = await fetch("");
//           if (!res.ok) throw new Error("Error en la petición");
//           return await res.json();
//       } catch (error) {
//           return console.log(error);
//       }
//   };
  

export const getData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return res.json();
    })
    .catch((error) => console.log(error));
};
