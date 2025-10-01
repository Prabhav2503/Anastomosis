import React from 'react';

const buildingcard = ({ image, title, description }) => {
  return (
    <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default buildingcard;