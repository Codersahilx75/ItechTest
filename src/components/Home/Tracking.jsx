import React from "react";
import trackingData from "../../assets/data/trackingData"; // Import JSON data

export default function Tracking() {
  return (
    <div className="text-white py-12 px-4 md:px-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section (Text + Buttons) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            Start Tracking the Truth in{" "}
            <span className="text-blue-500 font-bold">Crypto</span> Join{" "}
            <span className="text-blue-500 font-bold">BlocFans</span> Today!
          </h2>
          <p className="text-base sm:text-lg  text-gray-200 md:text-xl font-medium mt-4 max-w-2xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia.
          </p>

          {/* Buttons - Fetched from JSON */}
          <div className="mt-6 flex flex-col  sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="whitespace-nowrap bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all w-full sm:w-auto">
              {trackingData.buttons[0].text}
            </button>
            <button className="whitespace-nowrap border-2 border-blue-700 py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all w-full sm:w-auto">
              {trackingData.buttons[1].text}
            </button>
          </div>
        </div>

        {/* Right Section (Images from JSON) */}
        <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          {/* Frame Image - Positioned on top */}
          <img
            src={trackingData.images.frame} // Frame image from JSON
            alt="Frame"
            // className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-56 md:h-20 sm:w-40 md:w-56 lg:w-56 animate-float"
            className="absolute md:-top-10 md:left-[70%] left-[10%] transform md:-translate-x-[68%] -translate-y-6 animate-float"
          />
          
          {/* Bitcoin Image - Positioned below */}
          <img
            src={trackingData.images.bitcoin} // Bitcoin image from JSON
            alt="Bitcoin"
            // className="relative w-64 sm:w-52 md:w-60 lg:w-72 xl:w-80"
            className="relative "
          />
        </div>
      </div>
    </div>
  );
}
