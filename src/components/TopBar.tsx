"use client"; // Add this to ensure the component is rendered on the client side

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use `usePathname` instead of `useRouter`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent sticky top-0 z-50 font-bold navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        {/* Large and Medium Screens */}
        <div className="hidden md:flex space-x-8 small-navbar justify-end p-2 items-center">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-yellow-400"
                : "text-gold hover:text-yellow-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/About"
            className={`${
              pathname === "/about"
                ? "text-yellow-400"
                : "text-gold hover:text-yellow-300"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/Services"
            className={`${
              pathname === "/services"
                ? "text-yellow-400"
                : "text-gold hover:text-yellow-300"
            }`}
          >
            Services
          </Link>
          <Link
            href="/Blogs"
            className={`${
              pathname === "/blog"
                ? "text-yellow-400"
                : "text-gold hover:text-yellow-300"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/Faq"
            className={`${
              pathname === "/faq"
                ? "text-yellow-400"
                : "text-gold hover:text-yellow-300"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/Contact"
            className={`${
              pathname === "/contact"
                ? "text-yellow-400"
                : "text-gold hover:text-yellow-300"
            }`}
          >
            Contact
          </Link>

          <button className="bg-yellow-500 p-4 btn">Book us now</button>
        </div>
        {/* Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "bg-yellow-400 text-white"
                : "text-gold hover:bg-yellow-300"
            } block px-4 py-2`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "bg-yellow-400 text-white"
                : "text-gold hover:bg-yellow-300"
            } block px-4 py-2`}
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "bg-yellow-400 text-white"
                : "text-gold hover:bg-yellow-300"
            } block px-4 py-2`}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
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
