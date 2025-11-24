import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/config';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const RegisterSchool = ({ images }) => {
  const [form, setForm] = useState({
    schoolName: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    schoolEmail: '',
    schoolPhone: '',
    teacherName: '',
    teacherPhone: '',
    studentsCount: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const { user, loginWithGoogle } = useAuth();

  useEffect(() => {
    const checkRegistration = async () => {
      if (!user) return;
      
      try {
        const docRef = doc(db, 'schoolRegistrations', user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setIsRegistered(true);
          setRegistrationData(docSnap.data());
        }
      } catch (err) {
        console.error('Error checking registration:', err);
      }
    };

    checkRegistration();
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const sanitizeId = (name) => {
    return name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.schoolName) {
      setError('Please enter the school name');
      return;
    }

    setLoading(true);
    try {
      // If user is not authenticated, sign in with Google first.
      if (!user) {
        try {
          await loginWithGoogle();
        } catch (authErr) {
          console.error('Google sign-in failed', authErr);
          setError('Google sign-in failed. Please allow the popup and try again.');
          setLoading(false);
          return;
        }
      }

      const currentUser = auth.currentUser;
      const payload = {
        ...form,
        createdAt: serverTimestamp(),
        submittedBy: currentUser ? currentUser.uid : null,
        submittedAt: serverTimestamp()
      };

      // Save under `schoolRegistrations/{uid}` to comply with Firestore rules
      if (!currentUser) {
        throw new Error('No authenticated user available after sign-in');
      }
      await setDoc(doc(db, 'schoolRegistrations', currentUser.uid), payload);
      setSuccess('Registration saved successfully');
      setIsRegistered(true);
      setRegistrationData(payload);
      setForm({
        schoolName: '',
        address: '',
        city: '',
        state: '',
        pin: '',
        schoolEmail: '',
        schoolPhone: '',
        teacherName: '',
        teacherPhone: '',
        studentsCount: '',
        notes: ''
      });
    } catch (err) {
      console.error('Save failed', err);
      // Provide a more specific error to the user when possible.
      const msg = err?.code === 'permission-denied'
        ? 'Failed to save: Firestore permission denied. Check your Firestore rules or require authentication.'
        : err?.message || 'Failed to save registration. Try again later.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 md:pt-28">
      {/* Hero - align heading with form by using same grid */}
      <header className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <img src={images.logo} alt="Logo" className="h-14 sm:h-16 w-auto object-contain max-w-[180px] hidden sm:block" />
              <div className="lg:pl-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-tight">Register Your School</h1>
                <p className="text-gray-600 mt-3 max-w-2xl">Register your school and provide the teacher point-of-contact. We'll save the details for coordination and communication.</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {isRegistered ? (
          // Already registered view
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-3">School Already Registered!</h2>
              <p className="text-green-700 mb-6">Your school registration has been submitted successfully.</p>
              
              {registrationData && (
                <div className="bg-white rounded-lg p-6 text-left mt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Registration Details:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">School:</span> {registrationData.schoolName}</p>
                    {registrationData.city && <p><span className="font-medium">City:</span> {registrationData.city}, {registrationData.state}</p>}
                    {registrationData.teacherName && <p><span className="font-medium">Teacher POC:</span> {registrationData.teacherName}</p>}
                    {registrationData.teacherPhone && <p><span className="font-medium">Contact:</span> {registrationData.teacherPhone}</p>}
                  </div>
                </div>
              )}
              
              <p className="text-gray-600 mt-6 text-sm">
                We'll contact you soon at the registered contact details. For any changes or questions, 
                please email us at <a href="mailto:anastomosis@edciitd.com" className="text-blue-600 underline">anastomosis@edciitd.com</a>
              </p>
            </div>
          </div>
        ) : (
          // Registration form view
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form card */}
          <section id="registration-form" className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-200 p-8">

            {error && <div className="bg-red-50 border border-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
            {success && <div className="bg-green-50 border border-green-100 text-green-700 p-3 rounded mb-4">{success}</div>}

            {!user && (
              <div className="mb-4 flex items-center justify-center">
                <button
                  type="button"
                  onClick={async () => {
                    setError('');
                    setLoading(true);
                    try {
                      await loginWithGoogle();
                    } catch (authErr) {
                      console.error('Google sign-in failed', authErr);
                      setError('Google sign-in failed. Please allow the popup and try again.');
                    } finally {
                      setLoading(false);
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-full font-semibold shadow-lg border hover:scale-105 transform transition duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-label="Sign in with Google"
                >
                  {/* Google icon */}
                  <svg className="w-6 h-6" viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335" d="M24 9.5c3.9 0 6.7 1.7 8.3 3l6-6C35.9 2.9 30.4 0 24 0 14.1 0 5.9 4.9 1.9 12.2l7.2 5.6C11.6 12 17 9.5 24 9.5z"/>
                    <path fill="#34A853" d="M46.5 24.3c0-1.6-.1-2.6-.4-3.7H24v7h12.9c-.6 3.2-2.9 7.5-8.2 10.2l7.2 5.6C43.7 40.6 46.5 33.6 46.5 24.3z"/>
                    <path fill="#4A90E2" d="M10.3 31.4c-.8-2.4-1.3-4.9-1.3-7.4 0-2.5.5-4.9 1.3-7.3L4.4 11C.8 15.6 0 19.8 0 25s.8 9.4 4.4 12.9l6-6z"/>
                    <path fill="#FBBC05" d="M24 48c6.5 0 12-2.1 16-5.7l-7.2-5.6C29.6 37.5 27 38.5 24 38.5c-7 0-12.4-2.5-15.9-6.1l-6 6C5.9 43.1 14.1 48 24 48z"/>
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">School Name *</label>
                <input
                  name="schoolName"
                  value={form.schoolName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input name="state" value={form.state} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">PIN / ZIP</label>
                <input name="pin" value={form.pin} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">School Email</label>
                <input name="schoolEmail" value={form.schoolEmail} onChange={handleChange} type="email" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">School Phone</label>
                <input name="schoolPhone" value={form.schoolPhone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Teacher POC Name</label>
                <input name="teacherName" value={form.teacherName} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Teacher POC Phone</label>
                <input name="teacherPhone" value={form.teacherPhone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Estimated Students</label>
                <input name="studentsCount" value={form.studentsCount} onChange={handleChange} type="number" min="0" className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Notes / Message</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" rows={4} />
              </div>

              <div className="sm:col-span-2 flex items-center gap-3 justify-end">
                <button type="button" onClick={() => { setForm({ schoolName: '', address: '', city: '', state: '', pin: '', schoolEmail: '', schoolPhone: '', teacherName: '', teacherPhone: '', studentsCount: '', notes: '' }); setError(''); setSuccess(''); }} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700">Reset</button>
                <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold shadow">
                  {loading ? 'Saving...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          </section>

          {/* Info Panel */}
          <aside className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm lg:sticky lg:top-28 lg:max-w-[320px] lg:self-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What happens next</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                <div>We save your submission and notify our coordination team.</div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016.832 4H3.168a2 2 0 00-1.165.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <div>We'll contact the teacher POC for confirmation and logistics.</div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-500 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.894.553l3 6A1 1 0 0114 10H6a1 1 0 01-.894-1.447l3-6A1 1 0 0110 2z"/></svg>
                <div>Expect a follow-up within 3 working days.</div>
              </li>
            </ul>

            <div className="border-t border-gray-100 mt-5 pt-4">
              <h4 className="text-sm font-medium text-gray-700">Need help?</h4>
              <p className="text-gray-600 text-sm">Email us at <a href="mailto:anastomsis@edciitd.com" className="text-blue-600">anastomsis@edciitd.com</a></p>
            </div>
          </aside>
        </div>
        )}
      </main>
    </div>
  );
};

export default RegisterSchool;
