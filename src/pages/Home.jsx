import React from 'react';
import { FaUsers, FaBook, FaHeart, FaDumbbell } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';
import { AiOutlineQuestion } from 'react-icons/ai';
import logo from './../assets/logo.jpg';

const Home = () => {
  return (
    <div className="home flex flex-col lg:flex-row h-screen w-screen overflow-hidden">
      {/* First section with logo and quotes */}
      <div className="lg:w-1/2 text-white flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="w-80" />
          <h2 className="text-3xl font-bold mb-2">Welcome to HOPE Club</h2>
          <p className="text-lg">Bringing hope to the community through various initiatives.</p>
        </div>
      </div>

      {/* Second section with key points, hover effects, and scrolling */}
      <div className="text-center lg:w-1/2 bg-gray-200 p-8 overflow-y-auto flex flex-col justify-center">
        <div className="flex items-center cursor-pointer hover:bg-gray-300 p-4 rounded-md transition-transform scale-105">
          <FaUsers className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
            <p>Connecting with the community through events and outreach programs.</p>
          </div>
        </div>

        <div className="flex items-center cursor-pointer hover:bg-gray-300 p-4 rounded-md transition-transform scale-105">
          <FaBook className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Education Initiatives</h3>
            <p>Empowering individuals through educational programs and workshops.</p>
          </div>
        </div>

        <div className="flex items-center cursor-pointer hover:bg-gray-300 p-4 rounded-md transition-transform scale-105">
          <FaHeart className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Wellness Programs</h3>
            <p>Promoting well-being through fitness classes and health awareness campaigns.</p>
          </div>
        </div>

        <div className="flex items-center cursor-pointer hover:bg-gray-300 p-4 rounded-md transition-transform scale-105">
          <GiHealthNormal className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Health Wellness Training</h3>
            <p>Offering training programs for a healthy and balanced lifestyle.</p>
          </div>
        </div>

        <div className="flex items-center cursor-pointer hover:bg-gray-300 p-4 rounded-md transition-transform scale-105">
          <BiRun className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Fitness Programs</h3>
            <p>Encouraging physical activity and well-being through fitness programs.</p>
          </div>
        </div>

        <div className="flex items-center cursor-pointer hover:bg-gray-300 p-4 rounded-md transition-transform scale-105">
          <AiOutlineQuestion className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Have Questions?</h3>
            <p>Feel free to reach out. We're here to help!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
