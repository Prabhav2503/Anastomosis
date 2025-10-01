import React from 'react';
import Card from '../components/reasoncard';

const WhyJoinPage = ({images}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6">
      <header className='flex flex-col items-center mb-8'>
        <h1 className='text-3xl mb-3 font-bold text-blue-600'>Why JOIN?</h1>
        <p className="text-center text-lg text-gray-800 mt-2">
          <b>Spend 2 exciting days</b> at <b>IIT Delhi</b> and <b>AIIMS Delhi, India’s top institutes</b>, and get a rare  chance to see <b>innovation in action.</b>
        </p>
      </header>
      <div className="flex flex-wrap justify-center gap-6">
        <Card
          icon={images.attend}
          title="Attend"
          description="Exclusive entrepreneurship bootcamps designed especially for young innovators like you."
        />
        <Card
          icon={images.meet}
          title="Meet"
          description="Startup founders, researchers, and mentors who are shaping India’s future."
        />
        <Card
          icon={images.explore}
          title="Explore"
          description="Cutting-edge labs and innovation hubs normally reserved for top students  and scholars."
        />
        <Card
          icon={images.win}
          title="Win"
          description="Prizes, get mentorship, and earn national-level recognition for your talent and  ideas."
        />
        <Card
          icon={images.receive}
          title="Receive"
          description="Prestigious certificates jointly endorsed by IIT Delhi and AIIMS Delhi,  validating your achievement."
        />
      </div>
    </div>
  );
};

export default WhyJoinPage;