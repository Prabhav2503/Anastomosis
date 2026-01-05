import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';

const CompleteRegistration = ({ images }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('form'); // 'form' or 'review'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [schoolSearch, setSchoolSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    school: '',
    class: '',
    state: '',
    city: '',
    pincode: '',
    phoneNumber: '',
    alternatePhone: '',
    teacherName: '',
    teacherPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle phone number fields - only allow digits and limit to 10
    if (name === 'phoneNumber' || name === 'alternatePhone' || name === 'teacherPhone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: digits });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSearchSchools = async () => {
    if (!schoolSearch.trim()) {
      setError('Please enter a school name to search');
      return;
    }
    
    setSearching(true);
    setError('');
    
    try {
      const schoolsRef = collection(db, 'schoolRegistrations');
      const schoolsSnapshot = await getDocs(schoolsRef);
      
      const results = [];
      schoolsSnapshot.forEach((doc) => {
        const data = doc.data();
        const schoolName = data.schoolName || '';
        
        // Case-insensitive search
        if (schoolName.toLowerCase().includes(schoolSearch.toLowerCase())) {
          results.push({
            id: doc.id,
            schoolName: data.schoolName,
            teacherName: data.teacherName,
            teacherPhone: data.teacherPhone,
            city: data.city,
            state: data.state
          });
        }
      });
      
      setSearchResults(results);
      setShowResults(true);
      
      if (results.length === 0) {
        setError('No schools found. Please check the spelling or register your school first.');
      }
    } catch (err) {
      console.error('Error searching schools:', err);
      setError('Failed to search schools. Please try again.');
    } finally {
      setSearching(false);
    }
  };

  const handleSelectSchool = (school) => {
    setFormData({
      ...formData,
      school: school.schoolName,
      teacherName: school.teacherName || '',
      teacherPhone: (school.teacherPhone || '').replace(/\D/g, '').slice(-10)
    });
    setSchoolSearch('');
    setShowResults(false);
    setSearchResults([]);
  };

  const handleReview = (e) => {
    e.preventDefault();
    setCurrentStep('review');
  };

  const handleEdit = () => {
    setCurrentStep('form');
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    try {
      // console.log('Starting registration submission...');
      // console.log('User UID:', user.uid);
      // console.log('Form data:', formData);
      
      // Save registration data to Firestore
      // console.log('Saving to registrations collection...');
      await setDoc(doc(db, 'registrations', user.uid), {
        userId: user.uid,
        email: user.email,
        fullName: formData.fullName,
        fatherName: formData.fatherName,
        motherName: formData.motherName,
        school: formData.school,
        class: formData.class,
        state: formData.state,
        city: formData.city,
        pincode: formData.pincode,
        phoneNumber: `+91${formData.phoneNumber}`,
        alternatePhone: formData.alternatePhone ? `+91${formData.alternatePhone}` : '',
        teacherName: formData.teacherName,
        teacherPhone: `+91${formData.teacherPhone}`,
        registrationCompleted: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      console.log('Registration data saved successfully');

      // Update user progress
      console.log('Saving to userProgress collection...');
      await setDoc(doc(db, 'userProgress', user.uid), {
        userId: user.uid,
        steps: {
          registration: true
        },
        updatedAt: new Date().toISOString()
      });
      console.log('User progress saved successfully');

      // Navigate to confirmation page
      navigate('/confirmation');
    } catch (err) {
      console.error('Error saving registration:', err);
      console.error('Error code:', err.code);
      console.error('Error message:', err.message);
      setError(`Failed to save registration: ${err.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Header */}
      <div className="bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <img src={images.logo} alt="Logo" className="h-10 object-contain" />
            <h1 className="text-2xl font-bold text-white">Complete Registration</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentStep === 'form' ? (
          // FORM VIEW
          <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Registration Details
            </h2>
            <p className="text-gray-400 text-center mb-4">
              Please fill in all the required information
            </p>
            <p className="text-gray-400 text-center mb-8">
              Deadline has been extended till 15 January 2026
            </p>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                <p className="text-red-400 text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleReview} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Parent Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Father's Name *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Father's name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mother's Name *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Mother's name"
                    required
                  />
                </div>
              </div>

              {/* School with Search */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  School Name *
                </label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={schoolSearch}
                      onChange={(e) => setSchoolSearch(e.target.value)}
                      className="flex-1 p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Search for your school"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleSearchSchools())}
                    />
                    <button
                      type="button"
                      onClick={handleSearchSchools}
                      disabled={searching}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-200 disabled:opacity-50 flex items-center gap-2"
                    >
                      {searching ? (
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                      Search
                    </button>
                  </div>
                  
                  {/* Search Results Dropdown */}
                  {showResults && searchResults.length > 0 && (
                    <div className="bg-gray-800 border border-gray-600 rounded-lg max-h-60 overflow-y-auto">
                      {searchResults.map((school) => (
                        <button
                          key={school.id}
                          type="button"
                          onClick={() => handleSelectSchool(school)}
                          className="w-full text-left p-3 hover:bg-gray-700 border-b border-gray-700 last:border-b-0 transition duration-150"
                        >
                          <div className="text-white font-semibold">{school.schoolName}</div>
                          <div className="text-gray-400 text-sm">Teacher: {school.teacherName || 'N/A'}</div>
                          <div className="text-gray-500 text-xs">{school.city}, {school.state}</div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Manual Entry */}
                  <div>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Or enter manually"
                      required
                    />
                    <p className="text-gray-500 text-xs mt-1">Search above or type your school name manually</p>
                  </div>
                </div>
              </div>

              {/* Class, State, City */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Class *
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="State"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Pincode"
                    maxLength="6"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg bg-gray-700 border border-r-0 border-gray-600 text-white">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="flex-1 p-3 rounded-r-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="10-digit phone number"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Alternate Phone
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg bg-gray-700 border border-r-0 border-gray-600 text-white">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleChange}
                      className="flex-1 p-3 rounded-r-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="10-digit phone (optional)"
                      maxLength="10"
                      pattern="[0-9]{10}"
                    />
                  </div>
                </div>
              </div>

              {/* Teacher Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Teacher Name *
                  </label>
                  <input
                    type="text"
                    name="teacherName"
                    value={formData.teacherName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Teacher's name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Teacher Phone *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg bg-gray-700 border border-r-0 border-gray-600 text-white">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="teacherPhone"
                      value={formData.teacherPhone}
                      onChange={handleChange}
                      className="flex-1 p-3 rounded-r-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="10-digit phone number"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition duration-200"
                >
                  Review Details
                </button>
              </div>
            </form>
          </div>
        ) : (
          // REVIEW VIEW
          <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Review Your Details
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Please verify all information before submitting
            </p>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                <p className="text-red-400 text-center">{error}</p>
              </div>
            )}

            <div className="space-y-4 mb-8">
              <ReviewRow label="Email" value={user?.email} />
              <ReviewRow label="Full Name" value={formData.fullName} />
              <ReviewRow label="Father's Name" value={formData.fatherName} />
              <ReviewRow label="Mother's Name" value={formData.motherName} />
              <ReviewRow label="School" value={formData.school} />
              <ReviewRow label="Class" value={formData.class} />
              <ReviewRow label="State" value={formData.state} />
              <ReviewRow label="City" value={formData.city} />
              <ReviewRow label="Pincode" value={formData.pincode} />
              <ReviewRow label="Phone Number" value={`+91 ${formData.phoneNumber}`} />
              {formData.alternatePhone && (
                <ReviewRow label="Alternate Phone" value={`+91 ${formData.alternatePhone}`} />
              )}
              <ReviewRow label="Teacher Name" value={formData.teacherName} />
              <ReviewRow label="Teacher Phone" value={`+91 ${formData.teacherPhone}`} />
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleEdit}
                disabled={loading}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Edit Details
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Confirm & Submit'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ReviewRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-700">
    <span className="text-gray-400 font-medium">{label}</span>
    <span className="text-white font-semibold">{value}</span>
  </div>
);

export default CompleteRegistration;
