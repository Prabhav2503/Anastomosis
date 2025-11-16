import React from 'react';

const buildingcard = ({ image, title, description }) => {
  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      {/* Swoosh Design */}
      <div className="absolute top-40 right-0 w-32 h-32 opacity-10 transform translate-x-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0,0 Q 50,50 100,0 L 100,100 L 0,100 Z" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>
      
      <div className="relative p-8 space-y-4 z-10">
        <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default buildingcard;