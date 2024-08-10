"use client";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import image1 from "@/app/assets/carouselItems/finance.jpeg";
// import image5 from "../app/assets/carouselitems/trouser1.jpeg";
import image6 from "@/app/assets/carouselItems/finance2.jpeg";
import image5 from "@/app/assets/carouselItems/consultation.jpeg";
import image4 from "@/app/assets/carouselItems/consultation2.jpg";
import image3 from "@/app/assets/carouselItems/consultation3.jpeg";
import image2 from "@/app/assets/carouselItems/consultation4.jpeg";

// import image7 from "../app/assets/carouselitems/shoe7.jpg";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images for the carousel
const images = [
  {
    url: image5,
    statement: "Statement 1",
    content: "Shoes Fashion",
    highlight: "Come and Grab it",
    main: "brand new shoes",
    shop: "Get It",
  },
  // { url: image5, statement: 'Statement 2' },
  {
    url: image4,
    statement: "Statement 3",
    content: "Best Sneakers",
    highlight: "Make a move and buy it",
    main: "we make it happen",
    shop: "Grab Now",
  },
  {
    url: image3,
    statement: "Statement 3",
    content: "Sports Shoes",
    highlight: "Home for your shoes",
    main: "live the life",
    shop: "Shop Now",
  },
  {
    url: image2,
    statement: "Statement 3",
    content: "Sports Shoes",
    highlight: "Home for your shoes",
    main: "live the life",
    shop: "Shop Now",
  },
];

const CarouselContainer = styled.div`
  .slick-slider {
    width: 100vw;
    height: 80vh;
    margin: 0 auto;
    border-radius: 0;
    position: relative;
  }

  .slick-list {
    height: 100%;
  }

  .slick-slide {
    position: relative;
    border-radius: 0;
    overflow: hidden;
    height: 100%;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 4s ease;
  }

  .slick-active img {
    transform: scale(1.1);
  }

  /* Keyframe animations */
  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-50px) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .slick-current .carousel-statement .content {
    animation: slideInFromTop 2s ease forwards;
    animation-delay: 0s;
  }

  .slick-current .carousel-statement .heading1 {
    animation: slideInFromTop 2s ease forwards;
    animation-delay: 0.5s;
  }

  .slick-current .carousel-statement .heading2 {
    animation: slideInFromBottom 2s ease forwards;
    animation-delay: 1s;
  }

  .slick-current .carousel-statement .shop {
    animation: slideInFromBottom 2s ease forwards;
    animation-delay: 1.5s;
  }

  .carousel-statement {
    position: absolute;
    top: 0;
    // left: 2em;
    width: 100%;
    height: 100%;
    // max-width: 600px;
    color: #ffffff;
    // background: radial-gradient(
    //   circle,
    //   rgba(192, 192, 192, 1),
    //   rgba(192, 192, 192, 0)
    // );
    background: rgba(0, 0, 0, 0.7);
    padding: 2em 3em;
    // border-radius: 20px;
    // font-size: 14px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 678px) {
    .carousel-statement {
      top: 5%;
      width: 90%;
      font-size: 12px;
    }
  }

  .content {
    background-color: #0a021c;
    color: #fff;
    border-radius: 4px;
    font-weight: semi-bold;
    width: fit-content;
    padding: 4px 8px;
  }

  .heading1 {
    font-size: 18px;
    opacity: 0.7;
    color: #0a021c;
  }

  .heading2 {
    color: #0a021c;
    font-weight: bold;
    text-transform: uppercase;
  }

  .shop {
    color: #fff;
    border-radius: 20px;
    background-color: #ff6b6b;
    width: fit-content;
    padding: 4px 12px;
    font-weight: bold;
  }
`;

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows: true,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.url}
              alt={`Image ${index + 1}`}
              // layout="fill"
              objectFit="cover"
              height={800}
              quality={100}
            />
            <div className="carousel-statement">
              <div className="flex flex-col gap-3">
                <button className="content">{image.content}</button>
                <h3 className="heading1">{image.highlight}</h3>
                <h2 className="heading2">{image.main}</h2>
                <button className="shop">{image.shop}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default CustomCarousel;
