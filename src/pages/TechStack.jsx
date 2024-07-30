import React from "react";
import img1 from "../assets/tools/1.png";
import img2 from "../assets/tools/2.png";
import img3 from "../assets/tools/3.png";
import img4 from "../assets/tools/4.png";

const tools = [
  {
    name: "UiPath",
    img: img4,
    link: "https://www.uipath.com/",
  },
  {
    name: "Automation Anywhere",
    img: img1,
    link: "https://www.automationanywhere.com/",
  },
  {
    name: "Blue Prism",
    img: img2,
    link: "https://www.blueprism.com/",
  },
  {
    name: "Telegram",
    img: img3,
    link: "https://web.telegram.org/",
  },
];

const TechStack = () => {
  return (
    <div className="container mx-auto">
      <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-left text-sky-300 mb-4">
        RPA Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <div
          data-aos="zoom-in"
            key={index}
            className="bg-slate-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
          >
            <h3 className="text-xl font-bold text-left text-sky-300 mb-4">
              {tool.name}
            </h3>
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 relative">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
            </div>

            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-0 transform w-full bg-sky-800 text-gray-100 font-bold py-2 px-6 hover:bg-sky-900 transition-colors duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
