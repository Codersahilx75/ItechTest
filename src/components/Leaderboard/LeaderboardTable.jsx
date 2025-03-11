import React from "react";
import BackImg from "../../assets/img/BackImg.png";
import Trp from "../../assets/img/Trp.png";
import Star from "../../assets/img/Star.png";
import GRP from "../../assets/img/GRP.png";
import Maria from "../../assets/img/Maria.png";
import Rachel from "../../assets/img/Rachel.png";
import Andrew from "../../assets/img/Andrew.png";
import meddel from "../../assets/img/meddel.png";
import trophy from "../../assets/img/trophy.png";
import CrounTil from "../../assets/img/CrounTil.png";

export default function LeaderboardTable() {

    return (
        <div>
            <div
                className="container text-white relative flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url(${BackImg})`,
                    backgroundRepeat: "no-repeat",
                }}

            >

                <img
                    src={Star}
                    alt={Star}
                    className="absolute w-auto right-[0%] z-10"
                    style={{
                        zIndex: 10,
                    }}
                />

                <img
                    src={GRP}
                    alt={GRP}
                    className="absolute w-auto -top-[23%] -right-[4%] z-0"
                    style={{
                        zIndex: 0,
                    }}
                />

                <div className="flex flex-col md:flex-row items-center justify-center relative z-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-bold leading-snug lora md:max-w-[60%]">
                            Leaderboard <span className="customeBlue">Table </span>
                        </h1>
                        <p className="mt-4 font-normal text-base sm:text-lg md:text-2xl md:max-w-[60%] lg:max-w-[45%] mx-auto md:mx-0">
                            Track the smartest traders, expose scams, and rank the most trusted influencers. Crypto transparency starts here!
                        </p>

                    </div>

                    <div  >

                        <img
                            src={Trp}
                            alt={Trp}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>


            <div className="tb container flex items-center justify-center rounded-3xl my-20 py-10">

                <div className="p-1 rounded-3xl w-full">
                    <div
                        className="text-white rounded-3xl dd2 flex flex-col items-centerz justify-between gap-6"
                        style={{
                            border: "4px solid transparent",
                            borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                            WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
                        }}
                    >


                        <div className="py-5">
                            <div className="flex items-center justify-center bg-gradient-to-b md:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-10 max-w-5xl w-full md:mt-20">


                                    <div className="relative w-full">

                                        <div className="absolute top-0 left-0 w-full md:h-[35%] h-[25%] bg-transparent z-0"></div>
                                        <div className="absolute bottom-0 left-0 w-full md:h-[65%] h-[75%] prf z-0 rounded-3xl md:rounded-l-3xl md:rounded-r-none"></div>

                                        <div className="relative flex flex-col items-center w-full">

                                            <div className="flex items-center justify-center md:mt-20">
                                                <img src={Maria} alt="Maria" className="rounded-full z-10" />
                                            </div>

                                            <div className=" flex flex-col justify-center items-center p-5 md:pt-14 w-full max-w-xs md:max-w-sm relative">
                                                <span className="text-2xl font-bold text-white">Maria</span>

                                                <div className="w-full flex flex-col gap-5 py-10">

                                                    <div className="bg-[#00000066] rounded-full w-full flex items-center justify-between">
                                                        <img src={meddel} alt={meddel} className="customeBGBlue2 p-4 rounded-full" />
                                                        <div className="flex gap-10">
                                                            <span className="customeYellow text-xl">
                                                                Points
                                                            </span>
                                                            <span className="customeYellow font-bold text-xl">
                                                                40
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                    </div>

                                                    <div className="bg-[#00000066] rounded-full w-full flex items-center justify-between">
                                                        <img src={trophy} alt={trophy} className="customeBGBlue2 p-4 rounded-full" />
                                                        <div className="flex gap-2">
                                                            <span className="customeYellow text-xl">
                                                                Influencer Score
                                                            </span>
                                                            <span className="customeYellow font-bold text-xl">
                                                                40
                                                            </span>
                                                        </div>
                                                        <div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="relative w-full">

                                        <div className="absolute top-0 left-0 w-full h-[25%] bg-transparent z-0"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-[75%] prf z-0 rounded-3xl md:rounded-t-3xl md:rounded-b-none"></div>

                                        <div className="relative flex flex-col items-center w-full">

                                            <div className="flex items-center justify-center">
                                                <img src={Rachel} alt="Rachel" />
                                            </div>

                                            <div className=" flex flex-col justify-center items-center p-5 md:pt-14 w-full max-w-xs md:max-w-sm relative ">
                                                <span className="text-2xl font-bold text-white">Rachel</span>

                                                <div className="w-full flex flex-col gap-5 py-10">

                                                    <div className="bg-[#00000066] rounded-full w-full flex items-center justify-between">
                                                        <img src={meddel} alt={meddel} className="customeBGBlue2 p-4 rounded-full" />
                                                        <div className="flex gap-10">
                                                            <span className="customeYellow text-xl">
                                                                Points
                                                            </span>
                                                            <span className="customeYellow font-bold text-xl">
                                                                50
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                    </div>

                                                    <div className="bg-[#00000066] rounded-full w-full flex items-center justify-between">
                                                        <img src={trophy} alt={trophy} className="customeBGBlue2 p-4 rounded-full" />
                                                        <div className="flex gap-2">
                                                            <span className="customeYellow text-xl">
                                                                Influencer Score
                                                            </span>
                                                            <span className="customeYellow font-bold text-xl">
                                                                50
                                                            </span>
                                                        </div>
                                                        <div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="relative w-full">

                                        <div className="absolute top-0 left-0 w-full md:h-[35%] h-[25%] bg-transparent z-0"></div>
                                        <div className="absolute bottom-0 left-0 w-full md:h-[65%] h-[75%] prf z-0 rounded-3xl md:rounded-r-3xl md:rounded-l-none"></div>

                                        <div className="relative flex flex-col items-center w-full">

                                            <div className="flex items-center justify-center md:mt-20">
                                                <img src={Andrew} alt="Andrew" className="rounded-full z-10" />
                                            </div>

                                            <div className=" flex flex-col justify-center items-center p-5 md:pt-14 w-full max-w-xs md:max-w-sm relative">
                                                <span className="text-2xl font-bold text-white">Andrew</span>

                                                <div className="w-full flex flex-col gap-5 py-10">

                                                    <div className="bg-[#00000066] rounded-full w-full flex items-center justify-between">
                                                        <img src={meddel} alt={meddel} className="customeBGBlue2 p-4 rounded-full" />
                                                        <div className="flex gap-10">
                                                            <span className="customeYellow text-xl">
                                                                Points
                                                            </span>
                                                            <span className="customeYellow font-bold text-xl">
                                                                40
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                    </div>

                                                    <div className="bg-[#00000066] rounded-full w-full flex items-center justify-between">
                                                        <img src={trophy} alt={trophy} className="customeBGBlue2 p-4 rounded-full" />
                                                        <div className="flex gap-2">
                                                            <span className="customeYellow text-xl">
                                                                Influencer Score
                                                            </span>
                                                            <span className="customeYellow font-bold text-xl">
                                                                40
                                                            </span>
                                                        </div>
                                                        <div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container py-5 flex justify-center">
                            <div className="overflow-x-auto">
                                <table className="min-w-full rounded-lg">
                                    <thead>
                                        <tr className="text-left whitespace-nowrap">
                                            <th className="py-2 px-4 font-semibold text-2xl">Username</th>
                                            <th className="py-2 px-4 font-semibold text-2xl">Rank</th>
                                            <th className="py-2 px-4 font-semibold text-2xl">Points</th>
                                            <th className="py-2 px-4 font-semibold text-2xl">Influence Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...Array(5)].map((_, index) => (
                                            <tr key={index} className="text-center whitespace-nowrap">
                                                <td className="py-2 px-4 text-xl">John Smith</td>
                                                <td className="py-2 px-4 customeYellow text-xl">{index + 4}</td>
                                                <td className="py-2 px-4 customeYellow text-xl">30</td>
                                                <td className="py-2 px-4 customeYellow text-xl">30</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>


                </div>
            </div>
        </div>
    );
}
