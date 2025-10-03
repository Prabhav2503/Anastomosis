import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ images }) => {
  return (
    <nav
      className="flex flex-wrap items-center justify-between p-4 px-6 md:px-8 bg-transparent overflow-hidden fixed top-0 w-full z-20"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={images.headerlogo} alt="EDC IIT Delhi Logo" className="h-10 md:h-12" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center justify-center gap-8">
        <NavLink to="/" className="font-bold text-white hover:text-gray-300">
          About
        </NavLink>
        <NavLink to="/" className="font-bold text-white hover:text-gray-300">
          Agenda
        </NavLink>
        <NavLink to="/" className="font-bold text-white hover:text-gray-300">
          Speaker
        </NavLink>
      </div>

      {/* Apply Now Button */}
      <div className="flex items-center justify-center">
        <NavLink
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Apply Now
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;