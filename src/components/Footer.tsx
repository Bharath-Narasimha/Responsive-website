import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-row justify-between">
        {/* Left Section */}
        <div>
          <img
            src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736318152/Vector_r9bh6e.png'
            alt="Vibrer Logo"
            className="w-16 h-16 mb-4"
          />
          <p className="text-sm text-gray-400 text-left w-[400px]">
            Your dream space deserves the best execution, and that's where
            United Buildpro Pvt Ltd excels. Our construction services encompass
            everything from foundational work to structural builds, tailored to
            residential, commercial, and industrial needs. We pride ourselves
            on using high-quality materials and advanced techniques to ensure
            durability and efficiency in every project we undertake.
          </p>
          <div className="flex items-center gap-4 mt-4">
            {/* Social Media Images */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736361634/Frame_vrfdhe.png'
                alt="Instagram"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src='https://res.cloudinary.com/dhhhojjlp/image/upload/v1736361634/Frame-1_hkak4n.png'
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400 text-left">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Living
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Storage
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dining
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bedroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Matress
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Study
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Office
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Outdoor
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='text-left'>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                Residential
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Institutional
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Commercial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        2024 © All rights reserved - Cozy Comfort
      </div>
    </footer>
  );
};

export default Footer;
