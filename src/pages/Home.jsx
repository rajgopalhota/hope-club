import React, { useEffect } from "react";
import {
  FaRobot,
  FaCode,
  FaChalkboardTeacher,
  FaRegCalendarAlt,
  FaRunning,
} from "react-icons/fa"; // Additional icons
import { RiQuestionFill } from "react-icons/ri"; // New question icon
import { Link } from "react-router-dom";
import TextAni from "./TextAni";
import bgImage from "./../assets/vids/brain.gif"; // Replace with your background image

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define key points for the RPA club
  const keyPoints = [
    {
      icon: <FaRobot className="w-8 h-8 mr-4 text-blue-300" />,
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
  ];

  return (
    <div className="home flex flex-col lg:flex-row min-h-screen w-screen relative overflow-hidden">
      <img
        className="brain absolute inset-0 w-full h-full object-cover z-[-1] opacity-50"
        src={bgImage}
        alt="Background"
      />
      <div className="hcont relative lg:w-1/2 logodiv flex flex-col justify-center items-center p-10 h-auto">
        <p className="welcometxt mb-5">
          RPA <TextAni />
        </p>
        <img
          src="/rpa.png"
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
            className="text-lg border border-blue-500 text-blue-500 bg-blue-100 bg-opacity-80 px-6 py-3 rounded-lg hover:bg-blue-500 hover:bg-opacity-90 hover:text-white transition duration-300 shadow-md flex items-center"
          >
            <FaCode className="w-4 h-4 mr-1" /> Learn More
          </Link>
          <Link
            to={"/contact"}
            className="text-lg border border-green-500 text-green-700 bg-green-100 bg-opacity-80 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-md flex items-center"
          >
            <RiQuestionFill className="w-4 h-4 mr-1" /> Contact Us
          </Link>
        </div>
      </div>

      {/* Key points section */}
      <div className="lg:w-1/2 bg-zinc-900 bg-opacity-55 hcont p-8">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl text-zinc-100 font-semibold">
            Robotic Process Automation Club{" "}
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
