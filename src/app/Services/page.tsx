"use client";
import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Divider,
  Input,
  Select,
} from "antd";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import servicesImage from "@/app/assets/images/manmoney.jpg"; // Replace with your image path

const { Title, Text } = Typography;
const { Option } = Select;
const caseStudies = [
  {
    title: "Successful Business Transformation",
    description:
      "We helped a local business transform its operations, leading to a 40% increase in revenue over six months. Our strategic consultation and implementation of new processes were key to this success.",
    imageUrl: "/path/to/case_study1.jpg",
    imageWidth: 400,
    imageHeight: 200,
  },
  {
    title: "Financial Restructuring Success",
    description:
      "Our financial experts assisted a startup in restructuring its finances, improving cash flow management and securing additional funding. The startup saw a 50% improvement in financial stability.",
    imageUrl: "/path/to/case_study2.jpg",
    imageWidth: 400,
    imageHeight: 200,
  },
  {
    title: "Policy Influence for Non-Profit",
    description:
      "We partnered with a non-profit organization to influence policy changes beneficial to their cause. Our advocacy efforts resulted in new legislation that supports their mission.",
    imageUrl: "/path/to/case_study3.jpg",
    imageWidth: 400,
    imageHeight: 200,
  },
  {
    title: "Legal Victory for Client",
    description:
      "Our legal advocacy team secured a landmark victory for a client in a high-stakes legal battle. The case outcome was favorable and set a precedent in the legal field.",
    imageUrl: "/path/to/case_study4.jpg",
    imageWidth: 400,
    imageHeight: 200,
  },
];

const allServices = [
  {
    category: "Consultation",
    title: "Business Consultation",
    description: "Expert advice to help you grow your business.",
    imageUrl: "/path/to/service_image1.jpg", // Replace with actual image path
    imageWidth: 400,
    imageHeight: 200,
  },
  {
    category: "Consultation",
    title: "Financial Consultation",
    description: "Professional financial advice tailored to your needs.",
    imageUrl: "/path/to/service_image2.jpg", // Replace with actual image path
    imageWidth: 400,
    imageHeight: 200,
  },
  {
    category: "Advocacy",
    title: "Legal Advocacy",
    description: "Advocacy services to support your legal needs.",
    imageUrl: "/path/to/service_image3.jpg", // Replace with actual image path
    imageWidth: 400,
    imageHeight: 200,
  },
  {
    category: "Advocacy",
    title: "Policy Advocacy",
    description: "Influencing policy changes to benefit your organization.",
    imageUrl: "/path/to/service_image4.jpg", // Replace with actual image path
    imageWidth: 400,
    imageHeight: 200,
  },
  // Add more services as needed
];

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const filteredServices =
    selectedCategory === "All"
      ? allServices
      : allServices.filter((service) => service.category === selectedCategory);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="image-container">
        {/* <Image
          src={servicesImage}
          alt="Case Study"
          layout="fill" // Cover the container
          objectFit="cover" // Ensure image covers container
          quality={100} // Maintain clarity
          priority
        /> */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
          <Slide direction="down" triggerOnce>
            <h2 className="text-5xl font-bold mb-4 text-amber-300">
              Our Services
            </h2>
            <Text className="text-2xl mb-4 text-white">
              Professional consultations and advocacy services tailored to your
              needs.
            </Text>
          </Slide>
        </div>
      </div>

      {/* Interactive Service Finder */}
      <div className="container mx-auto my-12 px-4">
        <Slide direction="up" triggerOnce>
          <h1 className="text-3xl font-bold mb-6 text-center text-amber-400">
            Find Your Service
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <Input
              placeholder="Search services..."
              onChange={(e) => {
                // Handle search logic here if needed
              }}
              className="w-full md:w-1/2 mb-4 md:mb-0"
            />
            <Select
              defaultValue="All"
              onChange={handleCategoryChange}
              className="w-full md:w-1/4"
            >
              <Option value="All">All Categories</Option>
              <Option value="Consultation">Consultation</Option>
              <Option value="Advocacy">Advocacy</Option>
              {/* Add more categories if needed */}
            </Select>
          </div>

          <Row gutter={16}>
            {filteredServices.map((service, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  title={service.title}
                  bordered={false}
                  cover={
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={service.imageWidth} // Provide width
                      height={service.imageHeight} // Provide height
                      style={{ objectFit: "cover" }}
                    />
                  }
                >
                  <Text>{service.description}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Slide>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <Slide direction="up" triggerOnce>
            <Title className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </Title>
            <Text className="text-lg mb-8">
              Contact us today to schedule a consultation or learn more about
              our advocacy services.
            </Text>
            <Button
              type="primary"
              size="large"
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              Get in Touch
            </Button>
          </Slide>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="container mx-auto my-12 px-4">
        <Slide direction="up" triggerOnce>
          <Title className="text-3xl font-bold mb-6 text-center">
            Case Studies
          </Title>
          <Divider />
          <Row gutter={16}>
            {caseStudies.map((caseStudy: any, index: any) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  cover={
                    <Image
                      alt={caseStudy.title}
                      src={caseStudy.imageUrl}
                      width={caseStudy.imageWidth} // Provide width
                      height={caseStudy.imageHeight} // Provide height
                      style={{ objectFit: "cover" }}
                    />
                  }
                  className="shadow-lg"
                >
                  <Title level={4}>{caseStudy.title}</Title>
                  <Text>{caseStudy.description}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Slide>
      </div>
    </div>
  );
};

export default ServicesPage;
