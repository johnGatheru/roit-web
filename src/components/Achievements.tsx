"use client";
import React from "react";
import SatisfiedCustomers from "./Counters";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal"; // Import the animations
import image1 from "@/app/assets/images/21517039_22-removebg-preview.png";

const Achievements = () => {
  return (
    <div>
      {/* Achievements Section */}
      <div className="flex flex-col md:flex-row w-full py-6">
        {/* Left Side: Text */}
        <div className="flex-1 mx-10 md:mx-5">
          <Fade direction="left" duration={800}>
            <h4 className="text-yellow-500 font-bold my-4 text-2xl mt-0 md:mt-12 underline-name">
              Our Achievements
            </h4>
            <p className="text-base md:text-lg">
              Since our founding in 2023, CN Roit & Associates has rapidly
              become a trusted leader in the audit and financial consultancy
              sector. Our commitment to excellence, innovation, and client
              empowerment has enabled us to deliver exceptional financial
              management and taxation services, helping businesses and
              individuals achieve lasting success.
            </p>
            <p className="mt-10 text-base md:text-lg">
              Our firm is recognized for its professionalism, industry
              expertise, and client-centered approach. We are proud of the
              impact we have made, guiding clients through complex financial
              challenges and empowering them to make informed, strategic
              decisions that drive their growth.
            </p>
          </Fade>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Slide direction="right" duration={800}>
            <Image src={image1} alt="Coming soon" width={500} />
          </Slide>
        </div>
      </div>

      {/* Satisfied Customers Section */}
      <div className="">
        <SatisfiedCustomers />
      </div>

      {/* Clients First Section */}
      <Fade direction="up" duration={800}>
        <div className="flex justify-center flex-col px-8 items-center">
          <h1 className="font-bold text-5xl py-6 text-center">
            Putting clients first!
          </h1>
          <p className="text-center w-full md:w-3/4 text-base md:text-lg">
            With our deep expertise in financial management and a comprehensive
            understanding of our clients' industries, we provide strategic
            insights that drive long-term value. At CN Roit & Associates, we go
            beyond offering standard financial solutions; we empower our clients
            to navigate complex financial landscapes, optimize resources, and
            achieve sustainable growth. Our approach is transparent, purposeful,
            and always centered on your success.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Achievements;
