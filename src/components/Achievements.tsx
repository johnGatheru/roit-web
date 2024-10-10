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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              iusto consectetur commodi doloribus neque officia corporis
              quibusdam tenetur dolorum facilis. Ut voluptate eligendi odio
              magnam! Quam incidunt eos animi aperiam optio distinctio soluta
              asperiores ad omnis natus saepe ullam nostrum, repudiandae
              dignissimos voluptas? Quasi odio dolor impedit animi, dolorum
              maiores non modi in eveniet eaque tenetur nulla et sint facilis!
            </p>
            <p className="mt-10 text-base md:text-lg">
              Ut voluptate eligendi odio magnam! Quam incidunt eos animi aperiam
              optio distinctio soluta asperiores ad omnis natus saepe ullam
              nostrum, repudiandae dignissimos voluptas? Quasi odio dolor
              impedit animi, dolorum maiores non modi in eveniet eaque tenetur
              nulla et sint facilis!
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
            With our thorough knowledge of all the products we support and the
            industries we serve, we make educated recommendations which help our
            clients realize long-term value from their system. At our company we
            not only help you choose software to address your current business
            needs, we help you use that technology to your competitive
            advantage. And we do it all clearly and with purpose.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Achievements;
