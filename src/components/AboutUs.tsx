"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal"; // Import the Fade animation
import aboutImage from "@/app/assets/carouselItems/consultation2.jpg";
import aboutImage2 from "@/app/assets/carouselItems/consultation3.jpeg";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full p-4 pt-8 justify-between bg-[#202020]">
        {/* Left side: Images with animation */}
        <div className="flex-1 relative w-full h-auto md:w-1/2">
          <Fade direction="left" duration={800}>
            <Image
              alt="About Image 1"
              src={aboutImage}
              width={500}
              height={300}
              className="rounded"
            />
            <Image
              alt="About Image 2"
              src={aboutImage2}
              width={500}
              height={300}
              className="absolute z-30 bottom-[-4em] rounded-lg right-0 hidden md:block"
            />
          </Fade>
        </div>

        {/* Right side: Text content with animation */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-5">
          <Fade direction="right" duration={800}>
            <div className="text-white">
              <h2 className="underline-title mb-8 text-2xl md:text-3xl">
                <span className="underline-name">About</span> Company
              </h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, libero. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Modi, eum ad? Qui sapiente totam unde
                laboriosam ut optio distinctio blanditiis quae dolores! Debitis
                officia accusantium consequatur at necessitatibus eaque quisquam
                corrupti modi, repellat harum autem omnis laborum, voluptatum
                vero quae porro reprehenderit? Unde laudantium iste distinctio.
                Nulla numquam architecto adipisci!
              </p>
              <p className="mt-7 text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam consectetur repellendus quibusdam consequuntur quam
                magnam aliquid eligendi pariatur asperiores quod?
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
