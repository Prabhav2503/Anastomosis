import React from 'react';
import Card from '../components/infocard';
import { FileDown,CalendarArrowDown  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import timelinePDF from '../assets/docs/ANASTOMOSIS_TIMELINE.pdf';
import brochurePDF from '../assets/docs/brochure_Anastomosis.pdf';

const Infopage = ({ images }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      const section = document.getElementById('why-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleDownload = (file, filename) => {
  const link = document.createElement("a");
  link.href = file;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div id="why-section" className="w-full min-h-screen relative bg-white py-20 flex flex-col items-center">

      <div className={`absolute top-20 left-0 w-96 h-96 opacity-5 transition-all duration-1000 transform ${
        isVisible ? 'translate-x-0 rotate-0' : 'translate-x-full rotate-45'
      }`}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0,100 Q 100,0 200,100 Q 100,200 0,100 Z" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>

      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight text-center">
          WHAT IS ANASTOMOSIS ?
        </h1>
      </header>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>

      {/* Description */}
      <p className="text-center text-lg md:text-2xl text-gray-700 mb-16 max-w-4xl leading-relaxed">
        <b>Anastomosis</b> isn't just about learning — it's about <span className="text-gray-900 font-bold">curiosity, discovery,</span> and <span className="text-gray-900 font-bold">inspiration</span>.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl px-4">
        <Card
          body="Anastomosis is a one-of-a-kind national program designed for school students from Classes 8 to 12."
          bg="[#2F68DA]"
          text="white"
        />
        <Card
          body="Through this initiative, selected students get a chance to visit IIT Delhi and AIIMS Delhi,
          interact with brilliant innovators, and experience how new ideas turn into real solutions."
          bg="[#2F68DA]"
          text="white"
        />
        <Card
          body="It brings together the worlds of engineering and medicine — two of the most powerful fields shaping our future."
          bg="[#2F68DA]"
          text="white"
        />
        <Card
          body="Students from across India get a rare chance to walk the halls of IIT Delhi and AIIMS Delhi, see innovation in action, and get a glimpse of the future they could help create."
          bg="[#2F68DA]"
          text="white"
        />
      </div>

{/* Download Section */}
<div className="w-full max-w-4xl mt-16 px-4 flex flex-col items-center gap-4 ">
  <p className="text-center text-lg md:text-2xl text-gray-700 mb-10 max-w-4xl leading-relaxed">
    Download the official <b>brochure</b> and <b>event timeline</b> to explore the complete details of ANASTOMOSIS.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

    {/* Brochure Button */}
    {/* Brochure Button */}
<button
  onClick={() => handleDownload(brochurePDF, "Anastomosis_Brochure.pdf")}
  className="flex items-center justify-center gap-3 w-full bg-[#DBE7FF] text-blue-600 
             py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-2xl 
             transition-all duration-500 hover:scale-105"
>
  <FileDown size={24} color="black" />
  <span className="text-xl">Download Brochure</span>
</button>

{/* Timeline Button */}
<button
  onClick={() => handleDownload(timelinePDF, "Anastomosis_Timeline.pdf")}
  className="flex items-center justify-center gap-3 w-full bg-[#DBE7FF] text-blue-600
             py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-2xl 
             transition-all duration-500 hover:scale-105"
>
  <CalendarArrowDown size={24}  color="black"  />
  <span className="text-xl">Download Timeline</span>
</button>


  </div>
</div>

{/* Register Now Button */}
<div className="w-full max-w-4xl mt-12 px-4 flex justify-center">
  <button
    onClick={() => navigate('/register')}
    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl md:text-2xl font-bold py-5 px-12 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform"
  >
    Register Now
  </button>
</div>


    </div>
  );
};

export default Infopage;