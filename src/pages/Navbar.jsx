import React from 'react';
import { AiOutlineHome, AiOutlineBulb, AiOutlineSchedule, AiOutlineContacts, AiOutlineFileImage, AiOutlineInfoCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-blue-200 bg-opacity-75 p-1 text-white text-center flex justify-around">
      <NavLink to="/" className="flex flex-col items-center w-full">
        <AiOutlineHome className="text-2xl mb-1" />
        <p className="hidden lg:inline-block">Home</p>
      </NavLink>

      <NavLink to="/mission-vision" className="flex flex-col items-center w-full">
        <AiOutlineBulb className="text-2xl mb-1" />
        <p className="hidden lg:inline-block">Mission & Vision</p>
      </NavLink>

      <NavLink to="/activities" className="flex flex-col items-center w-full">
        <AiOutlineSchedule className="text-2xl mb-1" />
        <p className="hidden lg:inline-block">Activities</p>
      </NavLink>

      <NavLink to="/contact" className="flex flex-col items-center w-full">
        <AiOutlineContacts className="text-2xl mb-1" />
        <p className="hidden lg:inline-block">Contact</p>
      </NavLink>

      <NavLink to="/programs" className="flex flex-col items-center w-full">
        <AiOutlineFileImage className="text-2xl mb-1" />
        <p className="hidden lg:inline-block">Photo Gallery</p>
      </NavLink>

      <NavLink to="/about" className="flex flex-col items-center w-full">
        <AiOutlineInfoCircle className="text-2xl mb-1" />
        <p className="hidden lg:inline-block">About</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
