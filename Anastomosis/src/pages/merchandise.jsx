import React from 'react';
import Buildingcard from '../components/buildingcard';
import Footer from '../components/footer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // or your preferred theme

const StepProcess = ({ step, heading, description }) => {
  return (
    <div className="relative bg-white rounded-3xl border-4 border-blue-600 shadow-lg p-8 flex flex-col h-[350px] max-w-[400px]">
      <div className="absolute -top-6 -left-7 bg-[#CADBFF] text-black text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
        {step}
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900 mt-10 mb-4">
        {heading}
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Itemcard = ({ image, title, price }) => {
  return (
    <div className='flex flex-col items-center justify-center rounded-xl shadow-lg py-8 px-6 bg-white hover:shadow-2xl transition-shadow'>
      <img src={image} alt={title} className="w-48 h-48 object-cover rounded-lg" />
      <p className='text-2xl font-bold mt-6 text-gray-800'>{title}</p>
      <p className='text-xl mt-2 text-gray-600'>Rs <span className='font-bold text-black'>{price}</span></p>
    </div>
  );
};

const Merchandise = ({ images }) => {
  const merchandiseItems = [
    { title: "Strawberry Pancake", price: "28,000" },
    { title: "Blueberry Waffle", price: "32,000" },
    { title: "Chocolate Donut", price: "25,000" },
    { title: "Vanilla Cupcake", price: "22,000" },
    { title: "Matcha Latte", price: "30,000" },
    { title: "Caramel Frappé", price: "35,000" },
    { title: "Rainbow Cake", price: "45,000" },
  ];

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Merchandise Carousel */}
      <div className="mt-30 w-full py-16 px-16">
    <Splide
                options={{
                  perPage: 4,
                  perMove: 1,

                  gap: "1rem",
                  breakpoints: {
                    1024: { perPage: 3 },
                    768: { perPage: 2 },
                    640: { perPage: 1, arrows: false, perMove: 1 }, // Ensure one card per swipe on mobile
                  },
                  arrows: true,
                  pagination: false,
                  loop: true,
                  
                  drag: "free",
                  autoplay: true,
                  duration:1000,
                  interval:3000,
                }}
                aria-label="Competition Carousel"
              >
                {merchandiseItems.map(({ title,price }, idx) => (
                  <SplideSlide key={idx}>
                    <div className="px-2">
                      <Itemcard image={images.strawberry} title={title} price={price} />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
  </div>

      {/* Call to Action Section */}
      <div className='w-full bg-gradient-to-b from-[#082AE7] to-[#051672] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 p-10 lg:p-20'>
        <img src={images.merchandiseman} alt="Personality Test" className="w-80 lg:w-auto" />
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
          <p className='text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight'>
            Take a quick <br /> Personality Test and <br /> Find Your Clan
          </p>
          <button className='bg-[#F5F7FF] py-5 px-12 sm:px-20 lg:px-28 text-[#06156C] rounded-full text-xl font-bold hover:bg-white transition'>
            Take Test
          </button>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className='mt-20 flex flex-col md:flex-row gap-8 px-6 lg:px-20 xl:px-40 items-center justify-center'>
        <StepProcess step={1} heading="Take the Test" description="Explore robotics, AI, and sustainable tech projects"/>
        <StepProcess step={2} heading="Find your Clan" description="Hear from founders on how they turned ideas into real businesses."/>
        <StepProcess step={3} heading="Claim your Gift" description="Practice design thinking, prototyping, and problem-solving"/>
      </div>

      {/* Building Cards */}
      <div className='flex flex-col md:flex-row items-center justify-center px-6 lg:px-20 xl:px-40 gap-10 mt-20'>
        <Buildingcard
          image={images.iitdbuilding}
          title="The Entrepreneurship Development Cell, IIT Delhi (eDC IITD)"
          description="is one of the largest student-run organizations in Asia. It helps young minds explore new ideas, learn about startups, and build the confidence to turn their thoughts into real projects."
        />
        <Buildingcard
          image={images.aiimsbuilding}
          title="The Entrepreneurship Development Cell, AIIMS Delhi (eDC AIIMS)"
          description="drives innovation in medicine. It inspires students to explore healthcare challenges, develop new medical technologies, and create ideas that can impact lives."
        />
      </div>

      <div className='w-full '><Footer images={images} /></div>
    </div>
  );
};

export default Merchandise;