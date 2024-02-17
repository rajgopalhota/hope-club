import React, { useEffect } from "react";
import { FaUsers, FaBook, FaHeart, FaDumbbell } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import { AiOutlineQuestion } from "react-icons/ai";
import logo from "./../assets/logo.jpg";
import video from "./../assets/bg.mp4";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Define your key points
  const keyPoints = [
    {
      icon: <FaUsers className="w-8 h-8 mr-4 text-blue-500" />,
      title: "Community Engagement",
      description:
        "Connecting with the community through events and outreach programs.",
    },
    {
      icon: <FaBook className="w-8 h-8 mr-4 text-green-500" />,
      title: "Education Initiatives",
      description:
        "Empowering individuals through educational programs and workshops.",
    },
    {
      icon: <FaHeart className="w-8 h-8 mr-4 text-red-500" />,
      title: "Wellness Programs",
      description:
        "Promoting well-being through fitness classes and health awareness campaigns.",
    },
    {
      icon: <GiHealthNormal className="w-8 h-8 mr-4 text-yellow-500" />,
      title: "Health Wellness Training",
      description:
        "Offering training programs for a healthy and balanced lifestyle.",
    },
    {
      icon: <BiRun className="w-8 h-8 mr-4 text-purple-500" />,
      title: "Fitness Programs",
      description:
        "Encouraging physical activity and well-being through fitness programs.",
    },
    {
      icon: <AiOutlineQuestion className="w-8 h-8 mr-4 text-pink-500" />,
      title: "Have Questions?",
      description: "Feel free to reach out. We're here to help!",
    },
  ];

  return (
    <div className="home flex flex-col lg:flex-row h-screen w-screen relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src={video} // Replace with your video source
      />

      {/* Logo section */}
<div className="lg:w-1/2 bg-zinc-600 bg-opacity-5 flex flex-col justify-center items-center p-8">
  {/* Add your logo component here */}
  <img src={logo} alt="Logo" className="object-cover w-[50%] mb-4" />
  <p className="text-gray-700 text-center max-w-md">
    Connect with us and explore our initiatives for a healthier lifestyle.
  </p>
  <div className="mt-4 flex space-x-4">
    <button className="border border-blue-500 text-blue-500 bg-blue-100 bg-opacity-80 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 shadow-md flex items-center">
      <FaBook className="w-6 h-6 mr-2" /> Learn More
    </button>
    <button className="border border-green-500 text-green-500 bg-green-100 bg-opacity-80 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-md flex items-center">
      <AiOutlineQuestion className="w-6 h-6 mr-2" /> Contact Us
    </button>
  </div>
</div>

      {/* Key points section */}
      <div className="lg:w-1/2 bg-purple-50 bg-opacity-85 p-8 overflow-y-auto">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold">Our Initiatives </h2>&nbsp;
          <FaHeart className="text-red-500 w-8 h-8 mr-2" />
        </div>
        {keyPoints.map((point, index) => (
          <div
            key={index}
            className="mb-6 p-4 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md"
          >
            <div className="flex items-center mb-2">
              {point.icon}
              <div>
                <h3 className="text-lg font-semibold">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
