import Image from "next/image";
import Testing from "@/components/testing";
import CustomCarousel from "@/components/CustomCarosel";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Cards from "@/components/Team";
import TestimonialCarousel from "@/components/AllTestimonials";
import Navbar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      {/* <Testing /> */}
      <CustomCarousel />
      <AboutUs />
      <Services />
      <Achievements />
      <Cards />
      <TestimonialCarousel />
    </div>
  );
}
