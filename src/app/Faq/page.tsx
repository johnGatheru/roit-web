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
import faqImage from "@/app/assets/images/faq.jpeg"; // Replace with your image path

const { Panel } = Collapse;
const { Option } = Select;

const faqData = [
  {
    category: "General",
    faqs: [
      {
        question: "What services does CN ROIT & ASSOCIATES offer?",
        answer:
          "We provide a range of consultancy services, including financial insights, advanced tax strategies, risk management, audit services, and effective management solutions tailored to meet the unique needs of our clients.",
      },
      {
        question: "How can I get started with your consultancy services?",
        answer:
          "To begin, simply contact us through our website or call us directly. We will schedule an initial consultation to discuss your specific needs and how we can assist you in achieving your financial goals.",
      },
      {
        question: "Who are your typical clients?",
        answer:
          "Our clients include individuals, small to medium-sized businesses, and larger corporations seeking expert financial guidance and innovative solutions to improve their financial performance.",
      },
    ],
  },
  {
    category: "Services",
    faqs: [
      {
        question: "What industries do you specialize in?",
        answer:
          "While we serve a diverse range of industries, our expertise includes finance, agriculture, manufacturing, and retail. We tailor our services to meet the specific challenges and opportunities within each sector.",
      },
      {
        question: "Can you assist with regulatory compliance?",
        answer:
          "Yes, our team is well-versed in regulatory compliance across various industries. We provide guidance to ensure that your business adheres to the latest laws and regulations, minimizing risks and potential penalties.",
      },
    ],
  },
  {
    category: "Client Relationships",
    faqs: [
      {
        question:
          "How does CN ROIT & ASSOCIATES ensure client confidentiality?",
        answer:
          "We prioritize client confidentiality and adhere to strict privacy policies. All client information is securely stored and accessed only by authorized personnel to ensure your data remains private.",
      },
      {
        question: "What is your approach to client relationships?",
        answer:
          "We believe in building long-term partnerships based on trust and open communication. Our client-centric approach ensures that we understand your unique needs and deliver tailored solutions that drive success.",
      },
    ],
  },
  {
    category: "Success Measurement",
    faqs: [
      {
        question: "How do you measure success for your clients?",
        answer:
          "We measure success based on the achievement of our clients' financial goals, improved performance, and satisfaction with our services. We continuously monitor progress and adjust our strategies to ensure optimal outcomes.",
      },
      {
        question: "How can I stay updated on your services and insights?",
        answer:
          "You can subscribe to our newsletter on our website to receive the latest updates, insights, and resources related to financial management and consultancy services.",
      },
    ],
  },
  {
    category: "Billing",
    faqs: [
      {
        question: "What are your fees for consultancy services?",
        answer:
          "Our fees vary depending on the specific services required and the scope of the project. We provide transparent pricing during the initial consultation and ensure there are no hidden costs.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Refunds are processed within 7 business days based on the terms outlined in our service agreement.",
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
