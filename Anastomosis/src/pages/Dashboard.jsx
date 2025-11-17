import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = ({ images }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState({
    registration: false
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
            registration: false
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
      description: 'Fill in your personal details and event information. You will see confirmation after submission.',
      completed: completedSteps.registration,
      action: completedSteps.registration ? () => navigate('/confirmation') : () => navigate('/complete-registration')
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome, {user?.displayName || user?.email?.split('@')[0]}!
          </h2>
          <p className="text-gray-400 text-lg">
            Complete the following steps to finish your registration
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`bg-black bg-opacity-60 backdrop-blur-md rounded-xl shadow-xl p-6 border-2 transition-all ${
                step.completed
                  ? 'border-green-500 bg-opacity-70'
                  : step.locked
                  ? 'border-gray-700 opacity-50'
                  : 'border-blue-500 hover:border-blue-400'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Step Number Circle */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    step.completed
                      ? 'bg-green-500 text-white'
                      : step.locked
                      ? 'bg-gray-700 text-gray-500'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {step.completed ? '✓' : step.number}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>

                  {/* Action Button */}
                  {!step.locked && step.action && (
                    <button
                      onClick={step.action}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
                    >
                      {step.completed ? 'View Confirmation' : 'Start'}
                    </button>
                  )}

                  {step.locked && (
                    <span className="inline-flex items-center gap-2 text-gray-500 font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Locked
                    </span>
                  )}
                </div>
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
