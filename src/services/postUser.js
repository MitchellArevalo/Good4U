import { url_service } from "../utilities/urlsServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
const urlRegister = `${url_service}/opradesign/client`;
const urlLogin = `${url_service}/opradesign/client/login`;

export const registerUserAPI = createAsyncThunk(
  "registerUserAPI",
  async (credentials) => {
    try {
      const response = await fetch(urlRegister, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const userData = await response.json();
      console.log("Esta es la respuesta", userData);
      return userData;
    } catch (e) {
      console.log(e);
    }
  }
);

export const loginUserAPI = createAsyncThunk(
  "registerUserAPI",
  async (credentials) => {
    try {
      const response = await fetch(urlLogin, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const userData = await response.json();
      console.log("Esta es la respuesta", userData);
      return userData;
    } catch (e) {
      console.log(e);
    }
  }
);

// export const registerUser = async (credentials) => {
//   console.log(credentials);
//   try {
//     const response = await fetch(urlRegister, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(credentials),
//     });
//     return await response.json();
//   } catch (e) {
//     return e;
//   }
// };

// export const loginUser = async ({ credentials }) => {
//   if (credentials === undefined) return;
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   var raw = JSON.stringify({
//     email: credentials?.email,
//     password: credentials?.password,
//   });
//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };
//   return fetch(urlLogin, requestOptions)
//     .then((response) => {
//       if (!response.ok) {
//         return console.log("Error en la respuesta", response);
//       }
//       return response.json();
//     })
//     .catch((error) => console.log("error", error));
// };
