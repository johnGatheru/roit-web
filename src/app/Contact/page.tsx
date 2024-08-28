"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
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
import contactUsImage from "@/app/assets/images/contact_0dy6odr8qeyz_64.png"; // Replace with your image path
import locationIcon from "@/app/assets/images/contact_0dy6odr8qeyz_64.png"; // Replace with your icon path
import emailIcon from "@/app/assets/images/contact_0dy6odr8qeyz_64.png"; // Replace with your icon path
import phoneIcon from "@/app/assets/images/contact_0dy6odr8qeyz_64.png"; // Replace with your icon path

const { Title, Text } = Typography;

const ContactUsPage = () => {
  const handleFormSubmit = (values: any) => {
    // Handle form submission logic here
    notification.success({
      message: "Message Sent",
      description:
        "Thank you for getting in touch. We will respond to you shortly.",
    });
    // Reset form or close modal if needed
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
              <Image src={locationIcon} alt="Location" width={50} height={50} />
              <Title level={4}>Our Location</Title>
              <Text>1234 Main Street, Anytown, kenya</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="text-center shadow-lg" bordered={false}>
              <Image src={emailIcon} alt="Email" width={50} height={50} />
              <Title level={4}>Email Us</Title>
              <Text>support@example.com</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="text-center shadow-lg" bordered={false}>
              <Image src={phoneIcon} alt="Phone" width={50} height={50} />
              <Title level={4}>Call Us</Title>
              <Text>07484-7890</Text>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto my-12 px-4">
        <Slide direction="up" triggerOnce>
          <Title className="text-3xl font-bold mb-6 text-center">
            Get in Touch
          </Title>
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
                type="primary"
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
          <Title className="text-3xl font-bold mb-6 text-center">
            Find Us on the Map
          </Title>
          <div className="map-container">
            <MapContainer
              center={[37.7749, -122.4194]} // Latitude and Longitude
              zoom={12}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[37.7749, -122.4194]}>
                <Popup>San Francisco, CA</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ContactUsPage;
