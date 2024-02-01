import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities"
import Navbar from "./pages/Navbar";
import RegistrationForm from "./pages/RegistrationForm";
import About from "./pages/About";
import PhotoGallery from "./pages/PhotoGallery";

function App() {
  return (
    <div>
      {/* Your main content goes here */}
      <section className="pb-16">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/activities/:id" element={<RegistrationForm/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/programs" element={<PhotoGallery/>} />
        </Routes>
      </section>
      {/* Include the Navbar component at the bottom of the page */}
      <Navbar />
    </div>
  );
}

export default App;
