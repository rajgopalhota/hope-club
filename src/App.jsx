import React from "react";
import { FaLock, FaSignOutAlt, FaUserShield } from "react-icons/fa";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAuth } from "./AuthContext";
import Admin from "./admin/Admin";
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
import PageNotFound from "./pages/PageNotFound";

function App() {
  const auth = useAuth();
  const loadingBarRef = React.useRef(null);
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
    <div>
      <LoadingBar ref={loadingBarRef} color="#3498db" />
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
          {auth.user ? (
            <FaSignOutAlt className="text-xl" />
          ) : (
            <FaLock className="text-xl" />
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
              <FaUserShield className="text-xl text-purple-500" />
            </Link>
          )}
      </div>
      {/* Your main content goes here */}
      <ToastContainer />
      <section className="mainContent pb-10">
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
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </section>
      {/* Include the Navbar component at the bottom of the page */}
      <Navbar />
    </div>
  );
}

export default App;
