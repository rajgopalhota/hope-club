import React, { useEffect } from "react";
import { FaUsers, FaBook, FaHeart, FaDumbbell } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import { AiOutlineQuestion } from "react-icons/ai";
import logo from "./../assets/logo.jpg";

const keyPoints = [
  {
    icon: <FaUsers className="w-8 h-8 mr-4" />,
    title: "Community Engagement",
    description:
      "Connecting with the community through events and outreach programs.",
  },
  {
    icon: <FaBook className="w-8 h-8 mr-4" />,
    title: "Education Initiatives",
    description:
      "Empowering individuals through educational programs and workshops.",
  },
  {
    icon: <FaHeart className="w-8 h-8 mr-4" />,
    title: "Wellness Programs",
    description:
      "Promoting well-being through fitness classes and health awareness campaigns.",
  },
  {
    icon: <GiHealthNormal className="w-8 h-8 mr-4" />,
    title: "Health Wellness Training",
    description:
      "Offering training programs for a healthy and balanced lifestyle.",
  },
  {
    icon: <BiRun className="w-8 h-8 mr-4" />,
    title: "Fitness Programs",
    description:
      "Encouraging physical activity and well-being through fitness programs.",
  },
  {
    icon: <AiOutlineQuestion className="w-8 h-8 mr-4" />,
    title: "Have Questions?",
    description: "Feel free to reach out. We're here to help!",
  },
  {
    icon: <GiHealthNormal className="w-8 h-8 mr-4" />,
    title: "Health Wellness Training",
    description:
      "Offering training programs for a healthy and balanced lifestyle.",
  },
];

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home flex flex-col lg:flex-row h-full w-screen overflow-hidden">
      {/* First section with logo and quotes */}
      <div className="lg:w-1/2 text-white flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="w-80" />
          <h2 className="text-3xl font-bold mb-2">Welcome to HOPE Club</h2>
          <p className="text-lg">
            Bringing hope to the community through various initiatives.
          </p>
        </div>
      </div>

      {/* Second section with key points, hover effects, and scrolling */}
      <div className="text-center h-full lg:w-1/2 bg-gray-200 p-8 overflow-y-auto flex flex-col justify-center">
        {keyPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer hover:bg-gray-300 p-4 rounded-md transition-transform scale-100 gap-10"
          >
            {point.icon}
            <div>
              <h3 className="w-full text-xl text-left font-bold mb-2">
                {point.title}
              </h3>
              <p className="w-full text-center">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
