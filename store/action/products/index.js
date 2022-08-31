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
    window.location.reload(true);
  }
};

export const fetchPutProducts = (id, name, price, image, setLoading, setSuccess, setError, setEmptyName, setEmptyImage, setEmptyPrice) => async (dispatch) => {
  hasToken();
  try {
    const response = await axios.put(`/v1/products/${id}`, {
      name: name,
      price: price,
      imageurl: image,
    });

    setLoading(true);

    if (response.data.status === "OK" && response.data.errors === null && response.data.result.name !== "" && response.data.result.imageurl !== "" && response.data.result.price !== null) {
      Router.push("/product");
      setSuccess("Success Update Product");
      window.location.reload(true);
      dispatch(putProducts(response.data.result));
    } else if (response.data.errors === null && response.data.result.name === "" && response.data.result.imageurl === "" && response.data.result.price === null) {
      setEmptyName("Name can't be blank !");
      setEmptyImage("Image URL can't be blank !");
      setEmptyPrice("Price can't be blank !");
    } else if (response.data.errors === null && response.data.result.name !== "") {
      setEmptyName("");
      if (response.data.result.imageurl === "" && response.data.result.price === null) {
        setEmptyImage("Image URL can't be blank !");
        setEmptyPrice("Price can't be blank !");
      } else if (response.data.result.imageurl !== "" && response.data.result.price === null) {
        setEmptyImage("");
        setEmptyPrice("Price can't be blank !");
      } else if (response.data.result.imageurl === "" && response.data.result.price !== null) {
        setEmptyImage("Image URL can't be blank !");
        setEmptyPrice("");
      }
    } else if (response.data.errors === null && response.data.result.price !== null) {
      setEmptyPrice("");
      if (response.data.result.imageurl === "" && response.data.result.name === "") {
        setEmptyImage("Image URL can't be blank !");
        setEmptyName("Name can't be blank !");
      } else if (response.data.result.imageurl !== "" && response.data.result.name === "") {
        setEmptyImage("");
        setEmptyName("Name can't be blank !");
      } else if (response.data.result.imageurl === "" && response.data.result.name !== "") {
        setEmptyImage("Image URL can't be blank !");
        setEmptyName("");
      }
    } else if (response.data.errors === null && response.data.result.imageurl !== "") {
      setEmptyImage("");
      if (response.data.result.name === "" && response.data.result.price === null) {
        setEmptyName("Name can't be blank !");
        setEmptyPrice("Price can't be blank !");
      } else if (response.data.result.name !== "" && response.data.result.price === null) {
        setEmptyName("");
        setEmptyPrice("Price can't be blank !");
      } else if (response.data.result.name === "" && response.data.result.price !== null) {
        setEmptyName("Name can't be blank !");
        setEmptyPrice("");
      }
    }
  } catch (error) {
    setError(error);
    window.location.reload(true);
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
    window.location.reload(true);
  }
};
