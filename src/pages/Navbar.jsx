import React from "react";
import {
  AiOutlineBulb,
  AiOutlineContacts,
  AiOutlineFileImage,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineSchedule,
} from "react-icons/ai";
import { FaLock, FaSignOutAlt } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const auth = useAuth();

  const navigate = useNavigate();
  const handleClick = () => {
    if (auth.user) {
      window.confirm("Are you sure you want to logout?") && auth.logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <nav className="w-full px-8 py-1 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="md:order-1">
          <img className="h-16 w-16 " src="/rpa.png" />
        </div>
        <div className="text-gray-100 text-xs order-3 w-full md:w-auto md:order-2 md:text-base">
          <ul className="flex font-semibold justify-between">
            <NavLink to="/">
              <li className="md:px-4 md:py-2 hover:text-blue-100">Home</li>
            </NavLink>
            <NavLink to="/mission-vision">
              <li className="md:px-4 md:py-2 hover:text-blue-100">Vision</li>
            </NavLink>
            <NavLink to="/activities">
              <li className="md:px-4 md:py-2 hover:text-blue-100">
                Activities
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="md:px-4 md:py-2 hover:text-blue-100">Contact</li>
            </NavLink>
            <NavLink to="/programs">
              <li className="md:px-4 md:py-2 hover:text-blue-100">Gallery</li>
            </NavLink>
            <NavLink to="/about">
              <li className="md:px-4 md:py-2 hover:text-blue-100">About</li>
            </NavLink>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <div
            onClick={handleClick}
            title={auth.user ? "Logout" : "Login"}
            className="cursor-pointer"
          >
            {auth.user ? (
              <div className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-gray-50 rounded-xl flex items-center gap-2">
                <FaSignOutAlt className="h-5 w-5" />
                <span>Logout</span>
              </div>
            ) : (
              <div className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-gray-50 rounded-xl flex items-center gap-2">
                <FaLock className="h-5 w-5" />
                <span>Login</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
