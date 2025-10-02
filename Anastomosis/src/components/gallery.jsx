import { useRef, useState } from "react";
import Rightarrow from "../assets/galleryrightarrow.svg"
import Leftarrow from "../assets/galleryleftarrow.svg"

export default function Gallery({JPG }) {
  const scrollRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  // add your images here
  const galleryItems = [
    { id: 1, src: JPG.img8, span: "col-start-1 col-end-3 row-start-1 row-end-3" },
    { id: 2, src: JPG.img9, span: "col-start-3 col-end-4 row-start-1 row-end-3" },
    { id: 3, src: JPG.img10, span: "col-start-4 col-end-5 row-start-1 row-end-3" },
    { id: 4, src: JPG.img6, span: "h-full" },
    { id: 5, src: JPG.img11, span: "col-start-6 col-end-8" },
    { id: 6, src: JPG.img1, span: "col-start-5 col-end-7" },
    { id: 7, src: JPG.img3, span: "col-start-7 col-end-8" },
  ];

  return (
    <section className="max-w-7xl mx-auto">

      <div className="mx-8 relative pt-10 w-[90%] sm:w-[90%] md:w-[90%] lg:w-full">
        <div
          ref={scrollRef}
          className="w-full h-[500px]  overflow-x-hidden overflow-y-hidden"
        >
          <div className="grid grid-flow-col auto-cols-[200px] md:auto-cols-[400px] gap-4 grid-rows-2 content-center h-full">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setModalOpen(true);
                }}
                className={`flex items-center justify-center bg-blue-500 text-white rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 h-full ${item.span}`}
              >
                <img
                  src={item.src}
                  alt="Gallery item"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 -translate-y-1/2 px-3 py-2 bg-gray-800/70 rounded hover:bg-gray-800"
        >
          <img src={Leftarrow} alt="Left" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 -translate-y-1/2 px-3 py-2 bg-gray-800/70 rounded hover:bg-gray-800"
        >
          <img src={Rightarrow} alt="Right" />
        </button>

        {/* Enlarged View */}
        {modalOpen && activeItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div
              onClick={() => setModalOpen(false)}
              className="flex items-center justify-center w-[67vw] h-[80vh] bg-transparent rounded-lg shadow-xl cursor-pointer"
            >
              <img
                src={activeItem.src}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
