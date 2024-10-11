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
import contactUsImage from "@/app/assets/images/contact_0dy6odr8qeyz_64.png";
import locationIcon from "@/app/assets/images/location-pin.gif";
import emailIcon from "@/app/assets/images/mail-delivery.gif";
import phoneIcon from "@/app/assets/images/incoming-call.gif";

const { Title, Text } = Typography;

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
      <div className="relative w-full h-[500px]">
        <Image
          src={contactUsImage}
          alt="Contact Us Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
          <Slide direction="down" triggerOnce>
            <h1 className="text-5xl font-bold mb-4 text-amber-300">
              Contact Us
            </h1>
            <Text className="text-2xl mb-4 text-white">
              We'd love to hear from you!
            </Text>
          </Slide>
        </div>
      </div>

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
            <DynamicMapContainer
              center={[37.7749, -122.4194]}
              zoom={12}
              style={{ height: "400px", width: "100%" }}
            >
              <DynamicTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <DynamicMarker position={[37.7749, -122.4194]}>
                <DynamicPopup>San Francisco, CA</DynamicPopup>
              </DynamicMarker>
            </DynamicMapContainer>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ContactUsPage;
