import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    getProducts: null,
    postProducts: null,
    putProducts: null,
    deleteProducts: null,
  },
  reducers: {
    getProducts: (state, action) => {
      state.getProducts = action.payload;
    },
    postProducts: (state, action) => {
      state.postProducts = action.payload;
    },
    putProducts: (state, action) => {
      state.putProducts = action.payload;
    },
    deleteProducts: (state, action) => {
      state.deleteProducts = action.payload;
    },
  },
});

export const { getProducts, postProducts, putProducts, deleteProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
