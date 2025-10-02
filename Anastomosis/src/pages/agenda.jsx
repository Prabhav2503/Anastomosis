import React, { useState, useEffect } from 'react';
import { Day1Page, Day2Page } from "../components/days";

const AgendaPage = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaY;
      if (!isFading) { // Prevent multiple fades during transition
        setIsFading(true);
        // Start fade-out immediately
        setTimeout(() => {
          setCurrentPage((prev) => (delta > 0 ? (prev === 1 ? 1 : prev + 1) : (prev === 0 ? 0 : prev - 1)));
          // Fade-in after page switch
          setTimeout(() => setIsFading(false), 500); // Match fade-in duration
        }, 500); // Fade-out duration
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [isFading]);

  return (
    <div className=" overflow-hidden">
      <div
        className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
        style={{ height: '80vh' }}
      >
        {currentPage === 0 && <Day1Page images={images} />}
        {currentPage === 1 && <Day2Page images={images} />}
      </div>
    </div>
  );
};

export default AgendaPage;