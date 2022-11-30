import ModalCreateUsers from "./ModalCreateUsers";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  // const handleShowHideModal = (value) => {
  //   setShowModalCreateUser(value);
  // };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-user-container">table users</div>
        <ModalCreateUsers
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          // setShow={handleShowHideModal}
        />
      </div>
    </div>
  );
};
export default ManageUser;