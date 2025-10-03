import GalleryCarousel from '../components/gallery';

export default function Glimpse({ galleryImages, images }) {
  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#EAF2FF] to-white">
      {/* Header */}
      <header className="flex flex-col items-center justify-center p-6 gap-4 text-center">
        <h1 className="text-3xl md:text-4xl text-blue-600 font-bold">
          Glimpses from the Past Editions
        </h1>
      </header>

      {/* Content */}
      <div className="w-full flex flex-col items-center">
        <GalleryCarousel galleryImages={galleryImages} />
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-18 lg:px-40 text-center mt-8">
        <p className="text-base md:text-lg lg:text-xl text-gray-800">
          In the most recent chapter, Anastomosis witnessed 4000+ registrations from 200+ schools
          across India, with 50+ talented students visiting the IIT Delhi and AIIMS Delhi campuses.
        </p>
        <img
          src={images.videolink}
          alt="Video Link"
          className="w-64 md:w-80 lg:w-96 mx-auto"
        />
      </div>
    </div>
  );
}
