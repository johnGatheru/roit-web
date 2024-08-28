import React from "react";
import SatisfiedCustomers from "./Counters";
import Image from "next/image";
import image1 from "@/app/assets/images/21517039_22-removebg-preview.png";

const Achievements = () => {
  return (
    <div>
      <div className="flex w-full py-6">
        <div className="flex-1 mx-10">
          <h4 className="text-yellow-500 font-bold my-4 text-2xl ">
            Our Achievements
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            iusto consectetur commodi doloribus neque officia corporis quibusdam
            tenetur dolorum facilis. Ut voluptate eligendi odio magnam! Quam
            incidunt eos animi aperiam optio distinctio soluta asperiores ad
            omnis natus saepe ullam nostrum, repudiandae dignissimos voluptas?
            Quasi odio dolor impedit animi, dolorum maiores non modi in eveniet
            eaque tenetur nulla et sint facilis!
          </p>
          <p className="mt-10">
            Ut voluptate eligendi odio magnam! Quam incidunt eos animi aperiam
            optio distinctio soluta asperiores ad omnis natus saepe ullam
            nostrum, repudiandae dignissimos voluptas? Quasi odio dolor impedit
            animi, dolorum maiores non modi in eveniet eaque tenetur nulla et
            sint facilis!
          </p>
        </div>
        <div className="flex-1">
          <Image src={image1} alt="comming oon" width={500} />
        </div>
      </div>
      <div className="">
        <SatisfiedCustomers />
      </div>
    </div>
  );
};

export default Achievements;
