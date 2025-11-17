import React from 'react';
import Card from '../components/reasoncard';

const WhyJoinPage = ({images}) => {
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

  return (
    <div id="why-section" className="w-full min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Animated Background Swoosh */}
      <div className={`absolute top-20 right-0 w-96 h-96 opacity-5 transition-all duration-1000 transform ${
        isVisible ? 'translate-x-0 rotate-0' : 'translate-x-full rotate-45'
      }`}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0,100 Q 100,0 200,100 Q 100,200 0,100 Z" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight text-center">
            Why JOIN?
          </h1>
          <div className="mt-4 mx-auto w-24 h-1 bg-gray-300"></div>
        </header>

        {/* Description */}
        <p className="text-center text-lg md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <b>Spend 2 exciting days</b> at <span className="text-gray-900 font-bold">IIT Delhi</span> and <span className="text-gray-900 font-bold">AIIMS Delhi, India's top institutes</span>, and get a rare chance to see <span className="text-gray-900 font-bold">innovation in action.</span>
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card
              icon={images.attend}
              title="Attend"
              description="Exclusive entrepreneurship bootcamps designed especially for young innovators like you."
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Card
              icon={images.meet}
              title="Meet"
              description="Startup founders, researchers, and mentors who are shaping India's future."
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Card
              icon={images.explore}
              title="Explore"
              description="Cutting-edge labs and innovation hubs normally reserved for top students and scholars."
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Card
              icon={images.win}
              title="Win"
              description="Prizes, get mentorship, and earn national-level recognition for your talent and ideas."
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <Card
              icon={images.receive}
              title="Receive"
              description="Prestigious certificates jointly endorsed by IIT Delhi and AIIMS Delhi, validating your achievement."
            />
          </div>
        </div>
      </div>

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

export default WhyJoinPage;
