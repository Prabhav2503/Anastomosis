import React from 'react';
import Buildingcard from '../components/buildingcard';

const HomePage = ({ images }) => {
  return (
    <div className="w-full h-full bg-gray-100">
        <h1 className=" w-full bg-white p-4 text-3xl font-bold text-blue-600 text-center">EDC IITD & EDC AIMS</h1>
      <main className="flex flex-col md:flex-row items-center justify-center  p-6">
        <Buildingcard
          image={images.iitdbuilding}
          title="The Entrepreneurship Development Cell, IIT Delhi (eDC IITD)"
          description="is one of the largest student-run organizations in Asia. It helps young minds explore new ideas, learn about startups, and build the confidence to turn their thoughts into real projects."
        />
        <div className="w-full md:w-1/3 p-4 flex flex-col ">
            <img src={images.runningperson} alt="" className='hidden md:flex w-full ' />
          <p className="text-lg text-gray-800 text-center">
            Together, IIT Delhi and AIIMS Delhi — India's dream institutes — give school students a chance to see how engineering and
            medicine come together to shape the future.
          </p>
        </div>
        <Buildingcard
          image={images.aiimsbuilding}
          title="The Entrepreneurship Development Cell, AIIMS Delhi (eDC AIIMS)"
          description="drives innovation in medicine. It inspires students to explore healthcare challenges, develop new medical technologies, and create ideas that can impact lives."
        />
      </main>
    </div>
  );
};

export default HomePage;