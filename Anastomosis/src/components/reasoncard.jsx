import React from 'react';

const reasoncard = ({ icon, title, description }) => {
  return (
    <div className=" w-full    md:w-66 p-4 bg-[#DBE7FF] rounded-lg shadow-md flex flex-col items-center justify-center">
      <img src={icon} alt={title} className="flex justify-center mb-2"/>
      <h3 className="text-2xl font-bold text-center text-blue-600">{title}</h3>
      <p className="text-black text-base text-center mt-2">{description}</p>
    </div>
  );
};

export default reasoncard;