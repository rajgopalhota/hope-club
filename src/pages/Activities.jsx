// src/components/Activities.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import axios from "../axiosInstance";
import AddActivityForm from "./AddActivity";
import { toast } from "react-toastify";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Activities = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const auth = useAuth();

  const [userActivities, setUserActivities] = useState([]);
  const [otherActivities, setOtherActivities] = useState([]);

  const fetchActivitiesNonLogin = async () => {
    try {
      const response = await axios.get("/hope/get-all");
      setUserActivities(response.data.userActivities);
      setOtherActivities(response.data.otherActivities);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };
  const fetchActivities = async () => {
    try {
      const response = await axios.get("/hope/activities");
      setUserActivities(response.data.userActivities);
      setOtherActivities(response.data.otherActivities);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };
  const handleAddition = async (aid) => {
    try {
      const response = await axios.post(`/hope/activities/register/${aid}`);
      fetchActivities();
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };
  const handleDeletion = async (aid) => {
    try {
      const response = await axios.post(`/hope/activities/unregister/${aid}`);
      fetchActivities();
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  useEffect(() => {
    auth.user ? fetchActivities() : fetchActivitiesNonLogin();
  }, [auth]);

  return (
    <div className="activity container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Our Activities</h2>
      <AddActivityForm />
      {/* Registered Activities Section */}
      {userActivities.length !== 0 && (
        <>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 text-purple-500">
              {auth.user && <>Registered Activities of {auth.user.name}</>}
            </h3>
            <Link
              to="/pay-for-activities"
              className="glow-border lg:w-1/4 flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mb-6 mt-4 mx-auto"
            >
              <FiShoppingCart className="mr-2" />
              <span className="text-center mx-auto">Checkout Items</span>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userActivities.map((activity) => (
                <div
                  key={activity._id}
                  className="bg-gradient-to-br from-zinc-100 via-pink-50 to-blue-50 p-4 rounded-md shadow-md mb-4 transform hover:scale-105 transition-transform"
                >
                  {/* Activity Image */}
                  <div className="relative mb-4">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-center">
                      <h3 className="act-name text-xl font-bold">
                        <span className="text-pink-500">Registered</span>{" "}
                        {activity.name}
                      </h3>
                    </div>
                  </div>

                  {/* Activity Details */}
                  <div className="mb-4 text-white">
                    <p>{activity.description}</p>
                  </div>

                  <div className="mb-4 price pricetag">
                    <p>&#8377; {activity.price}</p>
                  </div>

                  {/* Unregister Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeletion(activity._id);
                      }}
                      className="border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none"
                    >
                      Unregister
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stylish HR */}
          <hr className="border-t-2 border-purple-500 my-8" />
        </>
      )}

      {/* More Activities Section */}
      <div>
        <h3 className="text-2xl font-bold mb-2 text-teal-500">
          More Activities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherActivities.map((activity) => (
            <div
              key={activity._id}
              className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 rounded-md shadow-md transform hover:scale-105 transition-transform"
            >
              {/* Activity Image */}
              <div className="relative mb-4">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-center">
                  <h3 className="act-name text-xl font-bold">
                    <span className="text-cyan-500">More</span> {activity.name}
                  </h3>
                </div>
              </div>

              {/* Activity Details */}
              <div className="mb-4 text-white">
                <p>{activity.description}</p>
              </div>
              <div className="mb-4 price pricetag">
                <p>&#8377; {activity.price}</p>
              </div>

              {/* Register and Not Interested Buttons */}
              {auth.user && (
                <div className="flex justify-around">
                  <button className="border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none">
                    Not Interested
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddition(activity._id);
                    }}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
