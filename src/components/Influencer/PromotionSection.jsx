import React from "react";
import EllipseFM from "../../assets/img/EllipseFM.png";
import PromotionGroup from "../../assets/img/PromotionGroup.png";
import PromotionTable from "./PromotionTable";
import BackImg from "../../assets/img/BackImg.png";

function PromotionSection() {

  return (
    <div
      style={{
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Center the background image
        // mixBlendMode: "multiply",
      }}
    >
      <div className="flex flex-col items-center justify-center text-white pb-20">
        <div className="container flex items-center justify-center flex-col text-center md:text-left pb-20">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-normal leading-snug">
            Past <span className="customeBlue font-bold">Promotion</span> Table
          </h1>
          <p className="mt-4 font-normal text-center text-base sm:text-lg md:text-2xl mx-auto md:mx-0 max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididun ut labore et dolore magna aliqua. Ut enim ad minim venia
          </p>
        </div>

        <div className="tb container flex items-center justify-center rounded-3xl py-10">

          <div className="p-1 rounded-3xl w-full">
            <div
              className="text-white rounded-3xl dd2 flex flex-col items-centerz justify-between gap-6"
              style={{
                border: "4px solid transparent",
                borderImageSource: "linear-gradient(90deg, #26DDFF, #004DF4)",
                WebkitMaskImage: "radial-gradient(circle, white 100%, transparent 100%)",
              }}
            >
              <PromotionTable />


              <div className="container flex flex-col items-center py-10 w-full">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim venia Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim venia Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididun ut labore et dolore magna aliqua. Ut enim ad minim venia
                </p>
              </div>

              <div className="container space-y-5 pb-10">

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <img className="" src={EllipseFM} alt="EllipseFM" />
                    <span>Jane Doe</span>
                  </div>
                  <p>I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!</p>

                  <div className="flex items-center gap-3 ">
                    <span>5 min ago</span>
                    <span className="customeRed">Challenge</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <img className="" src={EllipseFM} alt="EllipseFM" />
                    <span>Jane Doe</span>
                  </div>
                  <p>I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!</p>

                  <div className="flex items-center gap-3 ">
                    <span>5 min ago</span>
                    <span className="customeRed">Challenge</span>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>


        <div className="container flex items-center justify-center">
          <img src={PromotionGroup} alt="PromotionGroup" />
        </div>

      </div>
    </div>
  );
}

export default PromotionSection;