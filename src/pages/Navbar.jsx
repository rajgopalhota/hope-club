import React from 'react';
import { AiOutlineHome, AiOutlineBulb, AiOutlineSchedule, AiOutlineContacts, AiOutlineFileImage, AiOutlineInfoCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-blue-100 bg-opacity-75 text-white text-center flex justify-around">
      <NavLink to="/" className="flex flex-col items-center w-full p-1 lg:p-0">
        <AiOutlineHome className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-800">Home</p>
      </NavLink>

      <NavLink to="/mission-vision" className="flex flex-col items-center w-full p-1 lg:p-0">
        <AiOutlineBulb className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-800">Vision</p>
      </NavLink>

      <NavLink to="/activities" className="flex flex-col items-center w-full p-1 lg:p-0">
        <AiOutlineSchedule className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-800">Activities</p>
      </NavLink>

      <NavLink to="/contact" className="flex flex-col items-center w-full p-1 lg:p-0">
        <AiOutlineContacts className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-800">Contact</p>
      </NavLink>

      <NavLink to="/programs" className="flex flex-col items-center w-full p-1 lg:p-0">
        <AiOutlineFileImage className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-800">Gallery</p>
      </NavLink>

      <NavLink to="/about" className="flex flex-col items-center w-full p-1 lg:p-0">
        <AiOutlineInfoCircle className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-800">About</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
