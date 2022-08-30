import axios from "axios";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";

import { hasToken } from "../../utility/localStorage";

import style from "./Modal.module.css";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";

export default function DeleteModal(props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const id = props.id;
  const name = props.name;

  const router = useRouter();

  const submitDeleteProduct = async () => {
    hasToken();
    try {
      const response = await axios.delete(`/v1/products/${id}`);
      setLoading(true);

      if (response.data.status === "OK" && response.data.errors === null) {
        router.push("/product");
        setSuccess(response.data.result.message);
        window.location.reload(true);
      } else {
        setError("Terdapat Error!");
      }
    } catch (error) {
      setError(error);
    }
  };
  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-auto flex  justify-center items-center`} style={{ background: "rgba(0,0,0,.7)" }}>
        <div className="bg-gray-400 flex align-center justify-center">
          <div>
            <div className="w-full h-50 bg-white rounded-[8px] px-6 py-6 text-center">
              <div className="border border-b-gray-800 pb-8">
                <div>Are you sure want to delete</div>
                <div>{name} ?</div>
              </div>
              <div className="flex gap-10 mt-4 justify-center">
                <button className="border border-gray-700 bg-white-700 text-sm w-fit px-10 h-8 rounded text-gray-400 text-semibold" onClick={props.onClose}>
                  No
                </button>
                <button className="border border-transparent bg-gray-700 text-sm w-fit h-8 px-4 rounded text-white text-semibold" type="submit" onClick={submitDeleteProduct}>
                  Yes, delete it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success.length !== 0 && loading && <SuccessModal message={success} />}
      {/* {error.length !== 0 && <ErrorModal message={error} />} */}
    </>,
    document.body
  );
}
