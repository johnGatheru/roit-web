import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: 1,
      imageSrc: "/path-to-your-image1.jpg",
      title: "Service 1",
      description:
        "This is a brief description of Service 1. It provides insight into the service offered, emphasizing its key benefits and features.",
    },
    {
      id: 2,
      imageSrc: "/path-to-your-image2.jpg",
      title: "Service 2",
      description:
        "This is a brief description of Service 2. It provides insight into the service offered, emphasizing its key benefits and features.",
    },
    {
      id: 3,
      imageSrc: "/path-to-your-image3.jpg",
      title: "Service 3",
      description:
        "This is a brief description of Service 3. It provides insight into the service offered, emphasizing its key benefits and features.",
    },
    {
      id: 4,
      imageSrc: "/path-to-your-image4.jpg",
      title: "Service 4",
      description:
        "This is a brief description of Service 4. It provides insight into the service offered, emphasizing its key benefits and features.",
    },
    {
      id: 5,
      imageSrc: "/path-to-your-image5.jpg",
      title: "Service 5",
      description:
        "This is a brief description of Service 5. It provides insight into the service offered, emphasizing its key benefits and features.",
    },
    {
      id: 6,
      imageSrc: "/path-to-your-image6.jpg",
      title: "Service 6",
      description:
        "This is a brief description of Service 6. It provides insight into the service offered, emphasizing its key benefits and features.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 mt-9 underline">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={service.imageSrc}
              alt={service.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
