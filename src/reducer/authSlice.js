// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getSessionStorageAuth,
  updateSessionStorageAuth,
  removeSessionStorageAuth,
  getSessionStorageUser,
  updateSessionStorageUser,
} from "../utilities/sessionStorageAuth";
import {
  registerUserAPI,
  loginUserAPI,
  putUserAPI,
} from "../services/userService";

const initialState = {
  isAuthenticated: getSessionStorageAuth() || false,
  user: getSessionStorageUser() || "",
  message: "",
  loading: false,
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
      state.error = true;
    },
    [registerUserAPI.fulfilled]: (state, action) => {
      console.log("Payload registro", action.payload);
      if (action.payload.valor) {
        state.loading = false;
        state.message = "¡Has sido registrado con éxito!";
        state.error = false;
      }
      if (action.payload.nombreExcepcion) {
        state.message = "Errores en sus datos, vuelve a intentarlo";
        state.error = true;
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

      if (action.payload) {
        state.loading = false;
        state.user = payload;
        state.isAuthenticated = true;
        updateSessionStorageUser(state.user);
        updateSessionStorageAuth(state.isAuthenticated);
      } else {
        state.loading = false;
        state.error = true;
        state.message = "usuario y/o contraseña incorrectas";
      }
    },
    [loginUserAPI.rejected]: (state) => {
      state.error = true;
    },
    [putUserAPI.pending]: (state) => {
      state.loading = true;
    },
    [putUserAPI.fulfilled]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { LOGIN, LOGOUT, ERRORAUTH } = authSlice.actions;
export default authSlice.reducer;
