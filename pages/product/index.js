/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchGetProducts } from "../../store/action/products";
import { protectedPage } from "../../utility/protectedPage";

import PageHeader from "../../components/headers/PageHeader";
import ProductCard from "../../components/cards/ProductCard";
import Pagination from "../../components/pagination/Pagination";
import Spinner from "../../components/loadings/Spinner";

export default function index() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  const dispatch = useDispatch();

  useEffect(() => {
    protectedPage();
  }, []);

  useEffect(() => {
    dispatch(fetchGetProducts(setProductList, setLoading));
  }, []);

  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstProducts, indexOfLastProducts);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-screen">
      <div className="border border-b-gray-800 py-8 w-screen">
        <PageHeader title="Product List" titleButton="Create New" />
      </div>
      {loading ? (
        <div className="mt-10 grid grid-cols-3 w-fit h-fit  ml-8 mx-10 desktop:ml-[150px] gap-y-10 px-4 py-4">
          {currentProducts.map((item, i) => {
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
      <Pagination productsPerPage={productsPerPage} totalProducts={productList.length} paginate={handleChangePage} />
    </div>
  );
}
