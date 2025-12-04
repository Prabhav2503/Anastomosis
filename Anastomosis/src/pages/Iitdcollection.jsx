import React from 'react'
import Footer from "../components/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CompleteHoodie from "../assets/completehoodie.svg";
import {useNavigate} from 'react-router-dom';


const Itemcard = ({ images, title, price,id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => (navigate("/payment",{
      state:{
        id:id,
        name:title,
        images:images,
        price:price
      }
    }))} className="w-full max-w-sm mx-auto font-sans cursor-pointer">
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

const merchandiseItems = [
    { title: "Strawberry Pancake", price: "28,000" , images:[CompleteHoodie], id:1},
    { title: "Blueberry Waffle", price: "32,000", images:[CompleteHoodie], id:2 },
    { title: "Chocolate Donut", price: "25,000", images:[CompleteHoodie], id:3 },
    { title: "Vanilla Cupcake", price: "22,000", images:[CompleteHoodie], id:4 },
    { title: "Matcha Latte", price: "30,000", images:[CompleteHoodie], id:5 },
    { title: "Caramel Frappé", price: "35,000", images:[CompleteHoodie], id:6 },
    { title: "Rainbow Cake", price: "45,000", images:[CompleteHoodie], id:7 },
  ];


const iitdcollection = ({images}) => {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>

        <h2 className='text-black font-bold text-2xl sm:text-3xl md:text-5xl '>IIT DELHI COLLECTIONS</h2>
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
        <div className="w-full ">
        <Footer images={images} />
      </div>
    </div>
  )
}

export default iitdcollection