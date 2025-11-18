import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import timelinePDF from '../assets/docs/ANASTOMOSIS_TIMELINE.pdf';
import brochurePDF from '../assets/docs/brochure_Anastomosis.pdf';

const Resources = ({ images }) => {
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

    const section = document.getElementById('resources-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const documents = [
    {
      id: 1,
      name: 'Event Timeline',
      description: 'Complete schedule and timeline for Anastomosis',
      fileUrl: timelinePDF,
      category: 'Schedule',
    },
    {
      id: 2,
      name: 'Event Brochure',
      description: 'Complete Brochure Event for Anastomosis',
      fileUrl: brochurePDF,
      category: 'Brochure',
    },
  ];

  const handleDownload = (fileUrl, fileName) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar images={images} />
      
      <div id="resources-section" className="w-full min-h-screen bg-white pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Swoosh */}
        <div className={`absolute bottom-0 left-0 w-96 h-96 opacity-5 transition-all duration-1000 transform ${
          isVisible ? 'translate-x-0 rotate-0' : '-translate-x-full -rotate-45'
        }`}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 0,100 Q 100,0 200,100 Q 100,200 0,100 Z" fill="currentColor" className="text-blue-600" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <header className="flex flex-col items-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight text-center">
              Resources
            </h1>
            <div className="mt-4 mx-auto w-24 h-1 bg-gray-300"></div>
          </header>

          {/* Description */}
          <p className="text-center text-lg md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Access all important documents, schedules, and resources for <span className="text-gray-900 font-bold">Anastomosis</span>.
          </p>

          {/* Downloads List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {documents.map((doc, index) => (
              <div 
                key={doc.id}
                className="animate-slide-up" 
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md group">
                  <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left: Document Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors">
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        
                        {/* Text Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                            {doc.name}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base mb-2">
                            {doc.description}
                          </p>
                          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                              {doc.category}
                            </span>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Download Button */}
                    <button
                      onClick={() => handleDownload(doc.fileUrl, doc.name)}
                      className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap md:w-auto w-full"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          {/* <div className="mt-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                If you're having trouble downloading any documents or need additional resources, please contact us.
              </p>
              <a 
                href="mailto:team@edciitd.com" 
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm md:text-base"
              >
                Contact Support
              </a>
            </div>
          </div> */}
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

      <Footer images={images} />
    </div>
  );
};

export default Resources;
