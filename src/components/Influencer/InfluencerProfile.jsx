import React from 'react'
import x from "../../assets/img/x.png";
import ig from "../../assets/img/ig.png";
import linkDin from "../../assets/img/in.png";
import fb from "../../assets/img/fb.png";
import flag from "../../assets/img/flag.png";
import Ellipse from "../../assets/img/Ellipse.png";

function InfluencerProfile() {
    return (
        <div className="container text-white relative flex items-center justify-center pb-20">
            <div className="prf p-5 rounded-3xl">
                <div
                    className="text-white rounded-3xl dd1"
                    style={{
                        border: "4px solid transparent",
                        borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                        WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                    }}
                >
                    {/* Profile and Buttons Section */}
                    <div className="flex p-4 items-center justify-between flex-col md:flex-row">
                        {/* Profile Section */}
                        <div className="flex items-center gap-4 p-4 rounded-lg">
                            <img src={Ellipse} alt="Ellipse" className="w-24 h-24 rounded-full" />
                            <div>
                                <h3 className="text-lg font-semibold">John Smith</h3>
                                <p className="text-sm text-gray-300">@johnsmith</p>
                            </div>
                        </div>

                        {/* Buttons Section */}
                        <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg mt-4 md:mt-0">
                            <button
                                className="bg-[#0471EF] px-6 py-3 rounded-md hover:bg-blue-700 font-semibold w-full sm:w-auto transition duration-300 cursor-pointer"
                            >
                                Follow
                            </button>
                            <button
                                className="border border-[#0471EF] px-6 py-3 rounded-md hover:bg-blue-700 font-semibold w-full sm:w-auto transition duration-300 cursor-pointer"
                            >
                                Claim Profile
                            </button>
                            <button
                                className="flex items-center justify-center gap-1 text-[#EA1115] px-6 py-3 rounded-md font-semibold w-full sm:w-auto transition duration-300 cursor-pointer"
                            >
                                <img src={flag} alt="flag" className="w-4 h-4" />
                                Report
                            </button>
                        </div>
                    </div>

                    <div className="flex p-4 items-center justify-between flex-col md:flex-row">
                        <div className="flex items-center gap-4 p-4 rounded-lg lg:max-w-[30%]">
                            <p className="text-lg text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 p-4 rounded-lg mt-4 md:mt-0 space-y-10 md:w-auto w-full">
                            <div>
                                <a
                                    className="md:w-[300px] whitespace-nowrap flex items-center justify-between gap-10 border border-[#0471EF] px-6 py-3 rounded-2xl font-semibold w-full transition duration-300 cursor-pointer"
                                >
                                    <p>Trust Score</p>
                                    <p className="customeYellow">89</p>
                                </a>
                            </div>

                            <div className="flex space-x-4 md:justify-end justify-between">
                                <img src={x} alt="X" className="w-6 h-6" />
                                <img src={ig} alt="Instagram" className="w-6 h-6" />
                                <img src={linkDin} alt="LinkedIn" className="w-6 h-6" />
                                <img src={fb} alt="Facebook" className="w-3 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfluencerProfile