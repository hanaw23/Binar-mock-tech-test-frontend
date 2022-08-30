import { useState } from "react";

import EditIcon from "../svg/EditIcon";
import EditModal from "../modal/EditModal";

export default function EditButton(props) {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(!openEditModal);
  };
  return (
    <div>
      <div>
        <button type="submit" onClick={handleOpenEditModal}>
          <EditIcon />
        </button>
      </div>
      {openEditModal && <EditModal onClose={handleCloseEditModal} name={props.name} id={props.id} image={props.image} price={props.price} />}
    </div>
  );
}
