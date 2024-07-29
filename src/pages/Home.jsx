import React, { useEffect } from "react";
import { FaChalkboardTeacher, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";
import h1img from "../assets/svgs/h1.svg";
import h2img from "../assets/svgs/h2.svg";
import sep from "../assets/svgs/sep.svg";
import { IoDocumentText } from "react-icons/io5";

import {
  FaCertificate,
  FaClock,
  FaCogs,
  FaGraduationCap,
  FaIndustry,
  FaPeopleArrows,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyPoints = [
    {
      icon: <FaRobot className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Developing Competence",
      description:
        "The club activities focus on developing student competence in related technologies, with an emphasis on practical applications.",
    },
    {
      icon: <FaTools className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Hands-on Workshops",
      description:
        "Gaining experience in emerging technological tools through hands-on workshops that can help you in the future.",
    },
    {
      icon: <FaCertificate className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Certification Training",
      description:
        "Offering training on globally recognized certifications for students who complete the training and assessments.",
    },
    {
      icon: <FaUsers className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Professional Interaction",
      description:
        "Regular interactions with globally certified professionals and industry experts.",
    },
    {
      icon: <FaCogs className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Automation Study",
      description:
        "Studying the process of designing, developing, modeling, testing, and evaluating automation for optimal results.",
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Skill Development",
      description:
        "Learning new skills and contributing to the group as a member of the club.",
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Confidence Building",
      description:
        "Improving confidence among club members through continuous learning and practice.",
    },
    {
      icon: <FaClock className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Time Management",
      description:
        "Enhancing time management skills and getting better with industrial work methods.",
    },
    {
      icon: <FaIndustry className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Diverse Interactions",
      description:
        "Creating opportunities to meet a diverse population, expanding interests and thinking capabilities.",
    },
    {
      icon: <FaPeopleArrows className="w-8 h-8 mr-4 text-sky-500" />,
      title: "Leadership Development",
      description:
        "Developing leadership skills within an environment of peers.",
    },
  ];

  return (
    <>
      <div className="text-gray-100">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase text-lg tracking-loose w-full text-sky-50">
              Welcome to RPA - KLEF
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight text-sky-300">
              Automate Your Tasks!
            </h1>
            <p className="leading-normal text-2xl mb-8 text-sky-100">
              Join our community at KL University and learn how to automate
              business processes using cutting-edge RPA tools.
            </p>
            <Link
              to={"/activities"}
              className="flex gap-1 items-center mx-auto lg:mx-0 hover:underline bg-sky-500 text-gray-100 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <IoDocumentText />
              See Activities
            </Link>
          </div>
          <div className="w-full md:w-1/3 py-6 text-center">
            <img
              className="w-full z-50 floating"
              src="hero.png"
              alt="RPA Club"
            />
          </div>
        </div>
      </div>

      <div className="relative -mt-12 lg:-mt-24">
        <img src={sep} />
      </div>

      <section className="bg-slate-900 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-sky-300">
            ROBOTIC PROCESS AUTOMATION
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-sky-400 to-blue-500 w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-sky-300 font-bold leading-none mb-3">
                Technical Club in KL University
              </h3>
              <p className="text-sky-100 mb-8">
                RPAKLEF is a technology club at K L University where students
                work together on automating business processes using automation
                tools.
                <br />
                <br />
                Established On: A day 26th JANUARY 2020 paved a way for the most
                successful learning platform of this RPA club.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src={h1img} className="floating" alt="RPA Club" />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img
                className="w-full sm:h-64 mx-auto floating"
                src={h2img}
                alt="Vision"
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-sky-300 font-bold leading-none mb-3">
                  VISION
                </h3>
                <p className="text-sky-100 mb-8">
                  This RPA club is an association of people united by a common
                  interest and goal because in this technical world, everyone
                  feels like coding is the best way to build a tool, automate
                  process and solve the real-world problems. Yes, it is true but
                  there are various ways other than coding for people to not
                  restrict to a particular area of development. This is the best
                  thing happened, students started to get much involved in these
                  tools of RPA like UiPath and Automation Anywhere which paved a
                  way to get situations less hard for our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-sky-300">
            Our Activities
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-sky-400 to-blue-500 w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div className="flex-1 bg-slate-800 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="flex items-center p-6">
                  <span className="w-16 h-16">{point.icon}</span>
                  <div>
                    <div className="font-bold text-xl text-sky-300">
                      {point.title}
                    </div>
                    <p className="text-sky-100 text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-none mt-auto bg-slate-700 bg-opacity-30 rounded-b rounded-t-none overflow-hidden shadow p-1">
                <div className="flex items-end justify-end">
                  <button className="mx-auto lg:mx-0 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold rounded-full my-2 py-2 px-5 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-x-105 duration-300 ease-in-out">
                    Know more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
