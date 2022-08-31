import axios from "axios";
import Router from "next/router";

import { postLogin } from "../../reducers/login";

import { setUserLocal } from "../../../utility/localStorage";

export const fetchLogin = (email, password, setError) => async (dispatch) => {
  try {
    const response = await axios.post(`/auth/login`, {
      email: email,
      password: password,
    });
    if (response.data.status === "OK" && response.data.errors === null) {
      setUserLocal(response.data.result.access_token);
      dispatch(postLogin(response.data.result));
      Router.push("/product");
    } else {
      Router.push("/login");
      setError("Terdapat Error");
    }
  } catch (error) {
    setError(error);
  }
};
