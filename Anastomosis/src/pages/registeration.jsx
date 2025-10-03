import React from "react";

const RegistrationPage = ({ images }) => {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${images.day1bg})` }}
    >
      <div style={{background: 'linear-gradient(to bottom, #082BEF 0%, #051259 100%)'}} 
      className="w-full h-25"></div>
      <div className="w-full h-full flex items-center justify-center">
        <div
          style={{
            background: "linear-gradient(to bottom, #082BEF 0%, #051259 100%)",
          }}
          className="w-[80%] h-auto mt-15 p-8 rounded-lg shadow-lg p-6"
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Registrations Open!! 📋
          </h1>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Mobile Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your primary mobile number"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="altMobile">
                  Alternate Mobile Number
                </label>
                <input
                  type="tel"
                  id="altMobile"
                  name="altMobile"
                  className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter alternate mobile number"
                />
              </div>
            </div>

            {/* School */}
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="school">
                School
              </label>
              <input
                type="text"
                id="school"
                name="school"
                className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your school name"
                required
              />
            </div>

            {/* Class, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="class">
                  Class
                </label>
                <select
                  id="class"
                  name="class"
                  className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
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
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your state"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your city"
                  required
                />
              </div>
            </div>

            {/* Teacher Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="teacherName">
                  School Teacher Name
                </label>
                <input
                  type="text"
                  id="teacherName"
                  name="teacherName"
                  className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter teacher's name"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2" htmlFor="teacherMobile">
                  Teacher Mobile Number
                </label>
                <input
                  type="tel"
                  id="teacherMobile"
                  name="teacherMobile"
                  className="w-full p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter teacher's mobile number"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className="w-[30%] bg-white text-blue-600 p-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
              >
                Submit
              </button>
            </div>
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
