import ReactDOM from "react-dom";

import CreateProductForm from "../forms/CreateProductForm";
import style from "./Modal.module.css";

export default function CreateModal(props) {
  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-auto flex  justify-center items-center`} style={{ background: "rgba(0,0,0,.7)" }}>
        <div className="bg-gray-400 flex align-center justify-center ">
          <div>
            <div className="w-full h-50 bg-white px-6 py-6 border-2 border-gray-900">
              <div>
                <h1 className="text-2xl font-semibold">Create new</h1>
              </div>
              <div className="text-center">
                <CreateProductForm onClose={props.onClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {success.length !== 0 && <SuccessModal message={success} />}
      {failed.length !== 0 && <FailedModal message={failed} />} */}
    </>,
    document.body
  );
}
