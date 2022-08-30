import PageHeader from "../../components/headers/PageHeader";
import ProductCard from "../../components/cards/ProductCard";

import { product } from "../../utility/Products";

export default function index() {
  return (
    <div>
      <div className="border border-b-gray-800 py-8">
        <PageHeader title="Product List" titleButton="Create New" />
      </div>
      <div className="mt-10 grid grid-cols-3 w-[1300px] h-[950px] mx-10 ml-[150px]">
        {product.map((item, i) => {
          return (
            <div key={i}>
              <ProductCard name={item.name} price={item.price} id={item.id} image={item.imageurl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
