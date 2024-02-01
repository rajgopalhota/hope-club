// src/components/Activities.jsx
import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  // Load registered activities data
  const registeredActivitiesData = [
    {
      id: 1,
      name: "Registered Activity 1",
      image: "https://placekitten.com/300/201",
      details:
        "Description of Registered Activity 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Registered Activity 1",
      image: "https://placekitten.com/300/202",
      details:
        "Description of Registered Activity 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Registered Activity 1",
      image: "https://placekitten.com/300/203",
      details:
        "Description of Registered Activity 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  // Sample more activities data (replace with your actual data)
  const moreActivitiesData = [
    {
      id: 3,
      name: "More Activity 1",
      image: "https://placekitten.com/300/204", // Replace with your image URL
      details:
        "Description of More Activity 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "More Activity 2",
      image: "https://placekitten.com/300/205", // Replace with your image URL
      details:
        "Description of More Activity 2 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "More Activity 2",
      image: "https://placekitten.com/300/206", // Replace with your image URL
      details:
        "Description of More Activity 2 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more activities as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Our Activities</h2>

      {/* Registered Activities Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-purple-500">Registered Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registeredActivitiesData.map((activity) => (
            <div
              key={activity.id}
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
                  <h3 className="text-xl font-bold">
                    <span className="text-pink-500">Registered</span> {activity.name}
                  </h3>
                </div>
              </div>

              {/* Activity Details */}
              <div className="mb-4 text-white">
                <p>{activity.details}</p>
              </div>

              {/* Unregister Button */}
              <div className="flex justify-center">
                <button className="border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none">
                  Unregister
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stylish HR */}
      <hr className="border-t-2 border-purple-500 my-8" />

      {/* More Activities Section */}
      <div>
        <h3 className="text-2xl font-bold mb-2 text-teal-500">More Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreActivitiesData.map((activity) => (
            <div
              key={activity.id}
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
                  <h3 className="text-xl font-bold">
                    <span className="text-cyan-500">More</span> {activity.name}
                  </h3>
                </div>
              </div>

              {/* Activity Details */}
              <div className="mb-4 text-white">
                <p>{activity.details}</p>
              </div>

              {/* Register and Not Interested Buttons */}
              <div className="flex justify-around">
                <button className="border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none">
                  Not Interested
                </button>
                <Link
                  to={`/activities/${activity.id}`}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
