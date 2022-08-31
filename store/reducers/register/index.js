import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    postRegister: null,
  },
  reducers: {
    postRegister: (state, action) => {
      state.postRegister = action.payload;
    },
  },
});

export const { postRegister } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
