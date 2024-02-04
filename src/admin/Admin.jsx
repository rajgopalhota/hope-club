import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import empty from "./../assets/empty.gif";
import { Link, Route, Routes } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChartLine,
  FaUserFriends,
  FaAddressBook,
  FaMoneyCheckAlt,
  FaUsers,
} from "react-icons/fa";
import AdminHome from "./AdminHome";
import Activity from "./Activity";
import Contacts from "./Contacts";
import Engagement from "./Engagement";
import PaymentStatus from "./PaymentStatus";
import Users from "./Users";
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
          className={`bg-gray-800 text-white w-64 py-6 fixed z-999 h-full ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0`}
        >
          <div className="text-2xl font-bold mb-6 text-center">{auth.user.role} Panel</div>
          <ul className="flex flex-col items-stretch space-y-2">
            <li>
              <Link
                to="/admin/activity"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaChartLine className="mr-2" />
                Activity
              </Link>
            </li>
            <li>
              <Link
                to="/admin/engagement"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaUserFriends className="mr-2" />
                Engagement
              </Link>
            </li>
            <li>
              <Link
                to="/admin/contacts"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaAddressBook className="mr-2" />
                Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/admin/payment-status"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaMoneyCheckAlt className="mr-2" />
                Payment Status
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center py-2 px-4 hover:bg-gray-700 w-full"
              >
                <FaUsers className="mr-2" />
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="admin-heading text-center mt-10">
          Uh no! Page not found!
        </h1>
        <div className="empty flex w-screen justify-center">
          <img src={empty} alt="empty" />
        </div>
      </>
    );
  }
};

export default Admin;
