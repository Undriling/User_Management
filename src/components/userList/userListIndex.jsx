import React from "react";
import UserList from "./userList";
// import SideBar from "./sideBar";
import SideBar from "./sideBar";
// import SideBar from "./sideBar";

const UserListIndex = () => {
  return (
    <div className="mx-auto px-4 py-6 justify-between items-center h-screen w-screen mt-12 font-serif">
      <SideBar/>
      
      <UserList />
    </div>
  );
};

export default UserListIndex;
