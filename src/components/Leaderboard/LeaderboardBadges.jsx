import React from "react";
import croun from "../../assets/img/croun.png";
import EllipseBed from "../../assets/img/EllipseBed.png";
import ImpactBadge from "../../assets/img/ImpactBadge.png";
import trophy from "../../assets/img/trophy.png";

const leaderboardData = [
    { name: "Maria James", img: EllipseBed, rank: 1 },
    { name: "Maria James", img: EllipseBed, rank: 2 },
    { name: "Maria James", img: EllipseBed, rank: 3 },
    { name: "Maria James", img: EllipseBed, rank: 4 },
    { name: "Maria James", img: EllipseBed, rank: 5 },
    { name: "Maria James", img: EllipseBed, rank: 6 },
    { name: "Maria James", img: EllipseBed, rank: 7 },
    { name: "Maria James", img: EllipseBed, rank: 8 },
];

function LeaderboardBadges() {
    return (

        <div className="container flex items-center justify-center flex-col text-white mt-20">

            <h2 className="text-2xl   sm:text-3xl md:text-4xl font-bold">
                Leaderboard <span className="text-blue-500"> Badges </span>
            </h2>

            <p className="md:text-lg text-sm  mt-4 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididun ut labore et dolore magna aliqua. Ut enim ad minim venia
            </p>

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

                        <div className="p-5">

                            {leaderboardData.map((user, index) => (
                                <div
                                    key={index}
                                    className="flex flex-wrap items-center justify-between p-3 md:p-4 rounded-xl md:mb-10 mb-5 customeBGBlue2 transition-all"
                                    style={{
                                        backgroundColor: `rgba(0, 77, 244, ${index === 0 ? 1 : index === 1 ? 0.6 : index === 2 ? 0.3 : 0.1})`
                                    }}

                                >
                                    {/* Left: Crown, Profile Picture & Name */}
                                    <div className="flex items-center space-x-3 relative">

                                        {/* Crown with Centered Rank */}
                                        <div className="relative w-10">
                                            <img src={croun} alt="Crown" className="w-full h-full" />
                                            <span className="absolute inset-0 flex items-center justify-center text-white text-xs md:text-sm font-bold">
                                                {user.rank}
                                            </span>
                                        </div>

                                        {/* Profile Image */}
                                        <img
                                            src={user.img}
                                            alt={user.name}
                                            className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                                        />
                                        <span className="text-white font-normal text-sm md:text-base">
                                            {user.name}
                                        </span>
                                    </div>

                                    {/* Right: Trophy & Badge */}
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={trophy}
                                            alt="Trophy"
                                            className="w-6 h-6 md:w-8 md:h-8 p-2 shadow-lg rounded-full bg-blue-500"
                                        />
                                        <img
                                            src={ImpactBadge}
                                            alt="Badge"
                                            className="w-6 h-6 md:w-8 md:h-8"
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default LeaderboardBadges;
