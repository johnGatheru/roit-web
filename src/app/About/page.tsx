import React from "react";
import Image from "next/image";
import image1 from "@/app/assets/images/21517039_22.jpg";
import image2 from "@/app/assets/images/manmoney.jpg";
import image3 from "@/app/assets/images/money.jpg";
import VisionGoalMission from "@/components/Vission";

const Index = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="flex-1 flex-col flex p-10 items-center justify-center ">
          <h3 className="font-bold text-orange-600 text-6xl">
            We are with you all the way to success
          </h3>
          <p className="text-lg mt-4">
            We aim to be a constant source of support, helping you achieve your
            goals every step of the way.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bounce-zoom">
            <Image alt="coming" src={image2} height={500} />
          </div>
        </div>
      </div>
      <VisionGoalMission />
    </div>
  );
};

export default Index;
