import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { loginReducer } from "./reducers/login";
import { productsReducer } from "./reducers/products";

const reducer = combineReducers({
  login: loginReducer,
  products: productsReducer,
});

const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});
