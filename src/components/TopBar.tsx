"use client"; // Add this to ensure the component is rendered on the client side

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use `usePathname` instead of `useRouter`
import Image from "next/image";
import barmenu from "@/app/assets/images/menuicon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track if page is scrolled
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set to true when user scrolls down
      } else {
        setIsScrolled(false); // Set to false when back at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
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
            MyWebsite
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

          <button className="bg-yellow-500 p-4 btn">Book us now</button>
        </div>
        {/* Small Screens */}
        <div className="md:hidden p-3">
          <button onClick={toggleMenu}>
            <Image alt="commign" src={barmenu} width={40} height={40} />
          </button>
        </div>
      </div>
      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-gray-300 opacity-75">
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
            Faq
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
