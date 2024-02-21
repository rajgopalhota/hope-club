const imageData = [
  {
    url: img1,
    title: "Image 0",
  },
  {
    url: img2,
    title: "Image 0",
  },
  {
    url: img3,
    title: "Image 0",
  },
  {
    url: img4,
    title: "Image 0",
  },
  {
    url: "https://i.ytimg.com/vi/uptQQUWC01k/maxresdefault.jpg",
    title: "Image 1",
  },
  {
    url: "https://images.static-collegedunia.com/public/college_data/images/campusimage/1579070250KLU_13_2379.jpg",
    title: "Image 2",
  },
  {
    url: "https://th.bing.com/th/id/OIP.pm90l9iwViZkkHMMQKhz3wHaEH?w=900&h=500&rs=1&pid=ImgDetMain",
    title: "Image 3",
  },
  {
    url: "https://th.bing.com/th/id/OIP.IVxGW9qV-WWgI-kl1oSukQHaEK?rs=1&pid=ImgDetMain",
    title: "Image 4",
  },
  {
    url: "https://images.static-collegedunia.com/public/college_data/images/campusimage/1579070251VH_KLU2017_D2-390.jpg",
    title: "Image 5",
  },
  {
    url: "https://th.bing.com/th/id/OIP.KX1-PDDV9kHU5w26ceedXAHaE8?rs=1&pid=ImgDetMain",
    title: "Image 6",
  },
  {
    url: "https://th.bing.com/th/id/OIP.6L0c2DaJLQai_mgazbxJUwHaFj?rs=1&pid=ImgDetMain",
    title: "Image 7",
  },
  {
    url: "https://i.ytimg.com/vi/uptQQUWC01k/maxresdefault.jpg",
    title: "Image 1",
  },
  {
    url: "https://images.static-collegedunia.com/public/college_data/images/campusimage/1579070250KLU_13_2379.jpg",
    title: "Image 2",
  },
  {
    url: "https://th.bing.com/th/id/OIP.pm90l9iwViZkkHMMQKhz3wHaEH?w=900&h=500&rs=1&pid=ImgDetMain",
    title: "Image 3",
  },
  {
    url: "https://th.bing.com/th/id/OIP.IVxGW9qV-WWgI-kl1oSukQHaEK?rs=1&pid=ImgDetMain",
    title: "Image 4",
  },
  {
    url: "https://images.static-collegedunia.com/public/college_data/images/campusimage/1579070251VH_KLU2017_D2-390.jpg",
    title: "Image 5",
  },
  {
    url: "https://th.bing.com/th/id/OIP.KX1-PDDV9kHU5w26ceedXAHaE8?rs=1&pid=ImgDetMain",
    title: "Image 6",
  },
  {
    url: "https://th.bing.com/th/id/OIP.6L0c2DaJLQai_mgazbxJUwHaFj?rs=1&pid=ImgDetMain",
    title: "Image 7",
  },
];

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons from react-icons
import { FaCamera } from "react-icons/fa"; // Import camera icon from react-icons
import img1 from "./../assets/galley/1.jpg";
import img2 from "./../assets/galley/2.jpg";
import img3 from "./../assets/galley/3.jpg";
import img4 from "./../assets/galley/4.jpg";

const PhotoGallery = () => {
  const [likedImages, setLikedImages] = useState([]);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const sliderImages = [img1, img2, img3, img4];

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
      <h2 className="text-3xl font-bold mb-4 flex items-center">
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
