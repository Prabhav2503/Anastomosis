import React from "react";

const RegistrationPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 pt-8 w-full h-full">
      <div className="flex flex-col px-20 items-center justify-center text-blue-600 gap-10 w-3/4">
        <h1 className="font-bold text-7xl w-full text-left">Registeration Open</h1>
        <p className="text-2xl w-full text-left">
          Scan the QR code shown and <br />complete your registration to join
          Anastomosis 2025
        </p>
        <h1 className="font-bold text-5xl w-full text-left">Eligibility: Students of Classes 8–12</h1>
      </div>
      <div
        className="bg-blue-600 rounded-lg p-10 flex flex-col items-center gap-10"
        style={{
          background: "linear-gradient(to bottom, #082BEF 0%, #051259 100%)",
        }}
      >
        <div className="bg-white rounded-lg p-15 ">
          <h1 className="text-blue-600 text-7xl font-bold ">QR</h1>
        </div>
        <p className="text-white text-xl ">Registeration Fees: XXX</p>
      </div>
    </div>
  );
};

export default RegistrationPage;
