import React from "react";
import Header from "../layout/Header";
import Dashboard from "../components/Home/Dashboard";
import Keyfeatures from "../components/Home/Keyfeatures"; // Import Keyfeatures
import Howitworks from "../components/Home/Howitworks";
import Winner from "../components/Home/Winner";
import Warriors from "../components/Home/Warriors";
import Tracking from "../components/Home/Tracking";
import Footer from "../layout/Footer";

export default function LandingPage() {
  return (
    <div className=" bg-[#000618] relative">
      {/* Gradient Effect - Smooth Merge with Background */}
      <div
        className="absolute top-0 left-0 w-full min-h-screen z-0"
        style={{
          // background: `linear-gradient(to bottom, rgba(1, 148, 254, 0.4), rgba(1, 148, 254, 0.2), rgba(0, 6, 24, 0.8), rgba(0, 6, 24, 1))`,
          background: `linear-gradient(to bottom, rgba(0, 6, 24, .3), rgba(1, 148, 254, 0.1), rgba(1, 148, 254, 0.1), rgba(0, 6, 24, .1))`,
        }}
      ></div>

      <div className="relative z-10">
        {/* Header Component */}
        <Header />

        {/* Dashboard Section */}
        <Dashboard />

        {/* Key Features Section */}
        <Keyfeatures />

        <Howitworks />

        <Winner />

        <Warriors />

        <Tracking />

        <Footer />
      </div>
    </div>
  );
}
