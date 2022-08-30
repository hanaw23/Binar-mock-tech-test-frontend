import { useState } from "react";

import DeleteIcon from "../svg/DeleteIcon";

export default function DeleteButton() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  //   const handleCloseDeleteModal = () => {
  //     setOpenDeleteModal(!openDeleteModal);
  //   };
  return (
    <div>
      <button type="submit" onClick={handleOpenDeleteModal}>
        <DeleteIcon />
      </button>
    </div>
  );
}
