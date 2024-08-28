import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import profile4 from "@/app/assets/images/profile3.jpeg";
import Image from "next/image";

type Testimonial = {
  id: number;
  title: string;
  description: string;
  image: any;
  author: string;
  role: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="">
      <div
        className=" rounded-lg shadow-lg border bg-slate-100 p-8 h-auto relative"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 90%, 17% 90%, 17% 100%, 9% 91%, 0 91%)",
        }}
      >
        {/* Centered Star Background */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 h-48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>

        {/* Quote Icon */}
        <div className="absolute top-6 left-6">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white">
            <FaQuoteLeft className="text-xl" />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="pt-10">
          <h3 className="text-xl font-bold text-gray-800">
            {testimonial.title}
          </h3>
          <p className="text-gray-600 mt-3">{testimonial.description}</p>
        </div>
      </div>
      {/* Author Information */}
      <div className="flex items-center mt-12 space-x-4">
        <div className="rounded-full bg-gray-300 w-12 h-12 overflow-hidden justify-center items-center">
          <Image
            src={profile4}
            alt={testimonial.author}
            height={80}
            width={100}
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{testimonial.author}</h4>
          <p className="text-amber-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
