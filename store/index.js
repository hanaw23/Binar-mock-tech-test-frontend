import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { loginReducer } from "./reducers/login";
import { productsReducer } from "./reducers/products";
import { registerReducer } from "./reducers/register";

const reducer = combineReducers({
  register: registerReducer,
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
