"use client";
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import image2 from "@/app/assets/images/customer_rv6lw3vuvkaw_64.png";

const SatisfiedCustomers = () => {
  return (
    <div className="bg-black bg-opacity-65 py-16 justify-center items-center gap-14 flex">
      <div className="flex">
        <Image src={image2} width={50} alt="coming soon" />
        <div className="text-center">
          <CountUp
            start={0}
            end={5000}
            duration={3}
            separator=","
            className="text-5xl font-bold text-yellow-400"
          />
          <h2 className="text-lg font-bold text-white">Satisfied Customers</h2>
        </div>
      </div>
      <div className="flex">
        <Image src={image2} width={50} alt="coming soon" />
        <div className="text-center">
          <CountUp
            start={0}
            end={5000}
            duration={3}
            separator=","
            className="text-5xl font-bold text-yellow-400"
          />
          <h2 className="text-lg font-bold text-white">Satisfied Customers</h2>
        </div>
      </div>
      <div className="flex">
        <Image src={image2} width={50} alt="coming soon" />
        <div className="text-center">
          <CountUp
            start={0}
            end={5000}
            duration={3}
            separator=","
            className="text-5xl font-bold text-yellow-400"
          />
          <h2 className="text-lg font-bold text-white">Satisfied Customers</h2>
        </div>
      </div>
      <div className="flex">
        <Image src={image2} width={50} alt="coming soon" />
        <div className="text-center">
          <CountUp
            start={0}
            end={5000}
            duration={3}
            separator=","
            className="text-5xl font-bold text-yellow-400"
          />
          <h2 className="text-lg font-bold text-white">Satisfied Customers</h2>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedCustomers;
