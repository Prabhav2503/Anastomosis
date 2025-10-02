import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({images}) => {
  return (
    <nav  style={{background: 'linear-gradient(to right, #082BEF 0%, #051259 100%)'}}
      className="flex justify-between items-center p-4 text-white bg-transparent overflow-hidden relative"
    >
      <div className="flex items-center">
        <img src={images.edciitd} alt="EDC IIT Delhi Logo" className="h-15" />
      </div>
      <div className="flex items-center">
        <NavLink to="/" className="text-white hover:text-gray-300 mr-6">About</NavLink>
        <NavLink to="/" className="text-white hover:text-gray-300 mr-6">Agenda</NavLink>
        <NavLink to="/" className="text-white hover:text-gray-300 mr-6">Speaker</NavLink>
        <NavLink to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Apply Now</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;  