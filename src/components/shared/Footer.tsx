import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white pb-12 px-[165px] pt-[90px]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              Pixel<span className="text-[#FF6B47]">Pulse</span>.
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Your Best Marketing Partner
            </p>
            <p className="text-white text-lg font-medium">
              Hello@Gmail.Com
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Our Team
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Careers
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Blog
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Digital Marketing
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Search Engine Optimization
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Pay-Per-Click Advertising
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Social Media Management
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Content Markting
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Help Center
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  User Guides
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  FAQs
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Webinars
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Terms Of Service
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  FAQs
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Webinars
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <span className="w-10 h-10 flex items-center justify-center hover:text-[#FF6B47] transition-colors cursor-pointer">
              <FaFacebookF size={20} />
            </span>
            <span className="w-10 h-10 flex items-center justify-center hover:text-[#FF6B47] transition-colors cursor-pointer">
              <FaTwitter size={20} />
            </span>
            <span className="w-10 h-10 flex items-center justify-center hover:text-[#FF6B47] transition-colors cursor-pointer">
              <FaLinkedinIn size={20} />
            </span>
            <span className="w-10 h-10 flex items-center justify-center hover:text-[#FF6B47] transition-colors cursor-pointer">
              <FaInstagram size={20} />
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2024 PixelPulse - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;