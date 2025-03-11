import React from 'react'
import CommunityInsightsGroup from "../../assets/img/CommunityInsightsGroup.png";

function CommunityInsights() {
    return (

        <div className="container flex flex-col items-center justify-center text-white py-20">
            <div className="container flex items-center justify-center flex-col text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-normal leading-snug">
                    <span className="customeBlue font-bold">Community </span> Insights
                </h1>
                <p className="mt-4 font-normal text-center text-base sm:text-lg lg:text-2xl mx-auto lg:mx-0 max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididun ut labore et dolore magna aliqua. Ut enim ad minim venia
                </p>
            </div>

            <div className="prf p-5 rounded-3xl my-10 w-full">
                <div
                    className="text-white rounded-3xl dd1"
                    style={{
                        border: "4px solid transparent",
                        borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                        WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                    }}
                >
                    <div className="flex p-4 items-center justify-between flex-col lg:flex-row lg:gap-20">

                        <div className="flex items-center gap-4 p-4 rounded-lg">
                            <img src={CommunityInsightsGroup} alt="CommunityInsightsGroup" className="" />
                        </div>

                        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 w-full gap-5 ">

                            <div className="p-1 rounded-3xl w-full">
                                <div
                                    className="text-white rounded-3xl dd2 flex items-center justify-between gap-6"
                                    style={{
                                        border: "4px solid transparent",
                                        borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                                        WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                                    }}
                                >
                                    <span className='text-2xl'>User Votes on Past Projects</span>
                                    <span className='customeBlue font-bold text-3xl'>10</span>

                                </div>
                            </div>


                            <div className="p-1 rounded-3xl w-full">
                                <div
                                    className="text-white rounded-3xl dd2 flex items-center justify-between gap-6"
                                    style={{
                                        border: "4px solid transparent",
                                        borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                                        WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                                    }}
                                >
                                    <span className='text-2xl'>User Votes on Past Projects</span>
                                    <span className='customeBlue font-bold text-3xl'>10</span>

                                </div>
                            </div>

                            <div className="p-1 rounded-3xl w-full">
                                <div
                                    className="text-white rounded-3xl dd2 flex items-center justify-between gap-6"
                                    style={{
                                        border: "4px solid transparent",
                                        borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                                        WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                                    }}
                                >
                                    <span className='text-2xl'>User Votes on Past Projects</span>
                                    <span className='customeBlue font-bold text-3xl'>10</span>

                                </div>
                            </div>

                            <div className="p-1 rounded-3xl w-full">
                                <div
                                    className="text-white rounded-3xl dd2 flex items-center justify-between gap-6"
                                    style={{
                                        border: "4px solid transparent",
                                        borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                                        WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                                    }}
                                >
                                    <span className='text-2xl'>User Votes on Past Projects</span>
                                    <span className='customeBlue font-bold text-3xl'>10</span>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CommunityInsights