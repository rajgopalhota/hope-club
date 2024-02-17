
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { AiOutlineMail } from 'react-icons/ai';
import { useEffect } from 'react';
import { FcAbout } from "react-icons/fc";

const team = [
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
    },
  },
  {
    name: "RAJGOPAL HOTA",
    role: "Software Engineer",
    bio: "Rajgopal is a passionate software engineer with expertise in front-end development. He loves building user-friendly interfaces and solving complex problems.",
    image: "https://th.bing.com/th/id/OIP.1bPdxuKbBVPJGJMpdLo3VAAAAA?rs=1&pid=ImgDetMain",
    social: {
      github: "https://github.com/rajgopalhota",
      linkedin: "https://github.com/rajgopalhota",
      email: "https://github.com/rajgopalhota",
      twitter: "https://github.com/rajgopalhota",
      facebook: "https://github.com/rajgopalhota",
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
            <FcAbout className="inline-block mr-2 text-blue-600" />
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
                <div className="rounded overflow-hidden shadow-md bg-purple-50">
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
                          className="mx-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub size={24} color="#718096" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="mx-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter size={24} color="#1DA1F2" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="mx-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin size={24} color="#0077B5" />
                        </a>
                      )}
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          className="mx-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TiSocialFacebookCircular size={24} color="#3b5998" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="mx-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiOutlineMail size={24} color="#EA4335" />
                        </a>
                      )}
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
