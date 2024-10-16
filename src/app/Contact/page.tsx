"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  Form,
  Input,
  Button,
  notification,
  Typography,
  Card,
  Row,
  Col,
} from "antd";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import styled from "@emotion/styled";
import contactUsImage from "@/app/assets/images/contactus.png";
import locationIcon from "@/app/assets/images/location-pin.gif";
import emailIcon from "@/app/assets/images/mail-delivery.gif";
import phoneIcon from "@/app/assets/images/incoming-call.gif";

const { Title, Text } = Typography;
const ContactSection = styled.div`
  display: flex;
  background-color: #f5f5f5;
  justify-content: space-between;
  align-items: stretch;
  padding: 40px;
  width: 100%;
  box-sizing: border-box;

  & > div {
    flex: 1;
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Reverse stacking order on small screens */
    & > div {
      width: 100%;
      margin-bottom: 20px;
    }
    padding: 2px;
    h4 {
      font-size: 2em;
    }
  }
`;

const TextContent = styled.div`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0px 15em 15em 0px;
  padding: 30px;
  height: 80vh;
  background-color: white;
  margin-top: 2em;

  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #facc15;
  }

  p {
    font-size: 18px;
    color: #757575;
    margin: 16px 0;
  }

  @media (max-width: 768px) {
    border-radius: 0; /* Remove border radius on small screens */
    height: auto; /* Let it grow based on content */
    margin-top: 0; /* Remove margin on top */
  }
`;

const ContactImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      width: 100%; /* Make image take full width */
      height: auto; /* Ensure it maintains aspect ratio */
    }
  }
`;

// Dynamically import react-leaflet components and disable SSR
const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const DynamicTileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const DynamicMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const DynamicPopup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const ContactUsPage = () => {
  const handleFormSubmit = (values: any) => {
    notification.success({
      message: "Message Sent",
      description:
        "Thank you for getting in touch. We will respond to you shortly.",
    });
  };

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <ContactSection>
        <TextContent>
          <h1 className="mt-7">Contact us</h1>
          <h4 className="text-4xl font-bold mt-6">We are here to help you</h4>
          <p>
            At our consultancy, we are dedicated to guiding businesses toward
            sustainable success. Whether you're looking for expert advice,
            strategic solutions, or personalized support, we’re here to assist.
            Reach out to our team, and together, we’ll navigate the complexities
            of your industry, helping you achieve your goals with confidence.
            Let us be your trusted partner in growth and innovation.
          </p>
        </TextContent>
        <ContactImage>
          <Image
            src={contactUsImage}
            alt="Contact illustration"
            width={600}
            height={200}
            objectFit="cover"
          />
        </ContactImage>
      </ContactSection>

      {/* Contact Information */}
      <div className="container mx-auto my-12 px-4">
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Card className="text-center shadow-lg" bordered={false}>
              <Image
                src={locationIcon}
                alt="Location"
                width={100}
                height={100}
              />
              <Title level={3}>Our Location</Title>
              <Text className="font-bold">
                1234 Main Street, Anytown, Kenya
              </Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="text-center shadow-lg" bordered={false}>
              <Image src={emailIcon} alt="Email" width={100} height={100} />
              <Title level={3}>Email Us</Title>
              <Text className="font-bold">support@example.com</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="text-center shadow-lg" bordered={false}>
              <Image src={phoneIcon} alt="Phone" width={100} height={100} />
              <Title level={3}>Call Us</Title>
              <Text className="font-bold">07484-7890</Text>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto my-12 px-4">
        <Slide direction="up" triggerOnce>
          <div className="flex w-full items-center justify-center">
            <h3 className="text-3xl font-bold mb-6 text-center underline-name text-yellow-400">
              Get in Touch
            </h3>
          </div>
          <Form
            layout="vertical"
            onFinish={handleFormSubmit}
            className="contact-form"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-amber-400 hover:bg-amber-500 rounded-xl px-16 py-6 text-black font-bold"
              >
                Send
              </Button>
            </Form.Item>
          </Form>
        </Slide>
      </div>

      {/* Location Map */}
      <div className="container mx-auto my-12 px-4">
        <Slide direction="up" triggerOnce>
          <div className="flex justify-center w-full">
            <h3 className="text-3xl font-bold mb-6 text-center underline-name text-yellow-400">
              Find Us on the Map
            </h3>
          </div>
          <div className="map-container">
            {/* <DynamicMapContainer
              center={[37.7749, -122.4194]}
              zoom={12}
              style={{ height: "400px", width: "100%" }}
            >
              <DynamicTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <DynamicMarker position={[37.7749, -122.4194]}>
                <DynamicPopup>San Francisco, CA</DynamicPopup>
              </DynamicMarker>
            </DynamicMapContainer> */}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ContactUsPage;
