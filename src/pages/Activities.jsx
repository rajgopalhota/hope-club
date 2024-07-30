import React, { useEffect, useState } from "react";
import { BiBasket } from "react-icons/bi";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext";
import axios from "../axiosInstance";
import AddActivityForm from "./AddActivity";
import Loading from "./Loading";

const Activities = () => {
  const auth = useAuth();

  const [userActivities, setUserActivities] = useState([]);
  const [otherActivities, setOtherActivities] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (auth.user) {
        const activitiesResponse = await axios.get("/hope/activities");
        const reversedUserActivities =
          activitiesResponse.data.userActivities.reverse();
        const sortedUserActivities = reversedUserActivities.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setUserActivities(sortedUserActivities);

        const reversedOtherActivities =
          activitiesResponse.data.otherActivities.reverse();
        const sortedOtherActivities = reversedOtherActivities.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setOtherActivities(sortedOtherActivities);

        const paymentsResponse = await axios.get("/pay/history");
        const reversedPaymentHistory = paymentsResponse.data.reverse();
        const sortedPaymentHistory = reversedPaymentHistory.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPaymentHistory(sortedPaymentHistory);
      } else {
        const allActivitiesResponse = await axios.get("/hope/get-all");
        const sortedUserActivities =
          allActivitiesResponse.data.userActivities.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
        setUserActivities(sortedUserActivities);

        const sortedOtherActivities =
          allActivitiesResponse.data.otherActivities.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
        setOtherActivities(sortedOtherActivities);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleAddition = async (aid) => {
    try {
      setLoading(true);
      const response = await axios.post(`/hope/activities/register/${aid}`);
      await fetchData(); // Fetch all data after addition
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error handling addition:", error);
      setLoading(false);
    }
  };

  const handleDeletion = async (aid) => {
    try {
      setLoading(true);
      const response = await axios.post(`/hope/activities/unregister/${aid}`);
      await fetchData(); // Fetch all data after deletion
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error handling deletion:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchData(); // Fetch data whenever auth.user changes
  }, [auth.user]);

  return (
    <div className="activity container mx-auto p-8">
      <h2 className="text-3xl font-bold text-sky-300 mb-4 flex items-center">
        Club Activities
      </h2>
      <hr className="border-t-2 border-blue-300 my-6 opacity-20" />
      {loading ? (
        <Loading />
      ) : (
        <>
          <AddActivityForm fetchActivities={fetchData} />
          {paymentHistory.length !== 0 && (
            <>
              <div className="mb-8">
                <h3
                  data-aos="zoom-in"
                  className="text-2xl font-bold mb-2 flex items-center text-blue-100"
                >
                  <BsCheckCircle className="mr-2 text-green-200" />
                  Payment Passes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paymentHistory.map((payment) => (
                    <div
                      data-aos="zoom-in"
                      key={payment._id}
                      className={`max-w-[1/2] neumorphic-container bg-gradient-to-br from-blue-900 via-cyan-10 to-slate-900 p-4 rounded-md shadow-md transform hover:scale-[1.02] transition-transform border-2`}
                    >
                      {/* Verification Icon */}
                      {payment.paymentVerified ? (
                        <div className="mb-2 text-green-300">
                          <BsCheckCircle className="h-6 w-6 inline-block mr-2" />
                          Verified
                        </div>
                      ) : (
                        <div className="mb-2 text-red-300">
                          <BsXCircle className="h-6 w-6 inline-block mr-2" />
                          Unverified
                        </div>
                      )}

                      {/* Payment Details */}
                      <div className="mb-4">
                        <p className="text-blue-100">
                          <span className="font-bold">Activities:</span>{" "}
                          {payment.activities
                            .map(
                              (activity) =>
                                activity.name +
                                " - " +
                                activity.venue +
                                " - " +
                                new Date(activity.date).toLocaleDateString()
                            )
                            .join(", ")}
                        </p>
                      </div>
                      <div className="flex items-center mb-4 gap-2">
                        <div className="price pricetag">
                          <p>
                            {payment.activities
                              .map((activity) => `₹${activity.price}`)
                              .join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-red-200">
                          <span className="font-bold">Verified By:</span>{" "}
                          {payment.paymentVerifiedBy
                            ? payment.paymentVerifiedBy.name
                            : "Not Verified"}
                        </p>
                      </div>
                      <div className="mb-4">
                        <p className="text-zinc-100">
                          <span className="font-bold">Timestamp:</span>{" "}
                          {new Date(payment.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Price */}
              <div className="text-xl text-zinc-50 font-bold mb-4">
                Total Price: &#8377;{" "}
                {paymentHistory.reduce(
                  (total, payment) =>
                    total +
                    payment.activities.reduce(
                      (acc, activity) => acc + activity.price,
                      0
                    ),
                  0
                )}
              </div>

              {/* Stylish HR */}
              <hr className="border-t-2 border-blue-300 my-6 opacity-20" />
            </>
          )}
          {/* Registered Activities Section */}
          {userActivities.length !== 0 && (
            <>
              <div className="my-4">
                <h3
                  data-aos="fade-up"
                  className="text-2xl font-bold mb-2 flex items-center text-sky-300"
                >
                  {auth.user && (
                    <>
                      <BsCheckCircle className="mr-2 text-green-600" />
                      Registered Activities of {auth.user.name}
                    </>
                  )}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {userActivities.map((activity) => (
                    <div
                      data-aos="fade-up"
                      key={activity._id}
                      className="neumorphic-container bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 p-4 rounded-md shadow-md mb-4 transform hover:scale-[1.02] transition-transform flex items-center"
                    >
                      <div>
                        {/* Activity Image */}
                        <div className="relative mb-4">
                          <img
                            src={activity.image}
                            alt={activity.name}
                            className="w-full object-cover rounded-md"
                          />
                          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-center">
                            <h3 className="act-name text-xl font-bold">
                              <span className="text-pink-500">Registered</span>
                            </h3>
                          </div>
                        </div>

                        {/* Activity Details */}
                        <div className="mb-4 ">
                          <p className="text-white">{activity.description}</p>
                        </div>

                        <div className="flex items-center justify-around mb-4 gap-2">
                          <div className="price pricetag">
                            <p>&#8377; {activity.price}</p>
                          </div>
                          <div className="venue">
                            <p>{activity.venue}</p>
                          </div>
                        </div>

                        {/* Unregister Button */}
                        <div className="flex justify-center">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDeletion(activity._id);
                            }}
                            className="border border-red-400 text-red-400 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none"
                          >
                            Unregister
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/pay-for-activities"
                className="glow-border lg:w-1/4 flex items-center bg-blue-500 bg-opacity-25 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:bg-opacity-35 focus:outline-none mb-6 mt-4 mx-auto"
              >
                <BiBasket className="mr-2 w-7 h-7" />
                <span className="text-center mx-auto">Checkout Items</span>
              </Link>
              {/* Stylish HR */}
              <hr className="border-t-2 border-blue-300 my-6 opacity-20" />
            </>
          )}

          {/* More Activities Section */}
          <div>
            <h3
              data-aos="fade-up"
              className="text-2xl font-bold mb-2 flex items-center text-sky-300"
            >
              <BiBasket className="mr-2 text-blue-200" />
              More Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherActivities.map((activity) => (
                <div
                  key={activity._id}
                  className="neumorphic-container bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900 p-4 rounded-md shadow-md transform hover:scale-[1.02] transition-transform flex items-center"
                >
                  <div>
                    {/* Activity Image */}
                    <div className="relative mb-4">
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full object-cover rounded-md"
                      />
                    </div>

                    {/* Activity Details */}
                    <div className="mb-4">
                      <p className="text-white">{activity.description}</p>
                    </div>
                    <div className="flex items-center justify-around mb-4 gap-2">
                      <div className="price pricetag">
                        <p>&#8377; {activity.price}</p>
                      </div>
                      <div className="venue">
                        <p>{activity.venue}</p>
                      </div>
                    </div>
                    {/* Register and Not Interested Buttons */}
                    {auth.user && (
                      <div className="flex justify-around">
                        <button className="border border-red-400 text-red-400 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none">
                          Not Interested
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddition(activity._id);
                          }}
                          className="bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600 focus:outline-none"
                        >
                          Register
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Activities;
