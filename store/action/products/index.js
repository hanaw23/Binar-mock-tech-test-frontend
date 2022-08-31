import axios from "axios";
import Router from "next/router";

import { deleteProducts, getProducts, putProducts, postProducts } from "../../reducers/products/index";

import { hasToken } from "../../../utility/localStorage";

export const fetchGetProducts = (setProductList, setLoading) => async (dispatch) => {
  hasToken();
  try {
    await axios.get(`/v1/products`).then((response) => {
      setProductList(response.data.result);
      dispatch(getProducts(response.data.result));
    });
    setLoading(true);
  } catch (error) {
    error;
  }
};

export const fetchPostProducts = (name, price, image, setLoading, setSuccess, setError, setEmpty) => async (dispatch) => {
  hasToken();
  try {
    const response = await axios.post(`/v1/products/`, {
      name: name,
      price: price.toString(),
      imageurl: image,
    });
    setLoading(true);

    if (response.data.status === "OK" && response.data.errors === null) {
      Router.push("/product");
      setSuccess("Success Create Product");
      window.location.reload(true);
      dispatch(postProducts(response.data.result));
    } else {
      Router.push("/product");
      setEmpty(response.data.errors);
    }
  } catch (error) {
    setError(error);
  }
};

export const fetchPutProducts = (id, name, price, image, setLoading, setSuccess, setError) => async (dispatch) => {
  hasToken();
  try {
    const response = await axios.put(`/v1/products/${id}`, {
      name: name,
      price: price,
      imageurl: image,
    });
    setLoading(true);

    if (response.data.status === "OK" && response.data.errors === null) {
      Router.push("/product");
      setSuccess("Success Update Product");
      window.location.reload(true);
      dispatch(putProducts(response.data.result));
    } else {
      Router.push("/product");
      setError("Terdapat Error!");
      window.location.reload(true);
    }
  } catch (error) {
    setError(error);
  }
};

export const fetchDeleteProducts = (id, setLoading, setSuccess, setError) => async (dispatch) => {
  hasToken();
  try {
    const response = await axios.delete(`/v1/products/${id}`);
    setLoading(true);

    if (response.data.status === "OK" && response.data.errors === null) {
      Router.push("/product");
      setSuccess(response.data.result.message);
      window.location.reload(true);
      dispatch(deleteProducts(response.data.result));
    } else {
      Router.push("/product");
      setError("Terdapat Error!");
      window.location.reload(true);
    }
  } catch (error) {
    setError(error);
  }
};
