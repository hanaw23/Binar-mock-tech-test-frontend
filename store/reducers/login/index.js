// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    postLogin: null,
  },
  reducers: {
    postLogin: (state, action) => {
      state.postLogin = action.payload;
    },
  },
});

export const { postLogin } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
