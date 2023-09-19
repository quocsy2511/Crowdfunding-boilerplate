import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
      // ...action.payload,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    authFetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authFreshToken: (state, action) => ({}),
    authLogout: (state, action) => ({}),
  },
});
export default authSlide.reducer;
export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authFreshToken,
  authLogout,
} = authSlide.actions;
