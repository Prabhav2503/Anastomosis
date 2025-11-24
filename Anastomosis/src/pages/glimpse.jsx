import GalleryCarousel from '../components/gallery';

export default function Glimpse({ galleryImages, images }) {
  return (
    <div className="w-full p-6 bg-gradient-to-b from-[#EAF2FF] to-white">
      {/* Header */}
      <header className="flex flex-col items-center justify-center p-6 gap-4 text-center">
        <h1 className="text-3xl md:text-4xl text-blue-600 font-bold">
          Glimpses from the Past Editions
        </h1>
      </header>

      {/* Content */}
      <div className="w-full flex flex-col items-center pb-6">
        <GalleryCarousel galleryImages={galleryImages} />
      </div>

      {/* Statistics Section */}
    </div>
  );
}