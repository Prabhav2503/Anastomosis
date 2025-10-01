import React from 'react';
import Card from '../components/infocard';

const Infopage = ({images}) => {
  return (
    <div className="w-full h-full p-6 flex flex-col items-center">
      <header className="flex items-center mb-4">
        <img src={images.Spacerobot} alt="Robot Icon" className="h-8 mr-2" />
        <h1 className="text-3xl font-bold text-blue-600">WHAT IS ANASTOMOSIS</h1>
      </header>
      <p className="text-center text-lg text-gray-800 mb-6">
        <b>Anastomosis</b> isn’t just about learning — it’s about <b>curiosity, discovery,</b> and <b>inspiration</b>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-60 py-5">
        <Card
          body="Anastomosis is a one-of-a-kind national program designed for school students from Classes 8 to 12."
          bg="[#0647CA]"
          text="white"
        />
        <Card
          body="Through this initiative, selected students get a chance to visit IIT Delhi and AIIMS Delhi,
          interact with brilliant innovators, and experience how new ideas turn into real solutions."
          bg="[#557FD5]"
          text="white"
        />
        <Card
          body="It brings together the worlds of engineering and medicine — two of the most powerful fields shaping our future."
          bg="[#2F68DA]"
          text="white"  
        />
        <Card
          body="Students from across India get a rare chance to walk the halls of IIT Delhi and AIIMS Delhi, see innovation in action, and get a glimpse of the future they could help create."
          bg="[#DBE7FF]"
          text="blue"
        />
        
      </div>
    </div>
  );
};

export default Infopage;