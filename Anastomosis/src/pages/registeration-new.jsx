import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// MOCK CREDENTIALS (edit these)
const MOCK_USERNAME = "edcissexy";  // <---
const MOCK_PASSWORD = "12345";  // <---

const LoginPage = ({ images }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // MOCK LOGIN HANDLER
  const handleMockLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Check mock credentials
      if (
        formData.username === MOCK_USERNAME &&
        formData.password === MOCK_PASSWORD
      ) {
        setSuccess("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-in (for new users)
  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await loginWithGoogle();
      setSuccess("Signed in with Google!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError("Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen mt-10 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={images.logo} 
              alt="Logo" 
              className="h-20 md:h-24 object-contain"
            />
          </div>

          <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-700">
            <h1 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
              LOGIN
            </h1>

            {/* Error */}
            {error && (
              <div className="bg-red-500 bg-opacity-90 text-white p-3 rounded-lg mb-4 text-center text-sm">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-500 bg-opacity-90 text-white p-3 rounded-lg mb-4 text-center text-sm">
                {success}
              </div>
            )}

            {/* LOGIN FORM */}
            <form onSubmit={handleMockLogin} className="space-y-4">
              
              {/* USERNAME */}
              <div>
                <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                  placeholder="Enter username"
                  required
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                  placeholder="Enter password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-600 hover:bg-gray-500 text-white p-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Processing..." : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-600"></div>
              <span className="px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-600"></div>
            </div>

            {/* GOOGLE LOGIN */}
            <button
  onClick={handleGoogleSignIn}
  disabled={loading}
  className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 p-3 rounded-lg font-semibold disabled:opacity-50 shadow-md"
>
  <span>Sign in with Google</span>

  {/* GOOGLE ICON (right side) */}
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
