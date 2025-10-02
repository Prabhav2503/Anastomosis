import React from "react";

const RegistrationPage = ({images}) => {
  return (
    <div
      className="w-full h-full p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${images.day1bg})` }}
    >
    <div className="w-full h-full flex items-center justify-center">
      <div
        style={{ background: "linear-gradient(to bottom, #082BEF 0%, #051259 100%)" }}
        className="w-[80%] h-auto mt-15 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Registrations Open!! 📋
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2" htmlFor="class">
              Class
            </label>
            <select
              id="class"
              name="class"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            >
              <option value="">Select your class</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-blue-600 p-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
          >
            Submit
          </button>
        </form>
        <p className="text-white text-center mt-4 text-sm">
          Registration Fee: ₹XXX
        </p>
      </div>
    </div>
    </div>
  );
};

export default RegistrationPage;