// src/components/PhotoGallery.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import img1 from "./../assets/galley/1.jpg";
import img2 from "./../assets/galley/2.jpg";
import img3 from "./../assets/galley/3.jpg";
import img4 from "./../assets/galley/4.jpg";

const PhotoGallery = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  // Sample data for the image slider
  const sliderImages = [img1, img2, img3, img4];

  // Sample data for different events
  const eventsData = {
    event1: {
      name: "Event 1",
      date: "2024-02-10",
      images: [
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
      ],
    },
    event2: {
      name: "Event 2",
      date: "2024-02-15",
      images: [
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
      ],
    },
    // Add more events with their respective information
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the duration as needed (in milliseconds)
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
      <hr className="border-t-2 border-blue-500 my-5" />
      {/* Image Slider */}
      <Slider {...sliderSettings} className="mb-8">
        {sliderImages.map((image, index) => (
          <div className="caraousel" key={index}>
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full rounded-md"
            />
          </div>
        ))}
      </Slider>

      <div className="flex flex-col space-y-4">
        {Object.keys(eventsData).map((eventName, index) => (
          <div
            key={index}
            className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-4">
              {eventsData[eventName].name}
            </h3>

            <p className="text-sm mb-2">Date: {eventsData[eventName].date}</p>
            <div className="flex flex-wrap -mx-2">
              {eventsData[eventName].images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                >
                  <img
                    src={image}
                    alt={`Event ${eventName} Image ${imageIndex + 1}`}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
