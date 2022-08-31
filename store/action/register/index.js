import axios from "axios";
import Router from "next/router";

import { postRegister } from "../../reducers/register/index";

export const fetchPostRegister = (name, email, password, setError) => async (dispatch) => {
  try {
    const response = await axios.post(`/auth/signup`, {
      name: name,
      email: email,
      password: password,
    });
    if (response.data.status === "OK" && response.data.errors === null) {
      Router.push("/login");
      dispatch(postRegister(response.data.result));
    } else {
      Router.push("/register");
      setError("Terdapat Error!");
      window.location.reload(true);
    }
  } catch (error) {
    setError(error);
  }
};
