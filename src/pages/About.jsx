// src/components/About.jsx
import React from "react";
import { FaTelegram, FaInstagram, FaGithub } from 'react-icons/fa';

const About = () => {
  // Sample data for club creator, developer, designer, etc.
  const creatorData = {
    name: "John Doe",
    role: "Club Creator",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placekitten.com/150/150", // Replace with your image URL
    handles: {
      telegram: "@john_doe_telegram",
      instagram: "john_doe_instagram",
      github: "john_doe_github",
    }
  };

  const teamData = [
    { role: "Developer", name: "Web Developer", image: "https://placekitten.com/150/156", handles: { github: "developer_github" } },
    { role: "Designer", name: "Graphic Designer", image: "https://placekitten.com/150/157", handles: { instagram: "designer_instagram" } },
    { role: "Designer", name: "Graphic Designer", image: "https://placekitten.com/150/157", handles: { instagram: "designer_instagram" } },
  ];

  const membersData = [
    { name: "Member 1", image: "https://placekitten.com/150/151", handles: { telegram: "@member1_telegram" } },
    { name: "Member 2", image: "https://placekitten.com/150/152", handles: { instagram: "member2_instagram" } },
    { name: "Member 3", image: "https://placekitten.com/150/153", handles: { github: "member3_github" } },
  ];

  const managersData = [
    { name: "Manager 1", image: "https://placekitten.com/150/154", handles: { telegram: "@manager1_telegram" } },
    { name: "Manager 2", image: "https://placekitten.com/150/155", handles: { instagram: "manager2_instagram" } },
    { name: "Manager 2", image: "https://placekitten.com/150/155", handles: { instagram: "manager2_instagram" } },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>

      {/* Club Creator Section */}
      <div className="flex flex-wrap mb-8">
        <div className="w-full lg:w-1/2 mb-4">
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center">
              <img src={creatorData.image} alt={creatorData.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold">{creatorData.name}</h3>
                <p>{creatorData.role}</p>
                <p className="text-gray-600">{creatorData.details}</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <p className="text-gray-700 flex items-center">
                <FaTelegram className="mr-2" /> <span>{creatorData.handles.telegram}</span>
              </p>
              <p className="text-gray-700 flex items-center">
                <FaInstagram className="mr-2" /> <span>{creatorData.handles.instagram}</span>
              </p>
              <p className="text-gray-700 flex items-center">
                <FaGithub className="mr-2" /> <span>{creatorData.handles.github}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Developer and Designer */}
        {teamData.map((teamMember, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow mb-4">
            <div className="flex items-center mb-4">
              <img src={teamMember.image} alt={teamMember.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="text-gray-500">{teamMember.role}</p>
                <p className="text-xl font-bold">{teamMember.name}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <p className="text-gray-700 flex items-center">
                <FaGithub className="mr-2" /> <span>{teamMember.handles.github}</span>
              </p>
              <p className="text-gray-700 flex items-center">
                <FaInstagram className="mr-2" /> <span>{teamMember.handles.instagram}</span>
              </p>
            </div>
          </div>
        ))}

        {/* Members */}
        <div className="col-span-2">
          <h3 className="text-2xl font-bold mb-4">Members</h3>
          {membersData.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow mb-4">
              <div className="flex items-center mb-4">
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="text-xl font-bold">{member.name}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <p className="text-gray-700 flex items-center">
                  <FaTelegram className="mr-2" /> <span>{member.handles.telegram}</span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <FaInstagram className="mr-2" /> <span>{member.handles.instagram}</span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <FaGithub className="mr-2" /> <span>{member.handles.github}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Managers */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Managers</h3>
          {managersData.map((manager, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow mb-4">
              <div className="flex items-center mb-4">
                <img src={manager.image} alt={manager.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="text-xl font-bold">{manager.name}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <p className="text-gray-700 flex items-center">
                  <FaTelegram className="mr-2" /> <span>{manager.handles.telegram}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
