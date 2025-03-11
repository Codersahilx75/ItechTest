import React from "react";
import BackImg from "../../assets/img/BackImg.png";
import Component from "../../assets/img/Component.png";
import InfluencerProfile from "./InfluencerProfile";
import TrustScoreBreakdown from "./TrustScoreBreakdown";
import GRP from "../../assets/img/GRP.png";

export default function HeroSection() {
    return (
        <div>
            <div
                className="container text-white relative flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url(${BackImg})`,
                    backgroundRepeat: "no-repeat",
                    // backgroundPosition: "-10px -65px",
                    mixBlendMode: "multiply",
                }}

            >
            
                  <img
                    src={GRP}
                    alt={GRP}
                    className="absolute w-auto top-[30%] right-[0%] bland z-0"
                    style={{
                      zIndex: 0, // Ensure it stays behind the circular content
                    }}
                  />

                <div className="flex flex-col md:flex-row items-center justify-center relative z-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-9xl font-bold leading-snug lora md:max-w-[60%]">
                            Influencer <span className="customeBlue">Profile </span>
                        </h1>
                        <p className="mt-4 font-normal text-base sm:text-lg md:text-2xl md:max-w-[60%] lg:max-w-[45%] mx-auto md:mx-0">
                            Track the smartest traders, expose scams, and rank the most trusted influencers. Crypto transparency starts here!
                        </p>

                    </div>

                    <div  >

                        <img
                            src={Component}
                            alt={Component}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>


            {/* Social Media Icons */}
            <InfluencerProfile />

            <TrustScoreBreakdown />

        </div>
    );
}
