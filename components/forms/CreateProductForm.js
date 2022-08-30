import { useState } from "react";
import NumberFormat from "react-number-format";

export default function CreateProductForm(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div>
      <div className="flex flex-col mx-center mb-10">
        <div className="mt-4 ">
          <input id="name" className="px-3 border text-gray-800 border-gray-600 w-[320px] h-10 mt-2 focus:outline-blue-500 placeholder:text-sm" placeholder="Product Name" value={name} onChange={handleChangeName} />
        </div>

        <div className="mt-4 ">
          <NumberFormat
            id="price"
            placeholder="Price (Dollar USD)"
            className=" px-3 border text-gray-800 border-gray-600 w-[320px] h-10 mt-2 focus:outline-blue-500 placeholder:text-sm"
            onChange={handleChangePrice}
            allowEmptyFormatting={false}
          />
        </div>

        <div className="mt-4 ">
          <input id="image" className="px-3 border text-gray-700 border-gray-600 w-[320px] h-10 mt-2 focus:outline-blue-500 placeholder:text-sm" placeholder="Image Url" value={image} onChange={handleChangeImage} />
        </div>
      </div>

      <div className="flex justify-end border border-t-gray-900">
        <div className="pt-4">
          <button className="border border-transparent bg-white-700 text-sm w-fit text-gray-800 mr-10" onClick={props.onClose}>
            Back
          </button>
          <button className="border border-gray-800 bg-gray-300 text-sm w-fit rounded text-gray-800 px-5 py-1 " type="submit">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
