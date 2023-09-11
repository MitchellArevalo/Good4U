// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getSessionStorageAuth } from "../utilities/sessionStorageAuth";
const authSlice = createSlice({
  name: "authUser",
  initialState: {
    isAuthenticated: getSessionStorageAuth() ? true : false,
    user: null,
    error: null,
  },
  reducers: {
    LOGIN: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    ERROR: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { LOGIN, LOGOUT, ERROR } = authSlice.actions;
export default authSlice.reducer;
