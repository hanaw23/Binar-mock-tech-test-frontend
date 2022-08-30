import { useState } from "react";

import CreateModal from "../modal/CreateModal";

export default function CreateButton(props) {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(!openCreateModal);
  };
  return (
    <div>
      <div className="bg-transparent rounded border-transparent cursor-pointer bg-gray-600 h-fit w-fit hover:bg-gray-400">
        <button className=" text-white text-sm px-6 py-2 font-semibold text-center " onClick={handleOpenCreateModal} type="submit">
          {props.titleButton}
        </button>
      </div>
      {openCreateModal && <CreateModal onClose={handleCloseCreateModal} />}
    </div>
  );
}
