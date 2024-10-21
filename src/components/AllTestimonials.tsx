"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./Testimonials";
import profile1 from "@/app/assets/images/profile1.jpeg";
import profile2 from "@/app/assets/images/profile2.jpeg";
import profile3 from "@/app/assets/images/profile3.jpeg";
import profile4 from "@/app/assets/images/profile4.jpeg";

const testimonials = [
  {
    id: 1,
    title: "Business Transformation",
    description:
      "The consultancy team helped reshape our business strategy, leading to a 30% increase in revenue within months. Their personalized approach was just what we needed.",
    image: profile1,
    author: "Emma Trenton",
    role: "CEO, Horizon Corp",
  },
  {
    id: 2,
    title: "Outstanding Client Service",
    description:
      "The team’s attention to detail and commitment to meeting deadlines were impressive. They provided us with clear solutions for our market expansion, making a complex process seamless.",
    image: profile2,
    author: "David King",
    role: "Founder, Global Ventures",
  },
  {
    id: 3,
    title: "Efficiency Boost",
    description:
      "Their expert insights helped us streamline our operations, leading to a 40% boost in productivity. The process was easy to follow, and the results were immediate.",
    image: profile3,
    author: "Sophia Kimani",
    role: "Ops Manager, AgriPro",
  },
  {
    id: 4,
    title: "Market Research Expertise",
    description:
      "They delivered excellent market insights, enabling us to make informed decisions on our new product launch. Their analysis was thorough and highly actionable.",
    image: profile4,
    author: "Michael Ochieng",
    role: "Biz Dev, Envision",
  },
  {
    id: 5,
    title: "Risk Management Guidance",
    description:
      "The consultancy provided clear, actionable advice on risk management, helping us avoid costly mistakes. Their approach was practical and results-driven.",
    image: profile2,
    author: "Nancy Mwangi",
    role: "Project Lead, NexGen",
  },
  {
    id: 6,
    title: "Sustainable Growth Solutions",
    description:
      "Thanks to their tailored growth strategies, we’ve seen consistent growth while maintaining sustainability. Their expertise has been invaluable to our success.",
    image: profile4,
    author: "Tom Benson",
    role: "MD, EcoGrow",
  },
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 5000); // Change 5000 to the desired interval in milliseconds

    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <div className="overflow-hidden mt-[10%] mb-4 mx-8" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial) => (
          <div
            className="flex-[0_0_33.3333%] p-4 testimonial-card"
            key={testimonial.id}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-amber-300 text-white py-2 px-4 rounded"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="bg-amber-300 text-white py-2 px-4 rounded"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>

      {/* Media Queries for responsive design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .testimonial-card {
            flex: 0 0 100%; /* Full width for small screens */
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonial-card {
            flex: 0 0 50%; /* Two cards per row for medium screens */
          }
        }

        @media (min-width: 1025px) {
          .testimonial-card {
            flex: 0 0 33.3333%; /* Three cards per row for larger screens */
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
