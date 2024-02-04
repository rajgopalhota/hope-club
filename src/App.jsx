import React from "react";
import { FaSignOutAlt, FaSignInAlt, FaUserShield } from "react-icons/fa";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./AuthContext";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import { Feature } from "./pages/Feature";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import PayForActivity from "./pages/PayForActivity";
import PhotoGallery from "./pages/PhotoGallery";
import Register from "./pages/Register";
import { Link } from "react-router-dom";
import Admin from "./admin/Admin";

function App() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    if (auth.user) {
      auth.logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      {/* Login/Logout Button */}
      <div className="activityButtons z-10 fixed top-4 right-4 flex flex-col gap-1 items-center justify-center">
        <div
          onClick={handleClick}
          title={auth.user ? "Logout" : "Login"}
          className={`bg-white border flex ${
            auth.user
              ? "border-red-500 text-red-500"
              : "border-blue-500 text-blue-500"
          } rounded-full p-3 shadow-md hover:shadow-lg focus:outline-none cursor-pointer`}
          style={{
            textDecoration: "none", // Remove default link underline
            transition: "color 0.3s, background-color 0.3s", // Smooth transition on hover
          }}
        >
          <span
            className={`${
              auth.user ? "text-red-500" : "text-blue-500"
            } text-sm font-semibold ml-2`}
          >
            {auth.user ? "Logout" : "Login"}
          </span>
          {auth.user ? (
            <FaSignOutAlt className="text-xl ml-2" />
          ) : (
            <FaSignInAlt className="text-xl ml-2" />
          )}
        </div>
        {auth.user &&
          (auth.user.role == "Admin" || auth.user.role == "Manager") && (
            <Link
              title={auth.user.role}
              to="/admin"
              className={`bg-white flex border border-purple-500 text-pruple-500 rounded-full p-3 shadow-md hover:shadow-lg focus:outline-none cursor-pointer`}
              style={{
                textDecoration: "none", // Remove default link underline
                transition: "color 0.3s, background-color 0.3s", // Smooth transition on hover
              }}
            >
              <span className="text-purple-500 text-sm font-semibold ml-2">
                {auth.user.role}
              </span>
              <FaUserShield className="text-xl ml-2 text-purple-500" />
            </Link>
          )}
      </div>
      {/* Your main content goes here */}
      <section className="mainContent pb-16">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<PhotoGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/mission-vision" element={<Feature />} />
          <Route path="/pay-for-activities" element={<PayForActivity />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </section>
      {/* Include the Navbar component at the bottom of the page */}
      <Navbar />
    </div>
  );
}

export default App;
