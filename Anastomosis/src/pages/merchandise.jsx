import React from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SingleHoodie from "../assets/singlehoodie.svg";
import CompleteHoodie from "../assets/completehoodie.svg";
import MultipleHoodie from "../assets/3hoodie.svg";



const Itemcard = ({ images, title, price,id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => (navigate("/payment", {
      state:{
        id:id,
        name:title,
        price:price,
        images:images
      }
    }))} className="w-full max-w-sm mx-auto font-sans cursor-pointer" >
  <div className=" shadow-lg rounded-lg overflow-hidden">
    {/* Product Image */}
    <div className="bg-white p-8">
      <img
        src={images[0]}
        alt="Hoodie"
        className="w-full h-auto object-contain"/>
    </div>
  </div>

  {/* Product Info */}
  <div className="mt-6 space-y-3">
    <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
    
    <p className="text-base text-gray-600">Unisex · 3 Colors</p>

    {/* Color Swatches */}
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">Colors:</span>
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-600 shadow-sm"></div>
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-400"></div>
        <div className="w-8 h-8 rounded-full bg-black border-2 border-gray-800"></div>
      </div>
    </div>

    {/* Price */}
    <div className="pt-2">
      <span className="text-lg font-semibold text-gray-900">
        MRP : <span className="text-xl">₹{price}</span>
      </span>
    </div>
  </div>
</div>
  );
};

const Collection = ({ title, link }) => {
  
  const navigate = useNavigate();
  return (
    <div className="relative border border-2-black w-full rounded-2xl cursor-pointer" onClick={() => (navigate(link))}>
      <div className=" flex items-center justify-end  ">
        <img src={SingleHoodie} alt="" className="size-128" />
      </div>
      <div className="absolute rounded-2xl bg-gradient-to-b from-[#082AE7] to-[#051672] top-0 w-full h-full opacity-[85%] text-white font-extrabold text-7xl flex items-end p-10">
        {title} <br /> COLLECTION{" "}
      </div>
    </div>
  );
};

const Merchandise = ({images}) => {
  const merchandiseItems = [
    { title: "Strawberry Pancake", price: "28,000" , images:[CompleteHoodie], id:1},
    { title: "Blueberry Waffle", price: "32,000", images:[CompleteHoodie], id:2 },
    { title: "Chocolate Donut", price: "25,000", images:[CompleteHoodie], id:3 },
    { title: "Vanilla Cupcake", price: "22,000", images:[CompleteHoodie], id:4 },
    { title: "Matcha Latte", price: "30,000", images:[CompleteHoodie], id:5 },
    { title: "Caramel Frappé", price: "35,000", images:[CompleteHoodie], id:6 },
    { title: "Rainbow Cake", price: "45,000", images:[CompleteHoodie], id:7 },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Landing Component */}
      <div className="flex flex-col items-center justify-center relative mt-30 h-128 w-[90%]">
        <div className=" flex items-center justify-center  ">
          <img src={MultipleHoodie} alt="" className="size-230" />
        </div>
        <div className="absolute rounded-2xl bg-gradient-to-b from-[#082AE7] to-[#051672] top-0 w-full h-full opacity-[85%] text-white font-extrabold text-5xl flex items-center justify-center">
          {" "}
          WEAR THE SPIRIT OF ANASTOMOSIS
        </div>
      </div>
      {/* heading1 */}
      <div className="flex items-center justify-center mt-10 w-full px-10">
        <h2
          className="text-[#061A8B] font-bold text-5xl whitespace-nowrap flex-none"
          style={{ fontFamily: "Poppins" }}
        >
          OUR COLLECTIONS
        </h2>

        <div className="h-0.5 bg-black flex-grow ml-4 hidden md:block" />
      </div>
      {/* collections */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full p-10">
        <Collection title="AIIMS DELHI" link="/aiims-delhi-collection"/>
        <Collection title="IIT DELHI" link="/iit-delhi-collection"/>
      </div>
      {/* heading2 */}
      <div className="flex items-center justify-center mt-10 w-full px-10">
        <h2
          className="text-[#061A8B] font-bold text-5xl whitespace-nowrap flex-none"
          style={{ fontFamily: "Poppins" }}
        >
          BROWSE ALL MERCH
        </h2>

        <div className="h-0.5 bg-black flex-grow ml-4 hidden md:block" />
      </div>

      {/* Merchandise Carousel */}
      <div className="mt-10 w-full py-16 px-16">
        <Splide
          options={{
            perPage: 4,
            perMove: 1,

            gap: "1rem",
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              640: { perPage: 1, arrows: false, perMove: 1 }, // Ensure one card per swipe on mobile
            },
            arrows: true,
            pagination: false,
            loop: true,

            drag: "free",
            autoplay: true,
            duration: 1000,
            interval: 3000,
          }}
          aria-label="Competition Carousel"
        >
          {merchandiseItems.map(({ title, price, images,id }, idx) => (
            <SplideSlide key={idx}>
              <div className="px-2">
                <Itemcard
                  images={images}
                  title={title}
                  price={price}
                  id={id}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
          {/* Footer */}
      <div className="w-full ">
        <Footer images={images} />
      </div>
    </div>
  );
};

export default Merchandise;
