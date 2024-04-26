import React, { useEffect } from "react";
import {
  FaRobot,
  FaCode,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaRegCalendarAlt,
  FaRunning,
} from "react-icons/fa"; // Additional icons
import { RiQuestionFill } from "react-icons/ri"; // New question icon
import { Link } from "react-router-dom";
import logo from "./../assets/1.svg"; // Replace with your KL University logo
import bgImage from "./../assets/vids/home.jpg"; // Replace with your background image

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Define key points for the RPA club
  const keyPoints = [
    {
      icon: <FaRobot className="w-8 h-8 mr-4 text-blue-900" />,
      title: "Robotics Automation",
      description:
        "Exploring the world of robotics and automation through hands-on projects.",
    },
    {
      icon: <FaCode className="w-8 h-8 mr-4 text-green-500" />,
      title: "Coding Workshops",
      description:
        "Conducting coding workshops to enhance skills in programming for automation.",
    },
    {
      icon: <FaHandsHelping className="w-8 h-8 mr-4 text-red-500" />,
      title: "Community Engagement",
      description:
        "Engaging with the community to spread awareness and share knowledge about RPA.",
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8 mr-4 text-yellow-500" />,
      title: "Practice Sessions",
      description:
        "Organizing practice sessions to reinforce learning and skills development.",
    },
    {
      icon: <FaRegCalendarAlt className="w-8 h-8 mr-4 text-purple-500" />,
      title: "Training Events",
      description:
        "Hosting training events to provide in-depth knowledge and hands-on experience.",
    },
    {
      icon: <FaRunning className="w-8 h-8 mr-4 text-orange-500" />,
      title: "Competitions & Events",
      description:
        "Participating in competitions and organizing events to showcase skills and innovations.",
    },
    {
      icon: <RiQuestionFill className="w-8 h-8 mr-4 text-gray-500" />,
      title: "Have Questions?",
      description: "Feel free to reach out. We're here to help!",
    },
  ];

  return (
    <div className="home flex flex-col lg:flex-row h-[94vh] w-screen relative overflow-hidden">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src={bgImage}
        alt="Background"
      />

      {/* Logo section */}
      <div className="lg:w-1/2 logodiv flex flex-col justify-center items-center p-10 h-auto">
        <p className="welcometxt">RPA CLUB - KL University</p>
        <img
          src={logo}
          alt="KL University Logo"
          className="homeIco object-cover lg:w-[50%] w-[100%] mb-4"
        />
        <p className="homeIcoText text-gray-100 text-xl text-center max-w-md">
          Welcome to the official website of the Robotics Process Automation, KL
          Univeristy
        </p>
        <div className="mt-4 flex space-x-4">
          <Link
            to={"/mission-vision"}
            className="text-sm border border-blue-500 text-blue-500 bg-blue-100 bg-opacity-80 px-6 py-3 rounded-lg hover:bg-blue-500 hover:bg-opacity-90 hover:text-white transition duration-300 shadow-md flex items-center"
          >
            <FaCode className="w-4 h-4 mr-2" /> Learn More
          </Link>
          <Link
            to={"/contact"}
            className="text-sm border border-green-500 text-green-500 bg-green-100 bg-opacity-80 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-md flex items-center"
          >
            <RiQuestionFill className="w-4 h-4 mr-2" /> Contact Us
          </Link>
        </div>
      </div>

      {/* Key points section */}
      <div className="lg:w-1/2 bg-purple-50 bg-opacity-35 backdrop-blur p-8 overflow-scroll">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl text-zinc-100 font-semibold">
            Our Initiatives{" "}
          </h2>
          &nbsp;
          <img className="w-12" src="/rpa.png" />
        </div>
        <hr />
        {keyPoints.map((point, index) => (
          <div
            key={index}
            className="homeliitem cursor-pointer mb-6 p-4 rounded-lg hover:bg-purple-100 hover:bg-opacity-70 transition duration-300 shadow-md"
          >
            <div className="flex items-center mb-2">
              {point.icon}
              <div className="info">
                <h3 className="text-lg font-semibold">{point.title}</h3>
                <p className="">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
