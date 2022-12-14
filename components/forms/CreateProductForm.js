import { useState } from "react";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";

import { fetchPostProducts } from "../../store/action/products";

import SuccessModal from "../modal/SuccessModal";
import ErrorModal from "../modal/ErrorModal";

export default function CreateProductForm(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState([]);

  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleEmptyInput = (key) => {
    if (empty.length !== 0) {
      if (empty.name && key === "name") {
        return <div className="text-xs text-rose-700 font-thin mt-2 text-left">{empty.name[0]}</div>;
      } else if (empty.price && key === "price") {
        return <div className="text-xs text-rose-700 font-thin mt-2 text-left">{empty.price[0]}</div>;
      } else if (empty.imageurl && key === "imageurl") {
        return <div className="text-xs text-rose-700 font-thin mt-2 text-left">{empty.imageurl[0]}</div>;
      }
    }
  };

  const submitCreateCustomer = (event) => {
    event.preventDefault();
    dispatch(fetchPostProducts(name, price, image, setLoading, setSuccess, setError, setEmpty));
  };
  return (
    <div>
      <div className="flex flex-col mx-center mb-10">
        <div className="mt-4 ">
          <input id="name" className="px-3 border text-gray-800 border-gray-600 w-[320px] h-10 mt-2 focus:outline-blue-500 placeholder:text-sm" placeholder="Product Name" value={name} onChange={handleChangeName} />
          {handleEmptyInput("name")}
        </div>

        <div className="mt-4 ">
          <NumberFormat
            id="price"
            placeholder="Price (Dollar USD)"
            className=" px-3 border text-gray-800 border-gray-600 w-[320px] h-10 mt-2 focus:outline-blue-500 placeholder:text-sm"
            onChange={handleChangePrice}
            allowEmptyFormatting={false}
          />
          {handleEmptyInput("price")}
        </div>

        <div className="mt-4 ">
          <input id="image" className="px-3 border text-gray-700 border-gray-600 w-[320px] h-10 mt-2 focus:outline-blue-500 placeholder:text-sm" placeholder="Image Url" value={image} onChange={handleChangeImage} />
        </div>
        {handleEmptyInput("imageurl")}
      </div>

      <div className="flex justify-end border border-t-gray-900">
        <div className="pt-4">
          <button className="border border-transparent bg-white-700 text-sm w-fit text-gray-800 mr-10" onClick={props.onClose}>
            Back
          </button>
          <button className="border border-gray-800 bg-gray-300 text-sm w-fit rounded text-gray-800 px-5 py-1 " type="submit" onClick={submitCreateCustomer}>
            Create
          </button>
        </div>
      </div>
      {success.length !== 0 && loading && <SuccessModal message={success} />}
      {error.length !== 0 && loading && <ErrorModal message={error} />}
    </div>
  );
}
