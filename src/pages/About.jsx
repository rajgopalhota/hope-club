import { useEffect } from "react";

const team = [
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
    },
  },
  
];


const About = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-16">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-blue-50 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {/* Map over team members */}
            {team.map((member, index) => (
              <div
                key={index}
                className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={member.image}
                        alt={`Display Picture of ${member.name}`}
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                      {member.name}
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      {member.role}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      {member.bio}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      {/* Render social links */}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="mx-5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                      )}
                      {/* Add more social links as needed */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
