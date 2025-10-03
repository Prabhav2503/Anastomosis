import React from "react";

const PhaseCard = ({ step1, step2, step3, highlight, bg1, bg2, bg3 }) => {
  return (
    <div className="flex items-stretch justify-center rounded-lg bg-white gap-5 p-6">
      {/* Step 1 */}
      <div className={`flex items-center justify-center flex-1 p-8 rounded-lg ${bg1}`}>
        <p className="text-black text-center text-xs md:text-base lg:text-xl">
          {step1}
        </p>
      </div>

      {/* Step 2 */}
      <div className={`flex items-center justify-center flex-1 p-8 rounded-lg ${bg2}`}>
        <p className="text-white text-center text-xs md:text-base lg:text-xl">
          {step2}
        </p>
      </div>

      {/* Step 3 */}
      <div className={`flex items-center justify-center flex-1 p-8 rounded-lg ${bg3}`}>
        <p className="text-white text-center text-xs md:text-base lg:text-xl">
          {step3}
        </p>
      </div>

      {/* Highlight */}
      <div className="flex items-center justify-center flex-1 bg-[#276CF8] text-center rounded-lg text-white p-8">
        <p className="text-xs md:text-base lg:text-xl">{highlight}</p>
      </div>
    </div>
  );
};

export default PhaseCard;
