import React from 'react';

const Infocard = ({ body }) => {
  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group">
      {/* Swoosh Design */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 0,0 Q 50,50 100,0 L 100,100 L 0,100 Z" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>
      
      <div className="relative p-8 space-y-4 z-10">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors">
          {body}
        </p>
      </div>
      
      {/* Bottom Left Accent */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 transform -translate-x-8 translate-y-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="50" fill="currentColor" className="text-gray-400" />
        </svg>
      </div>
    </div>
  );
};

export default Infocard;