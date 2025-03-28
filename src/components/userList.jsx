import React, { useState } from "react";
import EditUser from "./editUser";
import useUsersData from "../hooks/userData";
import SideBar from "./sideBar";

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    users,
    page,
    totalPages,
    setPage,
    handleDelete,
    updateUser,
    loading,
  } = useUsersData();

  return (
    <div className="mx-auto px-4 py-6 justify-between items-center h-screen w-screen mt-12 font-serif">
      <SideBar />

      <div className="flex-1 lg:ml-60 p-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          User List
        </h2>

        {loading ? (
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="w-full h-[200px] grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-4 my-4 bg-gray-200 animate-pulse rounded-2xl py-2 duration-700"></div>
          ))
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-md p-4 rounded-lg">
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  className="rounded-full w-16 h-16 mb-2 mx-auto"
                />
                <h3 className="text-lg font-semibold text-center">
                  {user.first_name} {user.last_name}
                </h3>
                <p className="text-center text-gray-500">
                  {user.email}
                </p>
                <div className="flex justify-around mt-3">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => setSelectedUser(user)}>
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-lg"
                    onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Logic */}
        <div className="flex justify-center mt-6 space-x-4 items-center">
          <button
            className="px-3 py-1 border rounded"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}>
            Prev
          </button>

          {[...Array(totalPages).keys()].map((p) => (
            <button
              key={p}
              className={`px-3 py-1 border rounded ${
                page === p + 1
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() => setPage(p + 1)}>
              {p + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>

      {selectedUser && (
        <EditUser
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onUpdate={(updatedUser) => {
            updateUser(updatedUser);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
};

export default UserList;
