import { url_service } from "../utilities/urlsServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
const urlRegister = `${url_service}/client`;
const urlLogin = `${url_service}/client/login`;
export const registerUserAPI = createAsyncThunk(
  "registerUserAPI",
  async (credentials) => {
    const response = await fetch(urlRegister, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const userData = await response.json();
    return userData;
  }
);

export const loginUserAPI = createAsyncThunk(
  "loginUserAPI",
  async (credentials) => {
    try {
      const response = await fetch(urlLogin, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const userData = await response.json();
      return userData;
    } catch (e) {
      console.log(e);
    }
  }
);
export const putUserAPI = createAsyncThunk(
  "updateUserAPI",
  async ({ id, user }) => {
    console.log("Credenciaoles pit:", user, id);
    const urlUpdate = `${url_service}/client/${id}`;

    console.log(urlUpdate);
    try {
      const response = await fetch(urlUpdate, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const userData = await response.json();
      console.log("Esta es la respuesta", userData);
      return userData;
    } catch (e) {
      console.log(e);
    }
  }
);
