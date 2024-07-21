import React from 'react';
import { AiOutlineBulb, AiOutlineContacts, AiOutlineFileImage, AiOutlineHome, AiOutlineInfoCircle, AiOutlineSchedule } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full text-white text-center flex justify-around fixed">
      <NavLink to="/" className="flex flex-col items-center w-full p-1 ">
        <AiOutlineHome className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-200">Home</p>
      </NavLink>

      <NavLink to="/mission-vision" className="flex flex-col items-center w-full p-1 ">
        <AiOutlineBulb className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-200">Vision</p>
      </NavLink>

      <NavLink to="/activities" className="flex flex-col items-center w-full p-1 ">
        <AiOutlineSchedule className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-200">Activities</p>
      </NavLink>

      <NavLink to="/contact" className="flex flex-col items-center w-full p-1 ">
        <AiOutlineContacts className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-200">Contact</p>
      </NavLink>

      <NavLink to="/programs" className="flex flex-col items-center w-full p-1 ">
        <AiOutlineFileImage className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-200">Gallery</p>
      </NavLink>

      <NavLink to="/about" className="flex flex-col items-center w-full p-1 ">
        <AiOutlineInfoCircle className="text-2xl mb-1" />
        <p className="text-[10px] lg:text-sm text-zinc-200">About</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
