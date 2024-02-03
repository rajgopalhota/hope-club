import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import PhotoGallery from "./pages/PhotoGallery";
import RegistrationForm from "./pages/RegistrationForm";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import Register from "./pages/Register";
import { Feature } from "./pages/Feature";

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
      {/* Your main content goes here */}
      <section className="mainContent pb-16">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<RegistrationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<PhotoGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/mission-vision" element={<Feature />} />
        </Routes>
      </section>
      {/* Include the Navbar component at the bottom of the page */}
      <Navbar />
      <div
        onClick={handleClick}
        title={auth.user ? "Logout" : "Login"}
        className={`fixed top-4 right-4 flex items-center justify-center bg-white border ${
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
    </div>
  );
}

export default App;
