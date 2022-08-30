import axios from "axios";

export const setUserLocal = (token) => localStorage.setItem("user_token", token);

export const getToken = () => {
  return localStorage.getItem("user_token");
};

export const removeToken = () => {
  localStorage.removeItem("user_token");
};

export const hasToken = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = getToken();
      return config;
    },
    (error) => Promise.reject(error)
  );
};
