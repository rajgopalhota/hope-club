import React, { useEffect } from "react";
import { FaFeatherPointed } from "react-icons/fa6";

const featureData = [
  {
    title: "Vision",
    content:
      "Empowering individuals through automation, our RPA club envisions a future where manual and repetitive tasks are automated, freeing up time for innovation and creativity. We aim to cultivate a culture of technological advancement and efficiency, where RPA solutions streamline processes and optimize performance.",
  },
  {
    title: "Mission",
    content:
      "Our mission is to educate and inspire students about the potential of Robotics Process Automation. Through workshops, projects, and industry collaborations, we aim to equip students with the skills and knowledge needed to leverage RPA tools and techniques effectively, driving digital transformation and innovation.",
  },
  {
    title: "Community Engagement",
    content:
      "Connecting with the community, our RPA club seeks to raise awareness about the benefits of RPA in various sectors. We organize outreach programs, seminars, and guest lectures to engage with industry professionals and enthusiasts, fostering a supportive network for learning and collaboration.",
  },
  {
    title: "Skill Development",
    content:
      "Empowering members with practical skills, our RPA club offers training programs and hands-on workshops focused on RPA tools and technologies. From basic concepts to advanced techniques, we provide opportunities for members to enhance their automation skills and stay updated with industry trends.",
  },
  {
    title: "Project Implementation",
    content:
      "Encouraging innovation and creativity, our RPA club facilitates project-based learning experiences. Members collaborate on real-world projects, applying RPA solutions to solve business challenges and gain valuable experience in implementing automation processes.",
  },
  {
    title: "Networking and Career Opportunities",
    content:
      "Creating avenues for growth and development, our RPA club organizes networking events, hackathons, and internships with industry partners. We provide members with access to career opportunities in the rapidly growing field of Robotics Process Automation, helping them build a successful career path.",
  },
  {
    title: "Research and Development",
    content:
      "Driving innovation forward, our RPA club encourages research and development initiatives in the field of automation. We collaborate with academic institutions and industry experts to explore emerging technologies and advance the capabilities of Robotics Process Automation.",
  },
  {
    title: "Have Questions?",
    content:
      "Feel free to reach out to our RPA club. We're here to support and guide you on your journey into the exciting world of Robotics Process Automation!",
  },
];

export const Feature = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl flex font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative"></span>
          </span>{" "}
          <img className="w-14 h-14" src="/rpa.png" /> RPA Club Initiatives and Goals
        </h2>
        <p className="text-base text-gray-300 md:text-lg text-justify">
          <FaFeatherPointed /> Welcome to the RPA Club at KL University, a
          technical organization dedicated to advancing the field of Robotics
          Process Automation (RPA). Our mission is to empower students by
          providing them with the knowledge, skills, and opportunities to excel
          in the exciting world of automation.
          <br />
          <FaFeatherPointed /> At the RPA Club, we believe in fostering a
          community where individuals can explore innovative solutions and drive
          digital transformation. Through hands-on workshops, industry
          collaborations, and project-based learning, we aim to equip students
          with the expertise needed to thrive in the rapidly evolving field of
          RPA.
          <br />
          <FaFeatherPointed /> Join us in our journey to revolutionize
          automation technology and shape the future of industries. Together, we
          can unleash the potential of Robotics Process Automation and create a
          campus culture rooted in innovation, collaboration, and technical
          excellence.
        </p>
      </div>
      <div className="grid max-w-screen-lg mx-auto gap-y-6 lg:grid-cols-2 lg:gap-x-8">
        {featureData.map((feature, index) => (
          <div className="p-6 fcard rounded-lg shadow-md" key={index}>
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-purple-200 mb-4`}
            >
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-zinc-50">
                {feature.title}
              </h6>
              <hr/>
              <p className="text-sm text-gray-300">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
