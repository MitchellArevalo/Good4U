import { url_service } from "../utilities/urlsServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
const urlProducts = `${url_service}/product`;

export const getProductsAPI = createAsyncThunk(
  "getProductsFromAPI",
  async () => {
    try {
      const response = await fetch(urlProducts);
      const userData = await response.json();
      console.log("Esta es la respuesta", userData);
      return userData;
    } catch (e) {
      console.log(e);
    }
  }
);
