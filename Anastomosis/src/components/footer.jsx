import React from "react";
import bird from "../assets/Vector.svg";
import { useNavigate, useLocation } from "react-router-dom";
import edc from "../assets/edciitd.svg";
import logo from "../assets/logo.png";
import { Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection("about"); // matches <div id="about"> in HomePage
      }, 100);
    } else {
      scrollToSection("about");
    }
  };

  return (
    <div className="flex flex-col relative min-h-[400px] md:min-h-[313.44px] px-4 sm:px-6 md:px-[60px]">
      <div
        className="mt-6 sm:mt-8 lg:mt-[35px] bg-black flex-1 flex-col rounded-t-2xl sm:rounded-t-3xl md:rounded-t-4xl "
      >
        <div className="relative flex flex-col items-center lg:items-start">
        <img
        src={logo}
        alt=""
        className="relative mt-10 lg:mt-0 lg:absolute lg:right-[5%] lg:top-[30%] w-80 lg:w-80 xl:w-100"
      />
        <div className="flex flex-col lg:flex-row justify-start gap-8 sm:gap-10 lg:gap-[180px] px-6 sm:px-8 md:px-[66px] pt-12 ">
          
          {/* Logo and Social Media */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-6">
  <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 md:gap-[29px] justify-center items-center">

    {/* Instagram */}
    <a
      className="group rounded-full w-12 h-12 sm:w-14 sm:h-14 md:size-[56px] 
                 flex items-center justify-center cursor-pointer 
                 hover:bg-white transition-colors"
      onClick={() =>
        window.open(
          "https://www.instagram.com/edc_iitd/?hl=en",
          "_blank"
        )
      }
    >
      <Instagram
        size={25}
        className="sm:w-8 sm:h-8 md:w-[35px] md:h-[35px] 
                   text-white group-hover:text-black transition-colors"
      />
    </a>

    {/* LinkedIn */}
    <a
      className="group rounded-full w-12 h-12 sm:w-14 sm:h-14 md:size-[56px] 
                 flex items-center justify-center cursor-pointer 
                 hover:bg-white transition-colors"
      onClick={() =>
        window.open(
          "https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in",
          "_blank"
        )
      }
    >
      <Linkedin
        size={28}
        className="sm:w-8 sm:h-8 md:w-[35px] md:h-[35px] 
                   text-white group-hover:text-black transition-colors"
      />
    </a>

  </div>
</div>


          {/* Quick Access */}
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start text-white gap-5 sm:gap-[37px]">
            <p className="font-bold text-xl sm:text-[18px] ">Quick Access</p>
            <div className=" text-[15px] flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[160px]">
              <div className="flex flex-col items-center justify-center gap-2 md:gap-[25px] ">
                <button
                  onClick={handleHomeClick}
                  className="hover:underline transition-all"
                >
                  Home
                </button>
                <button
                  onClick={handleAboutClick}
                  className="hover:underline transition-all"
                >
                  About
                </button>
              </div>
              <div className="flex flex-col gap-2 md:gap-[25px] ">
                <button
                  onClick={() => navigate("/resources")}
                  className="hover:underline transition-all"
                >
                  Resources
                </button>
                <button
                  onClick={() => navigate("/register-school")}
                  className="hover:underline transition-all"
                >
                  Register as School
                </button>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start text-white gap-3 sm:gap-[23px] pb-8 lg:pb-0">
            <p className="font-bold text-xl sm:text-[18px]">Contact Us</p>
            <div className="flex flex-col flex-1 gap-3 sm:gap-[14px] text-sm sm:text-base md:text-[15px] text-center lg:text-left">
              <p className="flex flex-col md:flex-row items-center md:items-start gap-1 sm:gap-2">
                <Mail className="inline w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span>anastomosis@edciitd.com</span>
              </p>
              <p className="flex flex-col md:flex-row items-center md:items-start gap-1 sm:gap-2">
                <MapPin className="inline w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span>
                  Indian Institute of Technology Delhi, Hauz Khas, <br /> New
                  Delhi, 110016
                </span>
              </p>
            </div>
          </div>
        </div>
        </div>
        {/* Divider */}
        <div className="mt-8 sm:mt-10 md:mt-[37px] mx-4 sm:mx-6 md:mx-[22px] bg-white h-[1px] z-10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-white  md:text-xs px-6 sm:px-8 md:px-[47px] pt-4 sm:pt-5 md:pt-[18px] pb-6 sm:pb-8 gap-2 sm:gap-0">
          <p>Copyright eDC IIT Delhi</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
