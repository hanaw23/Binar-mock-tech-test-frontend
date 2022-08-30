import { useState } from "react";

import DeleteIcon from "../svg/DeleteIcon";
import DeleteModal from "../modal/DeleteModal";

export default function DeleteButton(props) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <div>
      <div>
        <button type="submit" onClick={handleOpenDeleteModal}>
          <DeleteIcon />
        </button>
      </div>
      {openDeleteModal && <DeleteModal onClose={handleCloseDeleteModal} name={props.name} id={props.id} />}
    </div>
  );
}
