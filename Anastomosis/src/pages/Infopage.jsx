import React from 'react';
import Card from '../components/infocard';

const Infopage = ({ images }) => {
  return (
    <div className="w-full min-h-screen bg-white py-20 flex flex-col items-center">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight text-center">
          WHAT IS ANASTOMOSIS
        </h1>
      </header>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>

      {/* Description */}
      <p className="text-center text-lg md:text-2xl text-gray-700 mb-16 max-w-4xl leading-relaxed">
        <b>Anastomosis</b> isn't just about learning — it's about <span className="text-gray-900 font-bold">curiosity, discovery,</span> and <span className="text-gray-900 font-bold">inspiration</span>.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl px-4">
        <Card
          body="Anastomosis is a one-of-a-kind national program designed for school students from Classes 8 to 12."
          bg="[#2F68DA]"
          text="white"
        />
        <Card
          body="Through this initiative, selected students get a chance to visit IIT Delhi and AIIMS Delhi,
          interact with brilliant innovators, and experience how new ideas turn into real solutions."
          bg="[#2F68DA]"
          text="white"
        />
        <Card
          body="It brings together the worlds of engineering and medicine — two of the most powerful fields shaping our future."
          bg="[#2F68DA]"
          text="white"
        />
        <Card
          body="Students from across India get a rare chance to walk the halls of IIT Delhi and AIIMS Delhi, see innovation in action, and get a glimpse of the future they could help create."
          bg="[#2F68DA]"
          text="white"
        />
      </div>
    </div>
  );
};

export default Infopage;