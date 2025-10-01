import React from 'react';

const LandingPage = ({images}) => {
  return (
          <div className=' w-full h-full bg-transparent flex items-center justify-center p-10'>
            <img src={images.anastomosis} alt="Main Logo" className='w-[80%] h-[80%]' />
          </div>
  );
};

export default LandingPage;