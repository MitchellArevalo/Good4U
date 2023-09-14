// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getSessionStorageAuth,
  updateSessionStorageAuth,
  removeSessionStorageAuth,
} from "../utilities/sessionStorageAuth";
import { registerUserAPI, loginUserAPI } from "../services/postUser";

const initialState = {
  isAuthenticated: getSessionStorageAuth() || false,
  user: "",
  message: "",
  loading: "",
  error: "",
};

const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeSessionStorageAuth(state.user);
    },
    ERRORAUTH: (state) => {
      state.isAuthenticated = false;
      state.isRegister = false;
      state.user = null;
      state.error = true;
    },
  },
  extraReducers: {
    [registerUserAPI.pending]: (state) => {
      state.loading = true;
    },
    [registerUserAPI.fulfilled]: (state, action) => {
      const {
        payload: { nombreExcepcion, valor },
      } = action;
      console.log("Este es action payload", action.payload.nombreExcepcion);
      state.loading = false;
      if (nombreExcepcion) {
        state.message = "";
        state.error = nombreExcepcion;
      } else {
        state.message = valor;
        state.error = "";
      }
    },
    [registerUserAPI.rejected]: (state) => {
      state.error = true;
    },
    [loginUserAPI.pending]: (state) => {
      state.loading = true;
    },
    [loginUserAPI.fulfilled]: (state, action) => {
      const { payload } = action;
      console.log("Este es action payload", payload);
      state.loading = false;

      if (payload) {
        state.user = payload;
        state.isAuthenticated = true;
        updateSessionStorageAuth(state.isAuthenticated);
      } else {
        state.error = true;
        state.message = "Escriba bien los datos";
      }
    },
    [loginUserAPI.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const { LOGIN, LOGOUT, ERRORAUTH } = authSlice.actions;
export default authSlice.reducer;
