import React from 'react';

const LandingPage = ({ images, videoSrc }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]" // Lower z-index for the video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Foreground Content (Image) */}
      <div className="relative z-10 w-full h-full bg-transparent flex items-center justify-center p-10">
        <img
          src={images.anastomosis}
          alt="Main Logo"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>

      {/* Optional: Overlay for darkening background video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]"></div> {/* Lower z-index for the overlay */}
    </div>
  );
};

export default LandingPage;
