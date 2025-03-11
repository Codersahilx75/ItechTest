import React from "react";
import workData from "../../assets/data/workData"; // Import Data

export default function HowItWorks() {
  return (
    <div className="container  text-white mt-10 lg:mt-20 ">
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-3xl  sm:text-4xl md:text-6xl font-semibold">
          HOW IT <span className="text-[#007bff]">WORKS</span>
        </h3>
        <p className=" text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
        </p>
      </div>

      {/* Steps Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start mx-auto">
        {/* Steps Row (Always on Top) */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-2 w-full">
          {workData.steps.map((step, index) => (
            <div
              key={step.id}
              className={`w-full md:w-1/3 flex flex-col items-start ${index === 1 ? "mt-5 md:mt-20" : index === 2 ? "mt-5 md:mt-36" : ""
                }`}
            >
              <div className="border-l-2 border-[#007bff] p-10 ">
                <h4 className="text-lg sm:text-xl md:text-3xl  font-bold">{step.title}</h4>
                <p className="text-xs sm:text-sm  md:text-lg mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image + Button (Always at Bottom) */}
        <div className="flex-1 flex flex-col items-center justify-end mt-10 md:mt-0">
          <img
            src={workData.image}
            alt="How it works"
            className="max-w-[400px] sm:max-w-[400px] md:max-w-[400px] w-full object-contain"
          // className="w-full object-contain h-[500px]"
          />
          {/* Button under Image */}
          <button className="mt-6 bg-[#007bff]  text-white text-sm sm:text-lg font-medium px-3 py-2 sm:px-5 sm:py-3 rounded-lg hover:bg-[#0056b3] transition">
            {workData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
