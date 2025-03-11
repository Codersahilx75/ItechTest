import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import warriordata from "../../assets/data/warriordata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows with increased gap on mobile
const NextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-100px] right-[40%] md:right-[46%] border border-blue-600 rounded-full text-white p-3  hover:bg-blue-700 transition"
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-100px] left-[40%] md:left-[46%] border border-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </button>
);

export default function Warriors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    accessibility: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Center mode off on tablets
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Center mode off on small screens
        },
      },
    ],
  };
  

  return (
    <div className="text-white text-center py-16 px-4  ">
    <div className="container mx-auto">
      {/* Title Section */}
      <h2 className="text-3xl  sm:text-4xl md:text-5xl  font-bold">
        The Future of{" "}
        <span className="text-blue-500">
          Crypto<br></br> Transparency
        </span>{" "}
        Starts Here.
      </h2>
      <p className="text-md   sm:text-xl  mt-4 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

        {/* Slider Section */}
        <div className="mt-12 w-full mx-auto relative">
          <Slider {...settings}>
            {warriordata.testimonials.map((testimonial, index) => {
              const isActive = index === currentSlide;
              return (
                <div key={index} className="p-2 sm:p-4">
                  <div
                    className={`bg-gradient-to-b from-[#0A1F38] via-[#063167] to-[#0A1F38] rounded-xl p-4 sm:p-6 shadow-lg border border-blue-500 flex flex-col items-center transition-all duration-500 ${
                      isActive
                        ? "md:scale-110 opacity-100 shadow-xl"
                        : "scale-95 opacity-85"
                    }`}
                  >
                    <p className="text-gray-300  text-sm sm:text-lg text-left mb-4 sm:mb-6">
                      {testimonial.text}
                    </p>
                    <div className="md:flex w-full justify-between space-y-5 mt-7">
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full border-2 border-white w-10 h-10 sm:w-14 sm:h-14"
                        />
                        <div className="ml-3 text-left">
                          <h4 className="font-medium  text-sm sm:text-xl">
                            {testimonial.name}
                          </h4>
                          <p className="  text-xs sm:text-base">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      {/* Star Ratings */}
                      <div className="flex space-x-1 mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < testimonial.rating
                                ? "text-yellow-500"
                                : "text-gray-500"
                            } text-xs sm:text-sm`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>


        <div className="mt-32 flex items-center justify-center text-xl font-semibold">
          <img
            src={warriordata.footer.image}
            alt="Trophy"
            className="lg:w-22 lg:h-24  mr-3"
          />
          <span className="text-xl  lg:text-3xl">{warriordata.footer.text}</span>
        </div>
      </div>
    </div>
  );
}
