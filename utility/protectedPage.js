import Router from "next/router";
import { getToken } from "./localStorage";

export const protectedPage = () => {
  const token = getToken();

  if (token) {
    Router.push("/product");
  } else {
    Router.push("/login");
  }
};
