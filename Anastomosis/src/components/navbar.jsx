import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'; // Import from react-scroll


const Navbar = ({ images }) => {
  return (
    <nav
      className="flex flex-wrap items-center justify-between p-4 px-6 md:px-8 bg-transparent overflow-hidden absolute top-0 w-full z-20"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={images.headerlogo} alt="EDC IIT Delhi Logo" className="h-10 md:h-12" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center justify-center gap-20">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="font-bold text-white hover:text-gray-300 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="agenda"
          smooth={true}
          duration={500}
          className="font-bold text-white hover:text-gray-300 cursor-pointer"
        >
          Agenda
        </Link>
        <Link
          to="speaker"
          smooth={true}
          duration={500}
          className="font-bold text-white hover:text-gray-300 cursor-pointer"
        >
          Speaker
        </Link>
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