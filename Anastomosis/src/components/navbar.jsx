import React from 'react';

const Navbar = ({images}) => {
  return (
    <nav 
      className="flex justify-between items-center p-4 text-white bg-transparent overflow-hidden relative"
    >
      <div className="flex items-center">
        <img src={images.edciitd} alt="EDC IIT Delhi Logo" className="h-15" />
      </div>
      <div className="flex items-center">
        <a href="#about" className="text-white hover:text-gray-300 mr-6">About</a>
        <a href="#agenda" className="text-white hover:text-gray-300 mr-6">Agenda</a>
        <a href="#speaker" className="text-white hover:text-gray-300 mr-6">Speaker</a>
        <a href="#apply" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Apply Now</a>
      </div>
    </nav>
  );
};

export default Navbar;  