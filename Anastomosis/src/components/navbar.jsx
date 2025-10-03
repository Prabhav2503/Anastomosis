import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ images }) => {
  return (
    <nav
      className="flex items-center justify-between p-4 px-8 bg-transparent overflow-hidden absolute top-0 w-full z-20" // Increased z-index
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="flex items-center self-start">
        <img src={images.headerlogo} alt="EDC IIT Delhi Logo" className="h-15" />
      </div>
      <div className="flex items-center justify-center gap-40">
        <NavLink to="/" className="font-bold text-white hover:text-gray-300 mr-6">
          About
        </NavLink>
        <NavLink to="/" className="font-bold text-white hover:text-gray-300 mr-6">
          Agenda
        </NavLink>
        <NavLink to="/" className="font-bold text-white hover:text-gray-300 mr-6">
          Speaker
        </NavLink>
      </div>
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