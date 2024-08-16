"use client";
import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import image1 from "@/app/assets/carouselItems/finance.jpeg";
import image2 from "@/app/assets/carouselItems/consultation4.jpeg";
import image3 from "@/app/assets/carouselItems/consultation3.jpeg";
import image4 from "@/app/assets/carouselItems/consultation2.jpg";
import image5 from "@/app/assets/carouselItems/consultation.jpeg";
import image6 from "@/app/assets/carouselItems/finance2.jpeg";

// Sample images for the carousel
const images = [
  {
    url: image5,
    statement: "Statement 1",
    content: "Shoes Fashion",
    highlight: "Come and Grab it",
    main: "Ensure the image covers the entire width and height of the slide using object-fit: cover.",
    shop: "Get It",
  },
  {
    url: image4,
    statement: "Statement 3",
    content: "Best Sneakers",
    highlight: "Make a move and buy it",
    main: "Adjust width and height attributes for the <Image> component to cover the entire slide properly.",
    shop: "Grab Now",
  },
  {
    url: image3,
    statement: "Statement 3",
    content: "Sports Shoes",
    highlight: "Home for your shoes",
    main: "Manage the styles for width and height through the CarouselContainer styled component.",
    shop: "Shop Now",
  },
  {
    url: image2,
    statement: "Statement 3",
    content: "Sports Shoes",
    highlight: "Home for your shoes",
    main: "To ensure the carousel takes up 100% of the viewport height, adjust the carousel container and the .carousel-statement styles.",
    shop: "Shop Now",
  },
];

const zoomOut = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const slideInFromTopZoom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const slideInFromBottomZoom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const CarouselContainer = styled.div`
  width: 98vw;
  height: 90vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  .embla {
    width: 100%;
    height: 100%;
  }

  .embla__container {
    display: flex;
    height: 100%;
  }

  .embla__slide {
    position: relative;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .embla__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .embla__slide.is-selected img {
    animation: ${zoomOut} 3s ease forwards;
  }

  .carousel-statement {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.7);
    padding: 2em 3em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media screen and (max-width: 678px) {
    .carousel-statement {
      font-size: 12px;
    }
  }
  .embla__slide .main-content {
    width: 60%;
    margin-left: 5%;
  }

  .embla__slide.is-selected .heading1 {
    font-size: 48px;
    opacity: 0.7;
    color: yellow;
    animation: ${slideInFromTopZoom} 3s ease forwards;
  }

  .embla__slide.is-selected .heading2 {
    color: white;
    font-weight: bold;
    animation: ${slideInFromTopZoom} 3s ease forwards;
  }

  .embla__slide.is-selected .shop-container {
    gap: 2em;
    margin-top: 1em;
    animation: ${slideInFromBottomZoom} 3s ease forwards;
  }

  .shop {
    color: #fff;
    border-radius: 20px;
    background-color: gold;
    padding: 4px 12px;
    font-weight: bold;
    border: none;
  }
`;

const Button = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1;
`;

const Indicator = styled.button`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "white" : "gray")};
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const CustomCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Set up auto-play functionality
  useEffect(() => {
    const autoPlay = () => {
      if (emblaApi) emblaApi.scrollNext();
    };

    const autoPlayInterval = setInterval(autoPlay, 10000); // 10 seconds interval

    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }

    return () => clearInterval(autoPlayInterval);
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <CarouselContainer>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div
              className={`embla__slide ${
                selectedIndex === index ? "is-selected" : ""
              }`}
              key={index}
            >
              <Image
                src={image.url}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="carousel-statement">
                <div className="main-content">
                  <h3 className="heading1">{image.highlight}</h3>
                  <h2 className="heading2">{image.main}</h2>
                  <div className="shop-container gap-4 flex">
                    <button className="shop">{image.shop}</button>
                    <button className="shop ml-5">Explore</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={scrollPrev} style={{ left: "20px" }}>
        Prev
      </Button>
      <Button onClick={scrollNext} style={{ right: "20px" }}>
        Next
      </Button>
      <IndicatorContainer>
        {images.map((_, index) => (
          <Indicator
            key={index}
            active={selectedIndex === index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};

export default CustomCarousel;
