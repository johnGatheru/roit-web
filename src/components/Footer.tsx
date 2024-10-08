import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-10 sm:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">
            About Us
          </h3>
          <p className="text-gray-400">
            We are a leading company in providing top-notch services and
            solutions to our clients. Our mission is to deliver high-quality
            products that bring value and satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">
            Quick Links
          </h3>
          <ul>
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">
            Contact Us
          </h3>
          <p className="text-gray-400">123 Business Road, City, Kenya</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Email: info@yourcompany.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-white hover:text-white bg-amber-300 p-2 rounded-full"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-amber-300 p-2 rounded-full"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-amber-300 p-2 rounded-full"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-amber-300 p-2 rounded-full"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} c. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
