import React from "react";
import Image from "next/image";
import aboutImage from "@/app/assets/carouselItems/consultation2.jpg";
import aboutImage2 from "@/app/assets/carouselItems/consultation3.jpeg";

const AboutUs = () => {
  return (
    <div>
      <div className="flex w-100 p-4 pt-8 justify-between bg-[#202020]">
        <div className="bg-red flex-1 relative w-full h-1/2 ">
          {/* <img src="../assets/consultation.jpeg" alt="" /> */}
          <Image
            alt="waiting"
            src={aboutImage}
            width={500}
            height={300}
            className="rounded"
          />
          <Image
            alt="waiting"
            src={aboutImage2}
            width={500}
            height={300}
            className="absolute z-30 bottom-[-2em] rounded-lg right-0"
          />
        </div>
        <div className=" flex-1 ml-5">
          <div className="text-white">
            <h2 className="underline-title mb-8">
              <span className="underline-name">About</span> Company
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, libero. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, eum ad? Qui sapiente totam unde laboriosam
              ut optio distinctio blanditiis quae dolores! Debitis officia
              accusantium consequatur at necessitatibus eaque quisquam corrupti
              modi, repellat harum autem omnis laborum, voluptatum vero quae
              porro reprehenderit? Unde laudantium iste distinctio. Nulla
              numquam architecto adipisci!{" "}
            </p>
            <p className="mt-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              consectetur repellendus quibusdam consequuntur quam magnam aliquid
              eligendi pariatur asperiores quod?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
