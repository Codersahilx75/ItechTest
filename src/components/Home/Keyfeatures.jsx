import React from "react";
import keyfeaturesData from "../../assets/data/keyfeaturesData"; // Import Data

export default function Keyfeatures() {
  return (
    <div className="mt-10 md:mt-28 text-center px-4 text-white">
      {/* Heading */}
      <h3 className="text-2xl  sm:text-5xl md:text-5xl font-semibold text-white">
        KEY <span className="text-[#007bff]">FEATURES</span>
      </h3>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto mt-4">
        BlocFans gives you the tools to outsmart scammers and track the smartest money in crypto all in one place.
      </p>

      {/* Features Container with Background & Shadow */}
      <div className="mt-10 bg-[#0A1F39] p-10 rounded-4xl shadow-md container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {keyfeaturesData.map((feature, index) => (
            <div key={index} className="text-white flex flex-col items-center">
              <img src={feature.img} alt={feature.title} className="w-24 h-24 mb-6" />
              <h4 className="text-2xl  font-semibold">{feature.title}</h4>
              <p className="font-normal text-base text-center mt-3 leading-relaxed sm:max-w-[300px] lg:max-w-[250px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
