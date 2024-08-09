import React from "react";
import { FaUser, FaUserTie, FaUserShield, FaTrashAlt, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance";

const RoleModal = ({ userId, role, name, onClose, fetchData }) => {
  const handleRoleUpdate = async (newRole) => {
    if (newRole === "Admin") {
      const confirmation = window.prompt(
        `You are about to give super access to user ${name}. Are you sure? Type 'YES' to confirm.`
      );
      if (confirmation !== "YES") {
        toast.info("Role update canceled.");
        return;
      }
    }

    try {
      await axiosInstance.put(`/api/users/update-role/${userId}`, {
        role: newRole,
      });
      toast.success(`User promoted to ${newRole}`);
      fetchData(); // Refresh the user list
      onClose(); // Close the modal
    } catch (error) {
      toast.error("Error updating role");
      console.error("Error updating role:", error.message);
    }
  };

  const handleDelete = async () => {
    if (role === "Admin") {
      return; // Do not allow deleting Admins
    }

    const shouldDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (shouldDelete) {
      try {
        await axiosInstance.delete(`/api/users/del/${userId}`);
        toast.info("User deleted");
        fetchData(); // Refresh the user list
        onClose(); // Close the modal
      } catch (error) {
        toast.error("Error deleting user");
        console.error("Error deleting user:", error.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-zinc-900 bg-opacity-80 backdrop-blur-lg rounded-lg p-8 shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-white">Promote {name.slice(0,8)}.. To</h3>
        <div className="flex justify-around mb-6 gap-3">
          <button
            className={`p-2 rounded-full flex items-center justify-center ${
              role === "DefaultUser"
                ? "bg-gray-500 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => handleRoleUpdate("DefaultUser")}
            disabled={role === "DefaultUser"}
          >
            <FaUser className="mr-2" />
            DefaultUser
          </button>
          <button
            className={`p-2 rounded-full flex items-center justify-center ${
              role === "Manager"
                ? "bg-gray-500 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => handleRoleUpdate("Manager")}
            disabled={role === "Manager"}
          >
            <FaUserTie className="mr-2" />
            Manager
          </button>
          <button
            className={`p-2 rounded-full flex items-center justify-center ${
              role === "Admin"
                ? "bg-gray-500 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => handleRoleUpdate("Admin")}
            disabled={role === "Admin"}
          >
            <FaUserShield className="mr-2" />
            Admin
          </button>
        </div>
        <div className="flex justify-between">
          <button
            className="p-2 bg-gray-700 text-white rounded-md flex items-center hover:bg-gray-600"
            onClick={onClose}
          >
            <FaTimes className="mr-2" />
            Cancel
          </button>
          <button
            className={`p-2 rounded-md flex items-center ${
              role === "Admin"
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
            onClick={handleDelete}
            disabled={role === "Admin"}
          >
            <FaTrashAlt className="mr-2" />
            {role === "Admin" ? " Cannot Delete" : " Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
