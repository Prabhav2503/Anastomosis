import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer";

import { Star, ShoppingCart } from "lucide-react";

export default function ProductDetail({images}) {
  const {state} = useLocation();
  const navigate =  useNavigate();
  const [selectedImage, setSelectedImage] = useState(state?.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = [
    { name: "Blue", value: "#2563eb", border: "#1e3a8a" },
    { name: "Gray", value: "#d1d5db", border: "#9ca3af" },
    { name: "Black", value: "#000000", border: "#1f2937" },
  ];

  const handleBuyNow = () => {
    console.log("Buy Now clicked", {...state, color:selectedColor, size: selectedSize});
    
  }

  return (
    <div className="mt-30 px-6 font-sans bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  rounded-2xl p-8 lg:p-12">
        {/* Left: Images */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src={selectedImage}
              alt="Anastomosis T-shirt Hoodie"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {state.images.map((i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200"
              >
                <img
                  src={i}
                  alt="Thumbnail"
                  className="w-full h-auto"
                  onClick={() => setSelectedImage(i)}
                />
              </div>
            ))}
          </div>
          <div className="font-sans">
            {/* Description Pill */}
            <div className="inline-block bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-full text-lg mb-6 shadow-sm">
              Description
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
              <li>• 180 GSM, 100% Cotton, Pre-Shrunk & Bio-Washed Fabric</li>
              <li>• Screen Printed</li>
              <li>• Comfy Shoulders</li>
              <li>
                • Colors may vary due to photography and your screen setting
              </li>
            </ul>
          </div>

          <div className=" w-full py-8 font-sans">
            {/* Wash & Care Title */}
            <h4 className="font-bold text-lg text-gray-900 mb-5">
              Wash & Care:
            </h4>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-700 w-full text-base leading-relaxed">
              <li>• Do not iron directly on the print</li>
              <li>
                • Always turn your garment{" "}
                <span className="font-bold">INSIDE OUT</span> before washing &
                drying to prevent fading
              </li>
              <li>• Hand/Machine wash with similar clothes in COLD water</li>
              <li>
                • Dry on a flat surface as hanging may cause measurement
                variations
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {state.name}
            </h1>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  (59+ Reviews)
                </span>
              </div>
              <span className="text-green-600 font-medium text-sm">
                In stock
              </span>
            </div>

            {/* Colors */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-700 font-medium">Colours:</span>

              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`
          w-9 h-9 rounded-full border-4 transition 
          ${selectedColor === c.name ? "ring-4 ring-black" : ""}
        `}
                    style={{
                      backgroundColor: c.value,
                      borderColor: c.border,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Personality Test Banner */}
            <div className="bg-black text-white rounded-2xl p-6 text-center mb-8">
              <h3 className="text-xl font-bold mb-2">
                Take a quick Personality Test and Find Your Spirit
              </h3>
              <button onClick={() => navigate('/take-test')} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Take Test
              </button>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <label className="block text-lg font-medium text-gray-800 mb-3">
                Size Chart
              </label>
              <div className="flex gap-3 flex-wrap">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
        w-14 h-14 border-2 rounded-lg font-medium transition
        ${
          selectedSize === size
            ? "border-black bg-gray-100"
            : "border-gray-300 hover:border-black"
        }
      `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Buy Button */}
            <div className="flex md:flex-row flex-col gap-5 items-center justify-between mb-10">
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  ₹{state.price}
                </span>
                <span className="text-xl text-gray-500 line-through ml-3">
                  ₹1000
                </span>
                <span className="text-green-600 font-bold text-xl ml-3">
                  (70% off)
                </span>
              </div>

              <button
                onClick={handleBuyNow}
                className="bg-red-600 text-white px-12 py-5 rounded-xl text-xl font-bold 
                                 hover:bg-red-700 transition flex items-center gap-3 shadow-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                Buy Now
              </button>
            </div>

            {/* Sizing Guide */}
            <div className=" font-sans">
              {/* Title Pill */}
              <span className="inline-block bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-full text-lg mb-8">
                Sizing & guide
              </span>

              {/* Table-like List */}
              <div className="space-y-6 text-gray-800">
                <div className="flex justify-between items-baseline border-b border-gray-300 pb-4">
                  <span className="font-medium text-blue-600">
                    Sleeve Length
                  </span>
                  <span className="text-right">Half Sleeves</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-gray-300 pb-4">
                  <span className="font-medium text-blue-600">Type</span>
                  <span className="text-right">Shiny dress</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-gray-300 pb-4">
                  <span className="font-medium text-blue-600">Length</span>
                  <span className="text-right">Regular</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-gray-300 pb-4">
                  <span className="font-medium text-blue-600">Closure</span>
                  <span className="text-right">Button</span>
                </div>

                <div className="flex justify-between items-baseline border-b border-gray-300 pb-4">
                  <span className="font-medium text-blue-600">Fabric Type</span>
                  <span className="text-right">Linen</span>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="font-medium text-blue-600">
                    Size Available
                  </span>
                  <span className="text-right">XS, S, M, L XL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer images={images}/>
      </div>
    </div>
  );
}
