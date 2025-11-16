import React from 'react';
import Buildingcard from '../components/buildingcard';

const HomePage = ({ images }) => {
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

    const section = document.getElementById('homepage-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="homepage-section" className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Animated Swoosh Background */}
      <div className={`absolute top-20 right-0 w-96 h-96 opacity-5 transition-all duration-1000 transform ${
        isVisible ? 'translate-x-0 rotate-0' : 'translate-x-full rotate-45'
      }`}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0,100 Q 100,0 200,100 Q 100,200 0,100 Z" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>
      {/* Header Section */}
      <div className="w-full py-16 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center tracking-tight animate-fade-in">
          eDC IITD & eDC AIIMS
        </h1>
        <div className="mt-4 mx-auto w-24 h-1 bg-gray-300"></div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* IIT Delhi Card */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Buildingcard
              image={images.iitdbuilding}
              title="The Entrepreneurship Development Cell, IIT Delhi (eDC IITD)"
              description="is one of the largest student-run organizations in Asia. It helps young minds explore new ideas, learn about startups, and build the confidence to turn their thoughts into real projects."
            />
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={images.runningperson} 
              alt="Innovation" 
              className="hidden lg:block w-full max-w-sm hover:scale-105 transition-transform duration-300" 
            />
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Together, IIT Delhi and AIIMS Delhi — India's dream institutes — give school students a chance to see how 
                <span className="text-blue-600 font-semibold"> engineering and medicine</span> come together to shape the future.
              </p>
            </div>
          </div>

          {/* AIIMS Card */}
          <div className="group animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Buildingcard
              image={images.aiimsbuilding}
              title="The Entrepreneurship Development Cell, AIIMS Delhi (eDC AIIMS)"
              description="drives innovation in medicine. It inspires students to explore healthcare challenges, develop new medical technologies, and create ideas that can impact lives."
            />
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes swoosh-in {
          from {
            opacity: 0;
            transform: translateX(100%) rotate(45deg);
          }
          to {
            opacity: 0.05;
            transform: translateX(0) rotate(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;