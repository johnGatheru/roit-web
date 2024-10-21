import React from "react";
import axios from "axios";
import "./BookingModal.css";
import { Modal, Form, Input, DatePicker, notification, Button } from "antd";

interface BookingModalProps {
  isVisible: boolean;
  handleCancel: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isVisible,
  handleCancel,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields();
    //   .then((values) => {
    //     axios
    //       .post("/api/booking", values)
    //       .then((response: any) => {
    //         console.log("Booking Successful:", response.data);

    //         notification.success({
    //           message: "Booking Successful",
    //           description: "Your booking has been submitted successfully!",
    //           placement: "topRight",
    //         });

    //         // Reset the form and close the modal
    //         form.resetFields();
    //         handleCancel();
    //       })
    //       .catch((error: any) => {
    //         console.error("Error submitting booking:", error);

    //         // Optionally show an error notification
    //         notification.error({
    //           message: "Booking Failed",
    //           description:
    //             "Something went wrong while submitting your booking.",
    //           placement: "topRight",
    //         });
    //       });
    //   })
    notification.success({
      message: "Booking Successful",
      description: "Your booking has been submitted successfully!",
      placement: "topRight",
    });
    //   .catch((errorInfo) => {
    //     console.log("Validation Failed:", errorInfo);
    //   });
  };

  return (
    <Modal
      title="Book a Consultation"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <button
          key="cancel"
          className="px-5 py-2 btn rounded-2xl border "
          onClick={handleCancel}
        >
          Cancel
        </button>,
        <button
          className="bg-yellow-500 px-5 py-2 btn rounded-2xl text-white ml-4"
          key="submit"
          onClick={handleOk}
        >
          Book Now
        </button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Booking Date & Time"
          name="dateTime"
          rules={[{ required: true, message: "Please select date and time" }]}
        >
          <DatePicker showTime />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingModal;
