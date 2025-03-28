import React from "react";
import useUserDataEdit from "../../hooks/useUserEdit";
// import useUserDataEdit from "../../hooks/useUserEdit";

const EditUser = ({ user, onClose, onUpdate }) => {
  const { formData, handleChange, handleSubmit } =
    useUserDataEdit(user, onUpdate);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Edit User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="First Name"
            value={formData.first_name}
            onChange={(e) =>
              handleChange("first_name", e.target.value)
            }
            required
          />
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={(e) =>
              handleChange("last_name", e.target.value)
            }
            required
          />
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
