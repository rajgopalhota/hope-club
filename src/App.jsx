import React from "react";
import { FaUserShield } from "react-icons/fa";
import { Link, Route, Routes, useLocation } from "react-router-dom";
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
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import PageNotFound from "./pages/PageNotFound";
import PayForActivity from "./pages/PayForActivity";
import PhotoGallery from "./pages/PhotoGallery";
import Register from "./pages/Register";

function App() {
  const auth = useAuth();
  const loadingBarRef = React.useRef(null);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
      <LoadingBar ref={loadingBarRef} color="#3498db" />
      <div className="activityButtons z-10 fixed bottom-4 left-4 flex flex-col gap-1 items-center justify-center">
        {auth.user &&
          (auth.user.role === "Admin" || auth.user.role === "Manager") && (
            <Link
              title={auth.user.role}
              to="/admin"
              className={`bg-white flex border border-purple-500 text-purple-500 rounded-full p-3 shadow-md hover:shadow-lg focus:outline-none cursor-pointer`}
              style={{
                textDecoration: "none", // Remove default link underline
                transition: "color 0.3s, background-color 0.3s", // Smooth transition on hover
              }}
            >
              <FaUserShield className="text-xl text-purple-500" />
            </Link>
          )}
      </div>
      <ToastContainer />
      {!isAdminRoute && <Navbar />}
      <section className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/team" element={<About />} />
          <Route path="/programs" element={<PhotoGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/about" element={<Feature />} />
          <Route path="/pay-for-activities" element={<PayForActivity />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
