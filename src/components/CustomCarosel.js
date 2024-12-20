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
import next from "@/app/assets/images/next_fz6vybyzqai5_64.png"
import prev from "@/app/assets/images/previous_d9ibfsfrf9nw_64.png"
import image6 from "@/app/assets/carouselItems/finance2.jpeg";

// Sample images for the carousel
const images = [
  {
    url: image5,
    statement: "Strategic Growth",
    content: "Business Consulting",
    highlight: "Unlock Your Business Potential",
    main: "Ensure your business maximizes growth with expert strategic insights and custom solutions for sustained success.",
    shop: "Learn More",
  },
  {
    url: image4,
    statement: "Innovative Solutions",
    content: "Financial Advisory",
    highlight: "Take Control of Your Finances",
    main: "Tailored financial advice to help you manage resources effectively, ensuring long-term stability and growth.",
    shop: "Get Started",
  },
  {
    url: image3,
    statement: "Empowering Leadership",
    content: "Leadership Development",
    highlight: "Build Strong Leaders",
    main: "Comprehensive leadership coaching to foster strong decision-makers and visionary leaders in your organization.",
    shop: "Discover More",
  },
  {
    url: image2,
    statement: "Efficiency Redefined",
    content: "Operations Optimization",
    highlight: "Streamline Your Processes",
    main: "Achieve operational excellence by optimizing processes, reducing costs, and increasing productivity.",
    shop: "Optimize Now",
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
  width: 100vw;
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
    background: rgba(0, 0, 0, 0.4);
    padding: 2em 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .main-content {
    width: 60%;
    margin-left: 5%;
  }

  .heading1 {
    font-size: 3.2em;
    font-weight: bold;
    opacity: 0.7;
    color: yellow;
    animation: ${slideInFromTopZoom} 3s ease forwards;
  }

  .heading2 {
    color: white;
    font-weight: bold;
    margin-top: 2em;
    font-size: 24px;
    animation: ${slideInFromTopZoom} 3s ease forwards;
  }

  .shop-container {
    gap: 2em;
    margin-top: 1em;
    animation: ${slideInFromBottomZoom} 3s ease forwards;
  }

  .shop {
    color: #000000;
    border-radius: 15px;
    background-color: gold;
    padding: 0.8em 2em;
    font-weight: bold;
    border: none;
  }

  @media (max-width: 1024px) {
    .heading1 {
      font-size: 3em;
    }

    .heading2 {
      font-size: 20px;
    }

    .main-content {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    .heading1 {
      font-size: 2em;
    }

    .heading2 {
      font-size: 18px;
    }

    .carousel-statement {
      padding: 1.5em;
    }

    .main-content {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    .heading1 {
      font-size: 1.5em;
    }

    .heading2 {
      font-size: 16px;
    }

    .shop-container {
      gap: 1em;
    }

    .shop {
      padding: 0.5em 1.5em;
    }

    .main-content {
      width: 90%;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
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
                style={{ width: "100%", height: "100%" }}
              />
              <div className="carousel-statement">
                <div className="main-content">
                  <h3 className="heading1">{image.highlight}</h3>
                  <h2 className="heading2">{image.main}</h2>
                  <div className="shop-container gap-4 flex">
                    {/* <button className="shop">{image.shop}</button> */}
                    <button className="shop ">Explore Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={scrollPrev} style={{ left: "20px", borderRadius:"50px"}}>
        <Image src={prev} width={20}/>
      </Button>
      <Button onClick={scrollNext} style={{ right: "20px", borderRadius:"50px", backgroundColor:"none"  }}>
        <Image src={next} width={20}/>
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
