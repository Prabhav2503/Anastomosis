import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'about', label: 'About' },
  ];

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setOpen(false);
      setProfileOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow transition-colors duration-300 ${
      location.pathname === '/' && !scrolled ? 'bg-transparent' : 'bg-black'
    }`}>
      <div className="w-full flex items-center justify-between px-4 md:px-12 lg:px-16 h-16 md:h-24 max-w-[100vw] bg-black">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 min-w-0">
          <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img src={images.headerlogo} alt="EDC IIT Delhi Logo" className="h-8 md:h-14 w-auto object-contain" />
          </NavLink>
        </div>

        {/* Desktop links - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-10 lg:space-x-12">
          {navLinks.map(({ to, label }) => (
            location.pathname === '/' ? (
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
            ) : (
              <button
                key={to}
                onClick={() => handleNavClick(to)}
                className="text-white font-semibold text-sm lg:text-base hover:text-gray-300 cursor-pointer uppercase tracking-wide"
              >
                {label}
              </button>
            )
          ))}
          {location.pathname === '/' ? (
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
          ) : (
            <button
              onClick={() => handleNavClick('contact')}
              className="text-white font-semibold text-sm lg:text-base hover:text-gray-300 cursor-pointer uppercase tracking-wide"
            >
              Contact Us
            </button>
          )}
          <NavLink
            to="/resources"
            className="text-white font-semibold text-sm lg:text-base hover:text-gray-300 cursor-pointer uppercase tracking-wide"
          >
            Resources
          </NavLink>
          {/* <NavLink
            to="/merchandise"
            className="text-white font-semibold text-sm lg:text-base hover:text-gray-300 cursor-pointer uppercase tracking-wide"
          >
            Merchandise
          </NavLink> */}
        </div>

        {/* Right side - Register/Login or Profile Dropdown + Mobile toggle */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 min-w-0">
          {user ? (
            <>
              {/* Desktop - Profile Dropdown */}
              <div className="hidden md:block relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-4 py-2 rounded-md font-semibold transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <svg className={`w-4 h-4 transition-transform ${profileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                    <NavLink
                      to="/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                      </div>
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Desktop - Register */}
              <NavLink
                to="/register"
                className="hidden md:inline-block bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded-md font-semibold uppercase tracking-wide transition-colors"
              >
                Register
              </NavLink>

              {/* Mobile - Register */}
              <NavLink
                to="/register"
                className="md:hidden bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap"
              >
                Register
              </NavLink>
            </>
          )}

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
        <div className="md:hidden bg-black border-t border-gray-800 overflow-x-hidden">
          <div className="px-4 pt-3 pb-4 space-y-1 max-w-full">
            {navLinks.map(({ to, label }) => (
              location.pathname === '/' ? (
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
              ) : (
                <button
                  key={to}
                  onClick={() => {
                    handleNavClick(to);
                    setOpen(false);
                  }}
                  className="block text-white font-medium hover:text-gray-300 py-2 w-full text-left"
                >
                  {label}
                </button>
              )
            ))}

            {location.pathname === '/' ? (
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
            ) : (
              <button
                onClick={() => {
                  handleNavClick('contact');
                  setOpen(false);
                }}
                className="block text-white font-medium hover:text-gray-300 py-2 w-full text-left"
              >
                Contact Us
              </button>
            )}

            <NavLink
              to="/resources"
              onClick={() => setOpen(false)}
              className="block text-white font-medium hover:text-gray-300 py-2"
            >
              Resources
            </NavLink>
            {/* <NavLink
              to="/merchandise"
              onClick={() => setOpen(false)}
              className="block text-white font-medium hover:text-gray-300 py-2"
            >
              Merchandise
            </NavLink> */}

            {user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  navigate('/dashboard');
                }}
                className="flex items-center justify-center gap-3 px-4 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors mt-4"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </button>
            ) : (
              <NavLink
                to="/register"
                onClick={() => setOpen(false)}
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center mt-2"
              >
                Apply Now
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;