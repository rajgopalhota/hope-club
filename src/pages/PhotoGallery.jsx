// src/components/PhotoGallery.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallery = () => {
  // Sample data for the image slider
  const sliderImages = [
    "https://placekitten.com/1200/500",
    "https://placekitten.com/1200/501",
    "https://placekitten.com/1200/502",
    // Add more image URLs as needed
  ];

  // Sample data for different events
  const eventImages = {
    event1: [
      "https://placekitten.com/400/300",
      "https://placekitten.com/401/300",
      "https://placekitten.com/402/300",
    ],
    event2: [
      "https://placekitten.com/400/301",
      "https://placekitten.com/401/301",
      "https://placekitten.com/402/301",
    ],
    // Add more event names with their respective image URLs
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

      {/* Image Slider */}
      <Slider {...sliderSettings} className="mb-8">
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full rounded-md"
            />
          </div>
        ))}
      </Slider>

      <div className="flex flex-col overflow-x-auto space-y-4">
        {Object.keys(eventImages).map((eventName, index) => (
          <div
            key={index}
            className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-4">{eventName}</h3>
            <div className="flex space-x-4">
              {eventImages[eventName].map((image, imageIndex) => (
                <div key={imageIndex} className="flex-shrink-0">
                  <img
                    src={image}
                    alt={`Event ${eventName} Image ${imageIndex + 1}`}
                    className="w-52 h-52 object-cover rounded-md"
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
