// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getSessionStorageAuth,
  updateSessionStorageAuth,
  removeSessionStorageAuth,
} from "../utilities/sessionStorageAuth";
import { loginUser, registerUser } from "../services/postUser";

const initialState = {
  isAuthenticated: getSessionStorageAuth() ? true : false,
  isRegister: false,
  pending: false,
  user: null,
  error: false,
};
export const registerUserAPI = createAsyncThunk(
  "registerUserAPI",
  async ({ credentials }) => {
    const userData = await registerUser({ credentials });
    console.log("Datos usuarios", userData);
    return userData;
  }
);
export const loginUserAPI = createAsyncThunk(
  "loginUserAPI",
  async (credentials) => {
    const userData = await loginUser({ credentials });
    console.log("Login", userData);
    return userData;
  }
);

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
      state.isAuthenticated = false;
      state.pending = true;
      state.user = null;
      state.error = false;
    },
    [registerUserAPI.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      state.isRegister = true;
      state.pending = false;
      state.error = false;
    },
    [registerUserAPI.rejected]: (state) => {
      state.isAuthenticated = false;
      state.pending = false;
      state.user = null;
      state.error = true;
    },
    [loginUserAPI.pending]: (state) => {
      state.isAuthenticated = false;
      state.pending = true;
      state.user = null;
      state.error = false;
    },
    [loginUserAPI.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.pending = false;
      state.user = action.payload;
      state.error = false;
      updateSessionStorageAuth(state.user);
    },
    [loginUserAPI.rejected]: (state) => {
      state.isAuthenticated = false;
      state.pending = false;
      state.user = null;
      state.error = true;
    },
  },
});

export const { LOGIN, LOGOUT, ERRORAUTH } = authSlice.actions;
export default authSlice.reducer;
