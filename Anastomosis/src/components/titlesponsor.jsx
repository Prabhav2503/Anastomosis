import React, { useEffect, useState } from "react";

const TitleSponsor = ({ sponsorLogo }) => {

  return (
    <div
      id="sponsor-section"
      className="w-full  bg-white flex flex-col items-center relative"
    >
       

      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight text-center">
        TITLE SPONSOR & BROUGHT TO YOU BY
      </h1>
      <div className="w-24 h-1 bg-gray-300 mx-auto my-6"></div>

      {/* Sponsor Logo */}
      <div className="mt-6 flex justify-center w-full">
        <div className="bg-[#DBE7FF] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
          <img
            src={sponsorLogo}
            alt="Title Sponsor"
            className="h-32 md:h-40 object-contain"
          />
        </div>
      </div>

      
    </div>
  );
};

export default TitleSponsor;
