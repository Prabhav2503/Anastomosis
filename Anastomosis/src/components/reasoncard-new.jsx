import React from 'react';

const reasoncard = ({ icon, title, description }) => {
  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group">
      {/* Swoosh Design */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 transform -translate-x-8 translate-y-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0,0 Q 50,50 100,0 L 100,100 L 0,100 Z" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>
      
      <div className="relative p-8 flex flex-col items-center space-y-4 z-10">
        <div className="w-20 h-20 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
          <img src={icon} alt={title} className="w-full h-full object-contain"/>
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default reasoncard;
