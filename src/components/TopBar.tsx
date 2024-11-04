"use client"; // Add this to ensure the component is rendered on the client side

import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import barmenu from "@/app/assets/images/menuicon.png";
import logo from "@/app/assets/images/WhatsApp Image 2024-07-20 at 2.24.17 AM.jpeg";

import BookingModal from "@/components/BookingModal"; // Import the modal component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for the modal
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); // Toggle modal visibility
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 font-bold navbar transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold ml-4">
            <Link
              href="/"
              className={`${isScrolled ? "text-black" : "text-white"}`}
            >
              <Image src={logo} alt="comming" width={70} />
            </Link>
          </div>
          {/* Large and Medium Screens */}
          <div className="hidden md:flex space-x-8 small-navbar justify-end p-2 items-center">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-300"
                  : "text-gold hover:text-yellow-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/About"
              className={`${
                pathname === "/About"
                  ? "text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-300"
                  : "text-gold hover:text-yellow-300"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/Services"
              className={`${
                pathname === "/Services"
                  ? "text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-300"
                  : "text-gold hover:text-yellow-300"
              }`}
            >
              Services
            </Link>
            <Link
              href="/Blogs"
              className={`${
                pathname === "/Blogs"
                  ? "text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-300"
                  : "text-gold hover:text-yellow-300"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/Faq"
              className={`${
                pathname === "/Faq"
                  ? "text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-300"
                  : "text-gold hover:text-yellow-300"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/Contact"
              className={`${
                pathname === "/Contact"
                  ? "text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-300"
                  : "text-gold hover:text-yellow-300"
              }`}
            >
              Contact
            </Link>

            <button
              className="bg-yellow-500 px-5 py-2 btn text-white"
              onClick={toggleModal} // Trigger modal on button click
            >
              Book us now
            </button>
          </div>
          {/* Small Screens */}
          <div className="md:hidden p-3">
            <button onClick={toggleMenu}>
              <Image alt="menu" src={barmenu} width={40} height={40} />
            </button>
          </div>
        </div>
        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full bg-gray-300 opacity-95">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "bg-yellow-700 text-white"
                  : "text-gold hover:bg-yellow-300"
              } block px-4 py-2 border-b`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/About"
              className={`${
                pathname === "/About"
                  ? "bg-yellow-400 text-white"
                  : "text-gold hover:bg-yellow-300"
              } block px-4 py-2 border-b`}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/Services"
              className={`${
                pathname === "/Services"
                  ? "bg-yellow-400 text-white"
                  : "text-gold hover:bg-yellow-300"
              } block px-4 py-2`}
              onClick={toggleMenu}
            >
              Services
            </Link>

            <Link
              href="/Faq"
              className={`${
                pathname === "/Faq"
                  ? "bg-yellow-400 text-white"
                  : "text-gold hover:bg-yellow-300"
              } block px-4 py-2`}
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="/Blogs"
              className={`${
                pathname === "/Blogs"
                  ? "bg-yellow-400 text-white"
                  : "text-gold hover:bg-yellow-300"
              } block px-4 py-2`}
              onClick={toggleMenu}
            >
              Blog
            </Link>

            <Link
              href="/Contact"
              className={`${
                pathname === "/Contact"
                  ? "bg-yellow-400 text-white"
                  : "text-gold hover:bg-yellow-300"
              } block px-4 py-2`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="w-full flex justify-end">
              <button
                className="bg-yellow-500 px-5 py-2 btn text-white"
                onClick={toggleModal} // Trigger modal on button click
              >
                Book us now
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Booking Modal */}
      <BookingModal
        isVisible={isModalVisible}
        handleCancel={toggleModal} // Pass toggleModal to close the modal
      />
    </>
  );
};

export default Navbar;
