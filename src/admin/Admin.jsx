import React, { useState } from "react";
import {
  FaAddressBook,
  FaBars,
  FaChartLine,
  FaMoneyCheckAlt,
  FaTimes,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Route, Routes } from "react-router-dom";
import { useAuth } from "../AuthContext";
import empty from "./../assets/empty.gif";
import Activity from "./Activity";
import AdminHome from "./AdminHome";
import Contacts from "./Contacts";
import Engagement from "./Engagement";
import PaymentStatus from "./PaymentStatus";
import Users from "./Users";
import PageNotFound from "../pages/PageNotFound";
const Admin = () => {
  const auth = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarIcon = isSidebarOpen ? <FaTimes /> : <FaBars />;

  if (auth.user && (auth.user.role === "Admin" || auth.user.role === "Manager")) {
    return (
      <div className="relative flex h-screen">
        {/* Toggle Button for Small Screens */}
        <button
          className="lg:hidden fixed z-10 top-6 left-6 text-orange-500"
          onClick={toggleSidebar}
        >
          {sidebarIcon}
        </button>

        {/* Content Area */}
        <div className="flex-1 p-10 lg:ml-64 overflow-scroll">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/payment-status" element={<PaymentStatus />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>

        {/* Sidebar */}
        <div
          className={`bg-gray-800 text-white w-64 py-6 fixed z-999 h-full overflow-hidden ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0`}
        >
          <div className="text-2xl font-bold mb-6 text-center">{auth.user.role} Panel</div>
          <ul className="adminroute flex flex-col items-stretch space-y-2">
            <li>
              <NavLink
                to="/admin/activity"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaChartLine className="mr-2" />
                Activity
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/engagement"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaUserFriends className="mr-2" />
                Engagement
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contacts"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaAddressBook className="mr-2" />
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/payment-status"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaMoneyCheckAlt className="mr-2" />
                Payment Status
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaUsers className="mr-2" />
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <PageNotFound/>
    );
  }
};

export default Admin;
