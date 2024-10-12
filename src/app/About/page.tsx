"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { Slide, Fade } from "react-awesome-reveal";
import image2 from "@/app/assets/images/manmoney.jpg";
import VisionGoalMission from "@/components/Vission";
import successImage from "@/app/assets/images/discipline.jpg";
import consulting from "@/app/assets/images/shakinghand.jpg"; // Add appropriate image paths
import success from "@/app/assets/images/success.jpg"; // Add appropriate image paths

import teamImage from "@/app/assets/images/money.jpg";

const Container = styled.div`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #facc15;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 1px 1px #00000030;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ContentBox = styled.div`
  width: 90%;
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    width: 40%;
    padding: 1rem;
  }
`;

const Highlight = styled.span`
  color: #f97316;
  font-weight: bold;
`;

const CTAButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  background-color: #f97316;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5rem;
  &:hover {
    background-color: #fb923c;
  }
`;

const Index = () => {
  return (
    <div>
      {/* Container for main content */}
      <div className="flex flex-col-reverse md:flex-row w-full">
        {/* Left section */}
        <div className="flex-1 flex-col flex p-10 items-center justify-center mt-10">
          <h3 className="font-bold text-yellow-500 text-3xl md:text-5xl text-center md:text-left">
            We are with you all the way to success
          </h3>
          <p className="text-base md:text-lg mt-4 text-center md:text-left">
            We aim to be a constant source of support, helping you achieve your
            goals every step of the way. Our team is dedicated to understanding
            your unique challenges and providing tailored solutions that drive
            success. Whether you’re navigating business complexities or planning
            for growth, we collaborate with you to deliver strategic insights
            and actionable results. With our expertise and commitment, we
            transform challenges into opportunities, ensuring you have the
            guidance you need to reach your full potential.
          </p>
        </div>

        {/* Right section with image */}
        <div className="flex-1 flex justify-center items-center p-4 mt-20">
          <div className="bounce-zoom flex justify-center items-center">
            <Image
              alt="coming"
              src={image2}
              height={500}
              className="w-[70%] sm:w-[40%] md:w-[30%] lg:w-[70%] max-w-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Vision, Goal, Mission Component */}
      <VisionGoalMission />
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center md:text-left mb-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text section */}
            <div className="md:w-1/2 p-6">
              <Fade triggerOnce>
                <SectionTitle className="underline-name">
                  We're More Than Just Consultants
                </SectionTitle>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  At{" "}
                  <span className="font-bold text-orange-600">
                    Riot Consultancy
                  </span>
                  , we believe in more than providing advice. We believe in
                  transforming challenges into opportunities, and ideas into
                  action. Our mission is simple: to guide you all the way to
                  success with innovative, tailored solutions that deliver
                  results.
                </p>
                <div className="flex justify-start">
                  <Link href="/Contact">
                    <div className="bg-yellow-500 font-bold text-white py-3 px-6 rounded-3xl hover:bg-yellow-400 transition duration-300">
                      Start Your Journey With Us
                    </div>
                  </Link>
                </div>
              </Fade>
            </div>

            {/* Image section */}
            <div className="md:w-1/2 p-6">
              <Image
                src={consulting}
                alt="Success Image"
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="text-center md:text-left my-12">
          <SectionTitle className="underline-name">
            What Sets Us Apart
          </SectionTitle>
          <Slide direction="right" triggerOnce>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Our approach isn't one-size-fits-all. We customize every strategy
              to fit your unique needs, ensuring that we understand your
              business inside and out. Our personalized, hands-on service means
              we’re with you at every step, from ideation to implementation.
            </p>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Our clients trust us for our transparent communication, industry
              expertise, and results-driven mindset. What truly sets us apart is
              our commitment to measurable results and sustainable growth for
              your business.
            </p>
          </Slide>
        </section>

        {/* Approach & Methodology Section */}
        <section className="my-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image section */}
            <div className="md:w-1/2 p-6">
              <Image
                src={teamImage}
                alt="Teamwork Image"
                className="rounded-lg shadow-lg"
                width={500}
                priority
              />
            </div>

            {/* Text section */}
            <div className="md:w-1/2 p-6">
              <Slide direction="left" triggerOnce>
                <SectionTitle className="underline-name md:text-5xl font-bold mb-6">
                  Our Approach & Methodology
                </SectionTitle>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  We believe in collaboration and long-term partnerships. Our
                  process starts with a deep dive into your business,
                  identifying challenges and opportunities. From there, we work
                  closely with you to build customized strategies focused on
                  growth, efficiency, and measurable outcomes.
                </p>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  Every plan we create is designed with long-term success in
                  mind, balancing quick wins with sustainable strategies.
                </p>
              </Slide>
            </div>
          </div>
        </section>

        <Container>
          {/* Guiding Principles Section */}
          <SectionTitle className="underline-name">
            Guiding Principles
          </SectionTitle>
          <SectionContainer>
            <ContentBox>
              <Slide direction="left" triggerOnce>
                <Text>
                  Our decisions are shaped by a deep commitment to{" "}
                  <Highlight>innovation, integrity</Highlight>, and a belief in
                  delivering lasting value to our clients. We operate with
                  transparency and work closely with every client to ensure
                  tailored solutions that make a difference.
                </Text>
                <Text>
                  At the core of our guiding principles is our drive to make a
                  positive impact in everything we do. From strategic planning
                  to execution, our values keep us grounded, ensuring every
                  action is aligned with the long-term success of our clients.
                </Text>
              </Slide>
            </ContentBox>
            <ContentBox>
              <Fade triggerOnce>
                <ImageWrapper>
                  <Image
                    src={successImage}
                    alt="Guiding Principles"
                    width={600}
                    height={400}
                    objectFit="cover"
                  />
                </ImageWrapper>
              </Fade>
            </ContentBox>
          </SectionContainer>

          {/* Success Pillars Section */}
          <SectionTitle className="underline-name">
            Success Pillars
          </SectionTitle>
          <SectionContainer>
            <ContentBox>
              <Fade>
                <ImageWrapper>
                  <Image
                    src={success}
                    alt="Success Pillars"
                    width={800}
                    height={600}
                    objectFit="cover"
                  />
                </ImageWrapper>
              </Fade>
            </ContentBox>
            <ContentBox>
              <Slide direction="right" triggerOnce>
                <Text>
                  Our success pillars are built on{" "}
                  <Highlight>resilience</Highlight>,
                  <Highlight> strategic expertise</Highlight>, and a commitment
                  to
                  <Highlight>excellence</Highlight>. We adapt to changing
                  landscapes and ensure our clients always receive high-quality
                  services.
                </Text>
                <Text>
                  By maintaining a client-first approach, we create personalized
                  strategies that deliver measurable results. From idea
                  conception to implementation, our team is dedicated to driving
                  sustainable growth and success for every project.
                </Text>
              </Slide>
            </ContentBox>
          </SectionContainer>

          {/* <Slide direction="up" triggerOnce>
            <CTAButton>Contact Us for More Information</CTAButton>
          </Slide> */}
        </Container>

        {/* Call to Action Section */}
        <section className="text-center my-12">
          <SectionTitle className="underline-name">
            Let’s Get Started
          </SectionTitle>
          <Fade triggerOnce>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Ready to transform your business? We are here to provide the
              expertise and guidance you need. Get in touch today, and let's
              work together on crafting solutions that make a lasting impact on
              your business.
            </p>
            <div className="w-full flex justify-center">
              <Link href="/Contact">
                <div className=" text-white py-3 px-6 rounded-3xl bg-yellow-500 hover:bg-yellow-400 p-4 btn transition duration-300 font-bold ">
                  Contact Us Now
                </div>
              </Link>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default Index;
