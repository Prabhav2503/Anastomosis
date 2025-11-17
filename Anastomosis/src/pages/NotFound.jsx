import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold"
          >
            Go to Homepage
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors duration-300 font-semibold"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <svg
            className="w-64 h-64 mx-auto text-gray-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
