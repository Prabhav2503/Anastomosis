import React from 'react';
import Card from '../components/infocard';

const Infopage = ({ images }) => {
  return (
    <div className="w-full min-h-screen p-6 flex flex-col items-center bg-gradient-to-b from-[#EAF2FF] to-white">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center mb-8 text-center md:text-left">
        <img src={images.Spacerobot} alt="Robot Icon" className="h-12 md:h-16 mr-0 md:mr-4 mb-4 md:mb-0" />
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          WHAT IS ANASTOMOSIS
        </h1>
      </header>

      {/* Description */}
      <p className="text-center text-base md:text-lg text-gray-800 mb-8 max-w-4xl">
        <b>Anastomosis</b> isn’t just about learning — it’s about <b>curiosity, discovery,</b> and <b>inspiration</b>.
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