import React, { useEffect } from "react";
import { FaInstagram, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const teamData = [
    {
      name: "John Doe",
      designation: "Club Creator",
      instagram: "john_doe_instagram",
      image: "https://placekitten.com/150/150",
    },
    {
      name: "Web Developer",
      designation: "Developer",
      instagram: "developer_instagram",
      image: "https://placekitten.com/150/156",
    },
    {
      name: "Graphic Designer",
      designation: "Designer",
      instagram: "designer_instagram",
      image: "https://placekitten.com/150/157",
    },
    {
      name: "Member 1",
      designation: "Member",
      instagram: "member1_instagram",
      image: "https://placekitten.com/150/151",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
    {
      name: "Manager 1",
      designation: "Manager",
      instagram: "manager1_instagram",
      image: "https://placekitten.com/150/154",
    },
  ];

  return (
    <div className="w-full container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Core of the HOPE Club</h2>

      <div className="aboutContainer flex flex-wrap justify-center items-center gap-8">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className={`flex gap-2 aboutCards justify-center items-center p-6 rounded-lg shadow-lg overflow-hidden transition-transform mb-4 mx-4 ${
              index < 2 ? "glassmorphic" : "neumorphic"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={'about-img-cont rounded-full mx-auto mb-4 aspect-1 object-cover'}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="text-center relative">
              {index < 2 && <div className="glassmorphic-overlay"></div>}
              <h3 className="text-lg font-bold">
                {index < 2 && <FaCrown className="text-yellow-500 mr-2" />}
                {member.name}
              </h3>
              <p className="text-gray-500 mb-2">{member.designation}</p>
              <div className="flex items-center justify-center">
                <FaInstagram className="text-gray-700 mr-2" />
                <a
                  href={`https://www.instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {member.instagram}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
