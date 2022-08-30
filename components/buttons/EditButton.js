import { useState } from "react";

import EditIcon from "../svg/EditIcon";

export default function EditButton() {
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  //   const handleCloseEdit = () => {
  //     setOpenEdit(!openEdit);
  //   };
  return (
    <div>
      <button type="submit" onClick={handleOpenEdit}>
        <EditIcon />
      </button>
    </div>
  );
}
