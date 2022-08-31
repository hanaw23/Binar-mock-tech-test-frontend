import axios from "axios";
import Router from "next/router";

import { postLogin } from "../../reducers/login";

import { setUserLocal } from "../../../utility/localStorage";

export const fetchLogin = (email, password, setError) => async (dispatch) => {
  try {
    const reponse = await axios.post(`/auth/login`, {
      email: email,
      password: password,
    });
    setUserLocal(reponse.data.result.access_token);
    dispatch(postLogin(reponse.data.result));
    Router.push("/product");
  } catch (error) {
    setError(error);
  }
};
