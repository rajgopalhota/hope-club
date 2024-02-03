import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FaArrowLeft, FaCreditCard } from "react-icons/fa";
import { toast } from "react-toastify";
import empty from "./../assets/empty.gif";

const PayForActivity = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  const auth = useAuth();
  const [userActivities, setUserActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const response = await axios.get("/hope/activities");
      setUserActivities(response.data.userActivities);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [auth]);

  const deleteItem = async (aid) => {
    try {
      const response = await axios.post(`/hope/activities/unregister/${aid}`);
      fetchActivities();
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  return (
    <>
      {userActivities.length === 0 && (
        <div className="empty flex w-screen justify-center mt-10">
          <img src={empty} alt="empty" />
        </div>
      )}
      {userActivities.length !== 0 && (
        <>
          <div className="container mx-auto md:w-1/2 mt-20 p-8 bg-gray-200 bg-opacity-45 rounded-md shadow-md mt-8">
            <h3 className="text-2xl font-bold flex items-center mb-4 text-green-900">
              <FaCreditCard className="mr-2" />
              Checkout for payment
            </h3>

            {/* List of Registered Activities */}
            <ul className="mb-4">
              {userActivities.map((activity) => (
                <li
                  key={activity._id}
                  className="flex items-center justify-between p-4 bg-white rounded-md shadow-md mb-2 hover:bg-gray-200"
                >
                  <div className="flex items-center">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-10 h-10 object-cover rounded-full mr-4"
                    />
                    <div>
                      <p className="text-gray-800">{activity.name}</p>
                      <p className="text-gray-500">&#8377; {activity.price}</p>
                    </div>
                  </div>

                  {/* Minus Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteItem(activity._id);
                    }}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none"
                  >
                    <AiOutlineMinusCircle />
                  </button>
                </li>
              ))}
            </ul>

            {/* Total Price */}
            <div className="mb-4">
              <p className="text-xl font-bold">
                Total Price: &#8377;{" "}
                {userActivities.reduce(
                  (total, activity) => total + activity.price,
                  0
                )}
              </p>
            </div>

            <div className="flex justify-around mt-4">
              {/* Go Back Button */}
              <Link
                to="/activities"
                className="flex items-center border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none"
              >
                <FaArrowLeft className="mr-2" />
                Previous
              </Link>

              {/* Continue to Pay Button */}
              <Link
                to="/pay-for-activities"
                className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                <FaCreditCard className="mr-2" />
                Pay &#8377;{" "}
                {userActivities.reduce(
                  (total, activity) => total + activity.price,
                  0
                )}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PayForActivity;
