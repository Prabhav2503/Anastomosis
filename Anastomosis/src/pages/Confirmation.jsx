import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Confirmation = ({ images }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    student: false,
    parent: false,
    location: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    const loadRegistrationData = async () => {
      if (!user) return;
      
      try {
        const regDoc = await getDoc(doc(db, 'registrations', user.uid));
        if (regDoc.exists()) {
          setRegistrationData(regDoc.data());
        } else {
          setError('Registration data not found. Please complete registration first.');
        }
      } catch (err) {
        console.error('Error loading registration:', err);
        setError('Failed to load registration data.');
      } finally {
        setLoading(false);
      }
    };

    loadRegistrationData();
  }, [user]);

  const handlePrint = () => {
    // Expand all sections before printing
    setExpandedSections({
      student: true,
      parent: true,
      location: true
    });
    
    // Wait for state update then print
    setTimeout(() => {
      window.print();
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !registrationData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center">
        <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-700 max-w-md">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Error</h2>
            <p className="text-gray-400 mb-6">{error}</p>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @media print {
          .print\\:show-content {
            display: block !important;
          }
          .print\\:hide-button {
            display: none !important;
          }
          .print\\:remove-border {
            border: none !important;
          }
          @page {
            margin: 1cm;
          }
        }
      `}</style>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <img src={images.logo} alt="Logo" className="h-10 object-contain" />
          </div>
          <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">Print</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 text-center">
          <div className="mx-auto w-16 h-16 md:w-24 md:h-24 bg-green-500 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
            <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Registration Successful!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-1 md:mb-2">
            Welcome to <span className="font-bold text-blue-600">Anastomosis 2026</span>
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Your journey to innovation starts here
          </p>
        </div>

        {/* Registration ID Card */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white mb-6 md:mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="text-blue-100 text-xs md:text-sm uppercase tracking-wider mb-2">Registration ID</p>
              <p className="text-2xl md:text-4xl font-bold font-mono tracking-wider break-all">
                {registrationData.userId.slice(0, 12).toUpperCase()}
              </p>
            </div>
            <div className="text-center md:text-right w-full md:w-auto">
              <p className="text-blue-100 text-xs md:text-sm uppercase tracking-wider mb-2">Registered On</p>
              <p className="text-xl md:text-2xl font-semibold">
                {new Date(registrationData.createdAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg mb-6 print:shadow-none">
          <button
            onClick={() => toggleSection('student')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors print:hide-button"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Student Information</h3>
            </div>
            <svg
              className={`w-6 h-6 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                expandedSections.student ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`px-6 pb-6 border-t-2 border-gray-100 print:block print:show-content ${expandedSections.student ? '' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <DetailCard label="Full Name" value={registrationData.fullName} />
              <DetailCard label="Email Address" value={registrationData.email} />
              <DetailCard label="Phone Number" value={registrationData.phoneNumber} />
              {registrationData.alternatePhone && (
                <DetailCard label="Alternate Phone" value={registrationData.alternatePhone} />
              )}
              <DetailCard label="Class" value={`Class ${registrationData.class}`} />
              <DetailCard label="School" value={registrationData.school} fullWidth />
            </div>
          </div>
        </div>

        {/* Parent Information */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg mb-6 print:shadow-none">
          <button
            onClick={() => toggleSection('parent')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors print:hide-button"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Parent & Guardian Details</h3>
            </div>
            <svg
              className={`w-6 h-6 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                expandedSections.parent ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`px-6 pb-6 border-t-2 border-gray-100 print:block print:show-content ${expandedSections.parent ? '' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <DetailCard label="Father's Name" value={registrationData.fatherName} />
              <DetailCard label="Mother's Name" value={registrationData.motherName} />
            </div>
          </div>
        </div>

        {/* Location & Teacher Information */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg mb-8 print:shadow-none">
          <button
            onClick={() => toggleSection('location')}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors print:hide-button"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Location & Contact</h3>
            </div>
            <svg
              className={`w-6 h-6 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                expandedSections.location ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`px-6 pb-6 border-t-2 border-gray-100 print:block print:show-content ${expandedSections.location ? '' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <DetailCard label="City" value={registrationData.city} />
              <DetailCard label="State" value={registrationData.state} />
              <DetailCard label="Teacher Name" value={registrationData.teacherName} />
              <DetailCard label="Teacher Phone" value={registrationData.teacherPhone} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const DetailCard = ({ label, value, fullWidth }) => (
  <div className={`${fullWidth ? 'md:col-span-2' : ''}`}>
    <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
    <p className="text-lg font-semibold text-gray-900">{value}</p>
  </div>
);

const NextStep = ({ number, title, description }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-gray-400 text-sm mb-1">{label}</span>
    <span className="text-white font-semibold">{value}</span>
  </div>
);

export default Confirmation;
