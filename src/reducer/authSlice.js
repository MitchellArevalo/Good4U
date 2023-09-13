// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSessionStorageAuth } from "../utilities/sessionStorageAuth";
import { registerUser } from "../services/postUser";

const initialState = {
  isAuthenticated: getSessionStorageAuth() ? true : false,
  pending: null,
  user: null,
  error: null,
};
export const registerUserAPI = createAsyncThunk(
  "registerUserAPI",
  async ({ credentials }) => {
    const userData = await registerUser({ credentials });
    console.log(userData);
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
    },
    ERRORAUTH: (state) => {
      state.isAuthenticated = false;
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
      state.pending = true;
      state.user = action.payload;
      state.error = false;
    },
    [registerUserAPI.rejected]: (state) => {
      state.isAuthenticated = false;
      state.pending = false;
      state.user = null;
      state.error = true;
    },
  },
});

export const { LOGIN, LOGOUT, ERRORAUTH } = authSlice.actions;
export default authSlice.reducer;
