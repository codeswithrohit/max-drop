"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/slider/sl11/1.jpg",
    title: "OUR NEW RANGE OF",
    highlight: "IMACS",
  },
  {
    img: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/slider/sl13/1.jpg",
    title: "BEST DEALS ON",
    highlight: "LAPTOPS",
  },
  {
    img: "https://demo.smartaddons.com/templates/html/maxshop/image/demo/slider/sl12/1.jpg",
    title: "LATEST COLLECTION",
    highlight: "MOBILES",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full px-3  lg:px-0">

    <div className="relative w-full 
      h-[250px] 
      sm:h-[320px] 
      md:h-[390px] 
      lg:h-[420px] 
      xl:h-[480px] 
      overflow-hidden bg-black
      
      "
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.img}
            alt="banner"
            className="w-full h-full object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          {/* Text */}
          <div className="absolute top-1/2 left-4 sm:left-8 md:left-16 -translate-y-1/2 text-white">
            <h2 className="text-sm sm:text-lg md:text-2xl mb-2">
              {slide.title}
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-red-500">
              {slide.highlight}
            </h1>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 sm:p-3 text-white"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 sm:p-3 text-white"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              index === current ? "bg-red-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
}