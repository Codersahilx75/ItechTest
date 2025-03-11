import React from 'react'
import GroupBTN from "../../assets/img/GroupBTN.png";

function TrustScoreBreakdown() {
    return (

        <div className=" flex flex-col  items-center justify-center text-white pb-20">
            <div className="container flex items-center justify-center flex-col text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-normal leading-snug">
                    Trust Score <span className="customeBlue font-bold">Breakdown</span>
                </h1>
                <p className="mt-4 font-normal text-center text-base sm:text-lg md:text-2xl mx-auto md:mx-0 max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
                </p>
            </div>


            <div className="container flex items-center justify-center flex-col text-center md:text-left my-10">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  w-full gap-5">

                    <div className="prf p-1 rounded-3xl w-full">
                        <div
                            className="text-white rounded-3xl dd1 flex items-center justify-between gap-6"
                            style={{
                                border: "4px solid transparent",
                                borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                                WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                            }}
                        >
                            <div>
                                <img src={GroupBTN} alt="GroupBTN" />
                            </div>

                            <div className="w-full">
                                <span className="font-bold text-center md:text-3xl text-2xl">Sentiments</span>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="customeYellow px-2 py-1 rounded-md font-bold text-xl md:text-2xl">50%</p>
                                    <div className="w-full h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-full customeBGYellow rounded-full"
                                            style={{ width: "50%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prf p-1 rounded-3xl w-full">
                        <div
                            className="text-white rounded-3xl dd1 flex items-center justify-between gap-6"
                            style={{
                                border: "4px solid transparent",
                                borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                                WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                            }}
                        >
                            <div>
                                <img src={GroupBTN} alt="GroupBTN" />
                            </div>

                            <div className="w-full">
                                <span className="font-bold text-center md:text-3xl text-2xl">Project Success</span>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="customeYellow px-2 py-1 rounded-md font-bold text-xl md:text-2xl">90%</p>
                                    <div className="w-full h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-full customeBGYellow rounded-full"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prf p-1 rounded-3xl w-full">
                        <div
                            className="text-white rounded-3xl dd1 flex items-center justify-between gap-6"
                            style={{
                                border: "4px solid transparent",
                                borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                                WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                            }}
                        >
                            <div>
                                <img src={GroupBTN} alt="GroupBTN" />
                            </div>

                            <div className="w-full">
                                <span className="font-bold text-center md:text-3xl text-2xl">Engagement</span>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="customeYellow px-2 py-1 rounded-md font-bold text-xl md:text-2xl">75%</p>
                                    <div className="w-full h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-full customeBGYellow rounded-full"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TrustScoreBreakdown