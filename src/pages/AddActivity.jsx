// src/components/AddActivityForm.jsx
import React, { useState } from "react";
import axios from "../axiosInstance"; // Import axios library
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";

const AddActivityForm = () => {
  const auth = useAuth();
  const [activityData, setActivityData] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
    date: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Add your validation logic here
    if (!activityData.name) {
      newErrors.name = "This field is required";
    }
    // Add validations for other fields as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Make a request to your backend API to add the activity
      const res = await axios.post("/hope/activities", activityData);

      toast.success(res.data.message);

      // Optionally, you can reset the form or perform other actions after adding the activity
      setActivityData({
        name: "",
        description: "",
        image: "",
        price: 0,
        date: "",
      });
    } catch (error) {
      console.error("Error adding activity:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {auth.user && auth.user.role == "Admin" && (
        <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8 mb-10">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Activity Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={activityData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={activityData.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={activityData.image}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={activityData.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={activityData.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Add Activity
          </button>
        </form>
      )}
    </>
  );
};

export default AddActivityForm;
