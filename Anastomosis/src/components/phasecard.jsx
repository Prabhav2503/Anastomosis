import React from "react";

const PhaseCard = ({ step1, step2, step3, highlight, bg1, bg2, bg3 }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center rounded-lg bg-white gap-5 p-6 shadow-lg">
      {/* Step 1 */}
      <div className={`flex items-center justify-center flex-1 p-6 rounded-lg ${bg1}`}>
        <p className="text-black text-center text-sm md:text-base lg:text-lg">
          {step1}
        </p>
      </div>

      {/* Step 2 */}
      <div className={`flex items-center justify-center flex-1 p-6 rounded-lg ${bg2}`}>
        <p className="text-white text-center text-sm md:text-base lg:text-lg">
          {step2}
        </p>
      </div>

      {/* Step 3 */}
      <div className={`flex items-center justify-center flex-1 p-6 rounded-lg ${bg3}`}>
        <p className="text-white text-center text-sm md:text-base lg:text-lg">
          {step3}
        </p>
      </div>

      {/* Highlight */}
      <div className="flex items-center justify-center flex-1 bg-[#276CF8] text-center rounded-lg text-white p-6">
        <p className="text-sm md:text-base lg:text-lg">{highlight}</p>
      </div>
    </div>
  );
};

export default PhaseCard;
