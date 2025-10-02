import Gallery from "../components/gallery"

const JPG = {

}
export default function Glimpse({ images }) {
  return (
    <div className="w-full h-full p-6 "
    >
      {/* Header */}
      <header className="flex items-center justify-center p-6 gap-4 text-white mb-5">
        <h1 className="text-4xl text-blue-600 font-bold">Glimpses from the Past Editions</h1>
      </header>

      {/* Content */}
      <div className="flex flex-col items-center">
        <Gallery JPG={JPG} />
      </div>
    <div className="flex items-center gap-6 px-18 pl-40 text-center">
        <p className="text-xl ">In the most recent chapter, Anastomosis witnessed 4000+ registrations from 200+ schools across India, with 50+ talented students visiting the IIT Delhi and AIIMS Delhi campuses.</p>
        <img src={images.videolink} alt="" className="w-80 mx-auto" />
    </div>
    </div>
  );
}
