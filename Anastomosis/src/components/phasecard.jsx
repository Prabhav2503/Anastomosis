import React from 'react';

const PhaseCard = ({ steps, highlight }) => {
  return (
    <div className="flex items-center justify-center rounded-lg bg-white p-6">
        {steps.map((step,index) => (
            <div className='flex items-center justify-center p-8'>
                <p className='text-black text-xs md:text-base lg:text-xl'>{step}</p>
            </div>
        ))} 
        <div className='bg-[#276CF8] text-center text-xs md:text-base lg:text-xl rounded-lg text-white p-6'>{highlight}</div>
    </div>
  );
};

export default PhaseCard;