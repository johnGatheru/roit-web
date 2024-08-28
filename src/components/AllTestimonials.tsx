"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./Testimonials";
import profile1 from "@/app/assets/images/profile1.jpeg";
import profile2 from "@/app/assets/images/profile2.jpeg";

import profile3 from "@/app/assets/images/profile3.jpeg";
import profile4 from "@/app/assets/images/profile3.jpeg";

const testimonials = [
  {
    id: 1,
    title: "Design Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: profile1,
    author: "Hilix Darwin Kalia",
    role: "Founder, Coxer IT",
  },
  {
    id: 1,
    title: "Design Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: profile2,
    author: "Hilix Darwin Kalia",
    role: "Founder, Coxer IT",
  },
  {
    id: 1,
    title: "Design Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: profile3,
    author: "Hilix Darwin Kalia",
    role: "Founder, Coxer IT",
  },
  {
    id: 1,
    title: "Design Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: profile4,
    author: "Hilix Darwin Kalia",
    role: "Founder, Coxer IT",
  },
  {
    id: 1,
    title: "Design Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: profile2,
    author: "Hilix Darwin Kalia",
    role: "Founder, Coxer IT",
  },
  {
    id: 1,
    title: "Design Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: profile4,
    author: "Hilix Darwin Kalia",
    role: "Founder, Coxer IT",
  },
  // other testimonials...
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
    }, 5000); // Change 3000 to the desired interval in milliseconds (e.g., 3000 ms = 3 seconds)

    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <div className="overflow-hidden mt-[10%] mb-4 mx-8" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial) => (
          <div className="flex-[0_0_33.3333%] p-4" key={testimonial.id}>
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
    </div>
  );
};

export default TestimonialCarousel;
