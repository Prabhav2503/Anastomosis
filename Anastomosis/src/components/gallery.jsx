import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import '@splidejs/splide/dist/css/splide-default.min.css'; // Optional: Default theme CSS

const GalleryCarousel = ({ galleryImages }) => {
  // Sample images array (replace with your actual image paths or URLs)

  return (
    <div className="splide-container my-8">
      <Splide
        options={{
          rewind: true, // Loops back to start when reaching the end
          perPage: 3,   // Number of slides per page
          perMove: 1,   // Number of slides to move per transition
          gap: '1rem',  // Gap between slides
          pagination: false, // Show dots
          arrows: true,     // Show navigation arrows
          autoplay: false,   // Auto-play (optional)
          interval: 3000,   // 3 seconds interval for autoplay
          breakpoints: {
            640: { perPage: 1 }, // 1 slide on mobile
            768: { perPage: 2 }, // 2 slides on tablet
          },
        }}
        aria-label="Image Gallery"
      >
        {galleryImages.map((imageSrc, index) => (
          <SplideSlide key={index}>
            <img
              src={imageSrc}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default GalleryCarousel;