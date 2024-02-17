import React, { useEffect } from "react";
import { FaFeatherPointed } from "react-icons/fa6";

const featureData = [
  {
    title: "Vision",
    content:
      "Fostering a supportive community where students thrive, our non-technical club envisions a campus environment free from the shadows of ragging and negative traumas. We aim to cultivate a culture of resilience, empowerment, and unity, providing a safe space for students to overcome past challenges and emerge stronger.",
  },
  {
    title: "Mission",
    content:
      "Our mission is to organize impactful events that not only entertain but also promote anti-ragging awareness and mental well-being. Through workshops, counseling sessions, and collaborative initiatives, we strive to empower students to break free from the chains of negative experiences, creating an atmosphere of camaraderie and personal growth. Together, we aim to build a resilient community that stands against ragging and supports one another in overcoming adversities.",
  },
  {
    title: "Community Engagement",
    content:
      "Connecting with the community through various events and outreach programs.",
  },
  {
    title: "Education Initiatives",
    content:
      "Empowering individuals through educational programs, workshops, and skill development.",
  },
  {
    title: "Wellness Programs",
    content:
      "Promoting well-being through fitness classes, mental health awareness, and health campaigns.",
  },
  {
    title: "Health Wellness Training",
    content:
      "Offering training programs for a healthy and balanced lifestyle, including nutrition and fitness.",
  },
  {
    title: "Fitness Programs",
    content:
      "Encouraging physical activity and well-being through various fitness programs and activities.",
  },
  {
    title: "Have Questions?",
    content:
      "Feel free to reach out to HOPE Club. We're here to help and support our community!",
  },
  {
    title: "Environmental Sustainability",
    content:
      "Promoting eco-friendly practices and organizing events for environmental conservation.",
  },
  {
    title: "Cultural Exchange",
    content:
      "Fostering cultural diversity and understanding through exchange programs and events.",
  },
  {
    title: "Career Development",
    content:
      "Facilitating career growth through mentorship programs, workshops, and networking events.",
  },
  {
    title: "Youth Empowerment",
    content:
      "Empowering the youth with leadership training, skill-building, and educational support.",
  },
  {
    title: "Art and Creativity",
    content:
      "Nurturing artistic talents and creativity through workshops, exhibitions, and events.",
  },
];

export const Feature = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
            <span className="relative">The</span>
          </span>{" "}
          HOPE Club Initiatives and Goals
        </h2>
        <p className="text-base text-gray-700 md:text-lg text-justify">
          <FaFeatherPointed /> Welcome to HOPE , a non-technical club dedicated
          to creating a campus environment free from the shadows of ragging and
          negative traumas. Our mission is to empower students by fostering
          resilience, offering support, and organizing impactful events that
          promote anti-ragging awareness and mental well-being.
          <br />
          <FaFeatherPointed /> At HOPE, we believe in cultivating a community
          where individuals can triumph over challenges and emerge stronger.
          Through workshops, counseling sessions, and collaborative initiatives,
          we provide a safe space for students to overcome past experiences and
          build a resilient foundation for personal growth.
          <br />
          <FaFeatherPointed /> Join us in our journey to create a campus culture
          rooted in solidarity, strength, and the pursuit of a positive future.
          Together, we can make a difference and build a community where every
          individual has the support they need to thrive.
        </p>
      </div>
      <div className="grid max-w-screen-lg mx-auto gap-y-6 lg:grid-cols-2 lg:gap-x-8">
        {featureData.map((feature, index) => (
          <div className="p-6 bg-white rounded-lg shadow-md" key={index}>
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
              <h6 className="mb-3 text-xl font-bold leading-5">
                {feature.title}
              </h6>
              <p className="text-sm text-gray-900">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
