import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaBehance } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: CodeSpectra Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">CodeSpectra</h3>
          <p className="text-gray-400 text-sm mb-4">
            We're a passionate team of frontend developers and UI/UX designers crafting beautiful, functional digital experiences that users love and businesses trust.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white bg-[#4B5462] p-2 rounded-full hover:text-[#ffffffc7]">
                <FaFacebookF />
            </a>
            <a href="#" className="text-white bg-[#4B5462] p-2 rounded-full hover:text-[#ffffffc7]">
                <IoLogoInstagram />
            </a>
            <a href="#" className="text-white bg-[#4B5462] p-2 rounded-full hover:text-[#ffffffc7]">
                <FaLinkedinIn />
            </a>
            <a href="#" className="text-white bg-[#4B5462] p-2 rounded-full hover:text-[#ffffffc7]">
                <FaBehance />
            </a>
          </div>
        </div>
        {/* Column 2: Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
            <li><Link to="/projects" className="text-gray-400 hover:text-white text-sm">Projects</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white text-sm">Services</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link></li>
          </ul>
        </div>
        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-bold mb-2">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Frontend Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">UI/UX Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Mobile Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Performance Optimization</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Maintenance & Support</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">@2025 CodeSpectra</p>
      </div>
    </footer>
  );
};

export default Footer;