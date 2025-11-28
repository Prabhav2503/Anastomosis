import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import tataBanner from "../assets/tata.jpg";
import { div } from "framer-motion/client";

const Dashboard = ({ images }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [completedSteps, setCompletedSteps] = useState({
    registration: false,
    telegram: false,
    studyMaterial: false,
  });
  const [registrationMeta, setRegistrationMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const debug = new URLSearchParams(location.search).get("debug") === "1";

  // Load user progress from Firestore
  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return;

      try {
        // Load user progress (if any)
        const progressDoc = await getDoc(doc(db, "userProgress", user.uid));
        if (progressDoc.exists()) {
          const data = progressDoc.data();
          setCompletedSteps(
            data.steps || {
              registration: false,
              telegram: false,
              studyMaterial: false,
            }
          );
        }

        // Also check whether a registration document exists (registrations/{uid})
        const regDoc = await getDoc(doc(db, "registrations", user.uid));
        if (regDoc.exists()) {
          const rdata = regDoc.data();
          // mark registration step complete if not already
          setCompletedSteps((prev) => ({ ...prev, registration: true }));
          // capture some metadata to show on the dashboard (e.g., school vs student)
          const meta = {};
          if (rdata.schoolName || rdata.school) meta.type = "school";
          else meta.type = "student";
          setRegistrationMeta({
            type: meta.type,
            summary: rdata.schoolName || rdata.school || rdata.fullName || "",
          });
        }
      } catch (error) {
        console.error("Error loading progress:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images.posterImg;
    link.download = "poster.png"; // filename
    link.click();
  };

  const steps = [
    {
      id: "registration",
      number: 1,
      title: "Complete Registration",
      description: "Fill in your personal details and event information.",
      completed: completedSteps.registration,
      action: completedSteps.registration
        ? () => navigate("/confirmation")
        : () => navigate("/complete-registration"),
    },
    {
      id: "telegram",
      number: 2,
      title: "Join Telegram Channel",
      description:
        "Stay updated with the latest announcements and connect with other participants.",
      completed: completedSteps.telegram,
      action: () => {
        window.open("https://t.me/+QAMyiRF9fnk1Zjk1", "_blank");
      },
    },
    {
      id: "studyMaterial",
      number: 3,
      title: "Study Material",
      description:
        "Access exclusive study resources and preparation materials.",
      completed: completedSteps.studyMaterial,
      locked: !completedSteps.registration,
      action: null,
    },
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <img
                  src={images.logo}
                  alt="Logo"
                  className="h-8 sm:h-10 object-contain"
                />
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Dashboard
                </h1>
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
            {debug && (
              <div className="mb-4 p-4 rounded bg-gray-800 text-white text-sm">
                <div className="font-semibold mb-2">Debug Info (debug=1)</div>
                <pre className="whitespace-pre-wrap text-xs max-h-40 overflow-auto">
                  {JSON.stringify(
                    {
                      user: user
                        ? {
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                          }
                        : null,
                      completedSteps,
                      registrationMeta,
                      loading,
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            )}
            {/* Welcome Section */}
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Welcome, {user?.displayName || user?.email?.split("@")[0]}!
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Your journey to Anastomosis starts here
              </p>
            </div>

            {/* Banner */}
            <div className="mb-6 sm:mb-8 rounded-lg overflow-hidden shadow-xl relative group">
              <img
                src={tataBanner}
                alt="Anastomosis Banner"
                className="w-full h-auto max-h-40 sm:max-h-56 md:max-h-72 object-contain mx-auto"
              />
              <button
                onClick={() =>
                  window.open(
                    "https://tataminiessay.com/?utm_source=paprika&utm_medium=PIL_PVST5",
                    "_blank"
                  )
                }
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white hover:bg-gray-100 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-sm border-2 border-black"
              >
                Take the Pledge
              </button>
            </div>

            {/* Steps - Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`bg-gradient-to-br from-gray-900 to-black rounded-lg p-3 sm:p-6 border transition-all duration-300 ${
                    step.completed
                      ? "border-green-500 shadow-lg shadow-green-500/20"
                      : step.locked
                      ? "border-gray-700 opacity-70"
                      : "border-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl ${
                        step.completed
                          ? "bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg"
                          : step.locked
                          ? "bg-gray-700 text-gray-400"
                          : "bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg"
                      }`}
                    >
                      {step.completed ? "✓" : step.locked ? "🔒" : step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    {step.id === "registration" && registrationMeta && (
                      <div className="inline-block mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white">
                          {registrationMeta.type === "school"
                            ? "School Registration"
                            : "Registered"}
                        </span>
                      </div>
                    )}
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed min-h-[36px] sm:min-h-[40px]">
                      {step.description}
                    </p>

                    {/* Action Button */}
                    {!step.locked && step.action && (
                      <div className="w-full flex flex-col items-center gap-2">
                        {/* Existing Button */}
                        <button
                          onClick={step.action}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                        >
                          {step.completed
                            ? "View Details"
                            : step.id === "telegram"
                            ? "Join Now"
                            : "Start"}
                        </button>

                        {/* NEW Button — only for step 1 when completed */}
                        {step.id === "registration" && step.completed && (
                            <button
                              onClick={downloadImage}
                              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                            >
                              Download Poster
                            </button>
                        )}
                      </div>
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
