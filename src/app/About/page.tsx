import React from "react";
import Image from "next/image";
import image2 from "@/app/assets/images/manmoney.jpg";
import VisionGoalMission from "@/components/Vission";

const Index = () => {
  return (
    <div>
      {/* Container for main content */}
      <div className="flex flex-col-reverse md:flex-row w-full">
        {/* Left section */}
        <div className="flex-1 flex-col flex p-10 items-center justify-center">
          <h3 className="font-bold text-orange-600 text-4xl md:text-6xl text-center md:text-left">
            We are with you all the way to success
          </h3>
          <p className="text-base md:text-lg mt-4 text-center md:text-left">
            We aim to be a constant source of support, helping you achieve your
            goals every step of the way.
          </p>
        </div>

        {/* Right section with image */}
        <div className="flex-1 flex justify-center items-center p-4">
          <div className="bounce-zoom flex justify-center items-center">
            <Image
              alt="coming"
              src={image2}
              height={500}
              className="w-[70%] sm:w-[40%] md:w-[30%] lg:w-[70%] max-w-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Vision, Goal, Mission Component */}
      <VisionGoalMission />
    </div>
  );
};

export default Index;
