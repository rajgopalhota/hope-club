import React, { useState, useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Layout from "./Layout";
import Lottie from "lottie-react";
import animation from "./assets/load.json";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Suspense
      fallback={
        <div className="lottie">
          <Lottie animationData={animation} autoplay loop />
          <h1 className="text-center text-2xl text-white">
            Hey buddy, taking you to the RPA Club's website 😊
          </h1>
        </div>
      }
    >
      {loading ? (
        <div className="lottie">
          <Lottie animationData={animation} autoplay loop />
          <h1 className="text-center text-2xl text-sky-200">
            Hey buddy, taking you to the RPA Club's website 😊
          </h1>
        </div>
      ) : (
        <div>
          <ToastContainer position="bottom-center" theme="dark" />
          <Layout />
        </div>
      )}
    </Suspense>
  );
}

export default App;
