"use client";
import React, { useState } from "react";
import {
  Input,
  Collapse,
  Select,
  Tooltip,
  Modal,
  Button,
  Form,
  notification,
} from "antd";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import faqImage from "@/app/assets/images/21517039_22.jpg"; // Replace with your image path

const { Panel } = Collapse;
const { Option } = Select;

const faqData = [
  {
    category: "General",
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "Our return policy lasts 30 days bru jdkf wekfkj wefofqk fkndk qfjfnjk fqknfkn",
      },
      {
        question: "How do I track my order?",
        answer: "You can track your order by...",
      },
    ],
  },
  {
    category: "Billing",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, MasterCard...",
      },
      {
        question: "Can I get a refund?",
        answer: "Refunds are processed within 7 business days...",
      },
    ],
  },
  // Add more categories and FAQs as needed
];

const FAQPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle form submission logic here
    notification.success({
      message: "Support Request Sent",
      description:
        "Your message has been sent successfully. Our support team will get back to you soon.",
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (value: any) => {
    setSelectedCategory(value);
  };

  const filteredFaqs = faqData
    .filter((category) =>
      selectedCategory === "All" ? true : category.category === selectedCategory
    )
    .flatMap((category) =>
      category.faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm)
      )
    );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="faq-page" id="top">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src={faqImage}
          alt="FAQ Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
          <Slide direction="down" triggerOnce>
            <h1 className="text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-2xl mb-4">
              Find answers to your questions below
            </p>
          </Slide>
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="container mx-auto my-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <Input.Search
            placeholder="Search FAQs..."
            enterButton
            onChange={handleSearch}
            className="w-full md:w-1/2 mb-4 md:mb-0"
            style={{ borderRadius: "20px", borderColor: "#FFD700" }} // Yellowish border
          />
          <Select
            defaultValue="All"
            onChange={handleCategoryChange}
            className="w-full md:w-1/4"
            style={{ borderRadius: "20px", borderColor: "#FFD700" }} // Yellowish border
          >
            <Option value="All">All Categories</Option>
            {faqData.map((category) => (
              <Option key={category.category} value={category.category}>
                {category.category}
              </Option>
            ))}
          </Select>
        </div>

        {/* FAQ List */}
        <Collapse
          accordion
          className="" // Light yellow background
          expandIconPosition="right"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <Panel
                header={faq.question}
                key={index}
                className="text-yellow-700" // Yellowish text
                style={{ borderRadius: "10px", marginBottom: "10px" }}
                // Ensure full content is visible
                extra={
                  <Tooltip title="Click to expand" color="#FFD700">
                    <span>🔽</span>
                  </Tooltip>
                }
              >
                <p>{faq.answer}</p>
              </Panel>
            ))
          ) : (
            <p>No FAQs match your search or selected category.</p>
          )}
        </Collapse>
      </div>

      {/* Additional Features Section */}
      <div className=" py-12">
        {" "}
        {/* Light yellow background */}
        <div className="container mx-auto px-4 text-center">
          <Slide direction="up" triggerOnce>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Need Further Assistance?
            </h2>
            <p className="text-lg mb-8">
              If you couldn't find the answer you're looking for, feel free to
              reach out to our support team.
            </p>
            <button
              className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition duration-200"
              onClick={showModal}
            >
              Contact Support
            </button>
          </Slide>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition duration-300"
        title="Back to top"
      >
        ↑
      </a>

      {/* Contact Support Modal */}
      <Modal
        title="Contact Support"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // Custom footer
        className="contact-support-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleOk}
          className="contact-support-form"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
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
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              Send
            </Button>
            <Button onClick={handleCancel} className="ml-4">
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FAQPage;
