import React from "react";
import bird from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import edc from "../assets/edciitd.svg";
import logo from "../assets/logo.png";
import { Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
const footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col relative min-h-[400px] md:min-h-[313.44px] px-4 sm:px-6 md:px-[60px]">
      <img
        src={logo}
        alt=""
        className="absolute top-16 sm:top-20 lg:top-24 w-40 sm:w-48 md:w-[360px] right-4 sm:right-8 lg:right-[130px]"
      />
      <div className="mt-6 sm:mt-8 lg:mt-[35px] bg-black flex-1 flex-col rounded-t-2xl sm:rounded-t-3xl md:rounded-t-4xl">
        <div className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-10 lg:gap-[112px] px-6 sm:px-8 md:px-[66px] pt-8 sm:pt-10 md:pt-[61px]">
          {/* Logo and Social Media */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 md:gap-[29px] justify-center items-center">
              <a
                className=" rounded-full w-12 h-12 sm:w-14 sm:h-14 md:size-[56px] flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/edc_iitd/?hl=en",
                    "_blank"
                  )
                }
              >
                <Instagram
                  size={25}
                  className="sm:w-8 sm:h-8 md:w-[35px] md:h-[35px]"
                  color="white"
                />
              </a>
              <a
                className=" rounded-full w-12 h-12 sm:w-14 sm:h-14 md:size-[56px] flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in",
                    "_blank"
                  )
                }
              >
                <Linkedin
                  size={28}
                  className="sm:w-8 sm:h-8 md:w-[35px] md:h-[35px]"
                  color="white"
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
                onClick={() => navigate("/")}
                className="hover:underline transition-all"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/about")}
                className="hover:underline transition-all"
              >
                About
              </button>
            </div>
            <div className="flex flex-col gap-2 md:gap-[25px] ">
              <button
                onClick={() => navigate("/events")}
                className="hover:underline transition-all"
              >
                Events
              </button>
              <button
                onClick={() => navigate("/teams")}
                className="hover:underline transition-all"
              >
                Teams
              </button>
            </div>
            <div className="flex flex-col gap-2 md:gap-[25px] ">
              <button
                onClick={() => navigate("/sponsors")}
                className="hover:underline transition-all"
              >
                Sponsors
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="hover:underline transition-all"
              >
                Contact
              </button>
            </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start text-white gap-3 sm:gap-[23px] pb-8 lg:pb-0">
            <p className="font-bold text-xl sm:text-[18px]">Contact Us</p>
            <div className="flex flex-col flex-1 gap-3 sm:gap-[14px] text-sm sm:text-base md:text-[15px] text-center lg:text-left">
              <p className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <Mail className="inline w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span>info@edciitd.ac.in</span>
              </p>
              <p className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <MapPin className="inline w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span>
                  Indian Institute of Technology Delhi
                  Hauz Khas, <br/> New Delhi, 110016
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 sm:mt-10 md:mt-[37px] mx-4 sm:mx-6 md:mx-[22px] bg-white h-[1px] s z-10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-white  md:text-xs px-6 sm:px-8 md:px-[47px] pt-4 sm:pt-5 md:pt-[18px] pb-6 sm:pb-8 gap-2 sm:gap-0">
          <p>Copyright eDC IIT Delhi</p>
          {/* <p>Created and maintained by: Anushka and Prabhav</p> */}
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default footer;