import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ images }) => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'agenda', label: 'Agenda' },
    { to: 'speaker', label: 'Speaker' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow">
      <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-16 h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img src={images.headerlogo} alt="EDC IIT Delhi Logo" className="h-10 md:h-14" />
          </NavLink>
        </div>

        {/* Desktop links - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-10 lg:space-x-12">
          {navLinks.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-64}
              activeClass="text-gray-300"
              className="text-white font-semibold text-sm lg:text-base hover:text-gray-300 cursor-pointer uppercase tracking-wide"
            >
              {label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-64}
            activeClass="text-gray-300"
            className="text-white font-semibold text-sm lg:text-base hover:text-gray-300 cursor-pointer uppercase tracking-wide"
          >
            Contact Us
          </ScrollLink>
        </div>

        {/* Right side - Register/Login + Mobile toggle */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <NavLink
            to="/register"
            className="hidden md:inline-block bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded-md font-semibold uppercase tracking-wide transition-colors"
          >
            Register
          </NavLink>

          <NavLink
            to="/register"
            className="md:hidden bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium"
          >
            Register
          </NavLink>

          <button
            className="md:hidden text-white p-2 rounded-md focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map(({ to, label }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setOpen(false)}
                className="block text-white font-medium hover:text-gray-300 py-2"
              >
                {label}
              </ScrollLink>
            ))}

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => setOpen(false)}
              className="block text-white font-medium hover:text-gray-300 py-2"
            >
              Contact Us
            </ScrollLink>

            <NavLink
              to="/register"
              onClick={() => setOpen(false)}
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center mt-2"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;