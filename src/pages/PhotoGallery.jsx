import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons from react-icons
import { FaCamera } from "react-icons/fa"; // Import camera icon from react-icons
import img1 from "./../assets/galley/1.jpg";
import img2 from "./../assets/galley/2.jpg";
import img3 from "./../assets/galley/3.jpg";
// Import images from img4 to img11
import img4 from "./../assets/galley/4.jpg";
import img5 from "./../assets/galley/5.jpg";
import img6 from "./../assets/galley/6.jpg";
import img7 from "./../assets/galley/7.jpg";
import img8 from "./../assets/galley/8.jpg";
import img9 from "./../assets/galley/9.jpg";
import img10 from "./../assets/galley/10.jpg";
import img11 from "./../assets/galley/11.jpg";

const imageData = [
  {
    url: img1,
    title: "Image 1",
  },
  {
    url: img2,
    title: "Image 2",
  },
  {
    url: img3,
    title: "Image 3",
  },
  // Add more images to the imageData array
  {
    url: img4,
    title: "Image 4",
  },
  {
    url: img5,
    title: "Image 5",
  },
  {
    url: img6,
    title: "Image 6",
  },
  {
    url: img7,
    title: "Image 7",
  },
  {
    url: img8,
    title: "Image 8",
  },
  {
    url: img9,
    title: "Image 9",
  },
  {
    url: img10,
    title: "Image 10",
  },
  {
    url: img11,
    title: "Image 11",
  },
  {
    url: "https://images.hindustantimes.com/img/2021/02/10/550x309/KL_University_HT_1612961689616_1612961698572.jpg",
    title: "Image 11",
  },
];

const PhotoGallery = () => {
  const [likedImages, setLikedImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderImages = [img2, img3];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the duration as needed (in milliseconds)
  };

  const handleLikeClick = (index) => {
    const newLikedImages = [...likedImages];
    if (newLikedImages.includes(index)) {
      newLikedImages.splice(newLikedImages.indexOf(index), 1);
    } else {
      newLikedImages.push(index);
    }
    setLikedImages(newLikedImages);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl text-zinc-100 font-bold mb-4 flex items-center">
        <FaCamera className="mr-2 text-blue-500" size={32} /> Photo Gallery
      </h2>
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imageData.map((image, index) => (
          <div
            key={index}
            className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-lg"
          >
            <img
              className="object-cover w-full h-full transition duration-300 transform hover:scale-[1.25]"
              src={image.url}
              alt={`Image ${index + 1}`}
            />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => handleLikeClick(index)}
            >
              {likedImages.includes(index) ? (
                <AiFillHeart
                  size={42}
                  className="text-red-500 transition-transform transform scale-125"
                />
              ) : (
                <AiOutlineHeart
                  size={42}
                  className="text-red-300 hover:text-red-500"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
