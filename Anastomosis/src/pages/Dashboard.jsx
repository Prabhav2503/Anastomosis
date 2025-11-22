import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = ({ images }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState({
    registration: false,
    telegram: false,
    studyMaterial: false
  });
  const [loading, setLoading] = useState(true);

  // Load user progress from Firestore
  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return;
      
      try {
        const progressDoc = await getDoc(doc(db, 'userProgress', user.uid));
        if (progressDoc.exists()) {
          const data = progressDoc.data();
          setCompletedSteps(data.steps || {
            registration: false,
            telegram: false,
            studyMaterial: false
          });
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const steps = [
    {
      id: 'registration',
      number: 1,
      title: 'Complete Registration',
      description: 'Fill in your personal details and event information.',
      completed: completedSteps.registration,
      action: completedSteps.registration ? () => navigate('/confirmation') : () => navigate('/complete-registration')
    },
    {
      id: 'telegram',
      number: 2,
      title: 'Join Telegram Channel',
      description: 'Stay updated with the latest announcements and connect with other participants.',
      completed: completedSteps.telegram,
      action: () => {
        window.open('https://t.me/dummylink', '_blank');
      }
    },
    {
      id: 'studyMaterial',
      number: 3,
      title: 'Study Material',
      description: 'Access exclusive study resources and preparation materials.',
      completed: completedSteps.studyMaterial,
      locked: !completedSteps.registration,
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={images.logo} alt="Logo" className="h-10 object-contain" />
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Welcome Section */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Welcome, {user?.displayName || user?.email?.split('@')[0]}!
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Your journey to Anastomosis starts here
          </p>
        </div>

        {/* Banner */}
        <div className="mb-6 sm:mb-8 rounded-lg overflow-hidden shadow-xl relative group">
          <img 
            src="/src/assets/tata.jpg" 
            alt="Anastomosis Banner" 
            className="w-full h-auto object-contain bg-black"
          />
          <button
            onClick={() => window.open('https://tataminiessay.com/', '_blank')}
            className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base border-2 border-black"
          >
            Take the Pledge
          </button>
        </div>

        {/* Steps - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 sm:p-6 border transition-all duration-300 ${
                step.completed
                  ? 'border-green-500 shadow-lg shadow-green-500/20'
                  : step.locked
                  ? 'border-gray-700 opacity-70'
                  : 'border-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1'
              }`}
            >
              {/* Step Number Circle */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${
                    step.completed
                      ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg'
                      : step.locked
                      ? 'bg-gray-700 text-gray-400'
                      : 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg'
                  }`}
                >
                  {step.completed ? '✓' : step.locked ? '🔒' : step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed min-h-[45px]">
                  {step.description}
                </p>

                {/* Action Button */}
                {!step.locked && step.action && (
                  <button
                    onClick={step.action}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                  >
                    {step.completed ? 'View Details' : step.id === 'telegram' ? 'Join Now' : 'Start'}
                  </button>
                )}

                {step.locked && (
                  <div className="text-gray-400 text-xs sm:text-sm font-medium py-2 bg-gray-800/50 rounded-lg">
                    Complete registration to unlock
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
