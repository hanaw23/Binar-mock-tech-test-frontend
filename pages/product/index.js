/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchGetProducts } from "../../store/action/products";
import { protectedPage } from "../../utility/protectedPage";

import PageHeader from "../../components/headers/PageHeader";
import ProductCard from "../../components/cards/ProductCard";
import Spinner from "../../components/loadings/Spinner";

export default function index() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    protectedPage();
  }, []);

  useEffect(() => {
    dispatch(fetchGetProducts(setProductList, setLoading));
  }, []);

  return (
    <div>
      <div className="border border-b-gray-800 py-8">
        <PageHeader title="Product List" titleButton="Create New" />
      </div>
      {loading ? (
        <div className="mt-10 grid grid-cols-3 w-[1300px] h-[950px] mx-10 ml-[150px] gap-y-10">
          {productList.map((item, i) => {
            return (
              <div key={i}>
                <ProductCard name={item.name} price={item.price} id={item.id} image={item.imageurl} />
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
