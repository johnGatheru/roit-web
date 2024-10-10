"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal"; // Import animation from react-awesome-reveal
import profile1 from "@/app/assets/images/profile1.jpeg";
import profile2 from "@/app/assets/images/profile2.jpeg";
import profile3 from "@/app/assets/images/profile3.jpeg";
import profile4 from "@/app/assets/images/profile4.jpeg";

const Cards = () => {
  const cards = [
    {
      id: 1,
      imageSrc: profile1,
      name: "Peris Chris",
      title: "CEO",
      description:
        "This is a brief description for card 1. It provides insight into the card’s content.",
    },
    {
      id: 2,
      imageSrc: profile2,
      name: "Peter Korir",
      title: "Founder",
      description:
        "This is a brief description for card 2. It provides insight into the card’s content.",
    },
    {
      id: 3,
      imageSrc: profile3,
      name: "John Walker",
      title: "Finance Advisor",
      description:
        "This is a brief description for card 3. It provides insight into the card’s content.",
    },
    {
      id: 4,
      imageSrc: profile4,
      name: "Elijah Smith",
      title: "Lawyer",
      description:
        "This is a brief description for card 4. It provides insight into the card’s content.",
    },
  ];

  return (
    <div>
      <div className="flex w-full items-center justify-center">
        <h2 className="text-3xl font-bold my-8 underline-name text-yellow-500">
          The Team
        </h2>
      </div>
      <div className="flex w-full items-center justify-center font-bold px-4">
        <p>The team behind the success of riot company</p>
      </div>

      {/* Updated container styles */}
      <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 ">
        {cards.map((card) => (
          <Fade key={card.id} direction="up" duration={800}>
            <div className="relative bg-white rounded-lg shadow-lg overflow-visible group mb-28 sm:mb-8">
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="rounded object-cover"
                />
              </div>

              {/* Floating Content Div */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[90%] w-[90%] bg-white rounded-lg shadow-md p-4">
                <h3 className="text-center text-xl font-semibold text-orange-400">
                  {card.name}
                </h3>
                <h3 className="text-center text-lg font-semibold underline text-yellow-500">
                  {card.title}
                </h3>
                <p className="text-center text-gray-600">{card.description}</p>
              </div>

              {/* Floating Social Media Div */}
              <div className="absolute top-0 right-0 w-12 bg-black bg-opacity-75 rounded-bl-lg transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                <div className="flex flex-col items-center p-2 space-y-3 text-white">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaTelegramPlane />
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Cards;
