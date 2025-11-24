import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrationPage = ({ images }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const { signup, login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    altMobile: "",
    school: "",
    class: "",
    state: "",
    city: "",
    teacherName: "",
    teacherMobile: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        const userCredential = await login(formData.email, formData.password);
        if (!userCredential.user.emailVerified) {
          setError("Please verify your email before logging in. Check your inbox for the verification link.");
          setLoading(false);
          return;
        }
        setSuccess("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters");
          setLoading(false);
          return;
        }
        await signup(formData.email, formData.password, formData.name);
        setSuccess("Account created! Please check your email to verify your account before logging in.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      setError("Please enter your email address");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await resetPassword(resetEmail);
      setSuccess("Password reset email sent! Check your inbox.");
      setShowForgotPassword(false);
      setResetEmail("");
    } catch (err) {
      setError(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await loginWithGoogle();
      setSuccess("Signed in with Google!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Decorative circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)`
          }}>
        </div>
      </div>

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

          {/* Card */}
          <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-700">
            <h1 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
              {isLogin ? "LOGIN" : "SIGN UP"}
            </h1>

            {error && (
              <div className="bg-red-500 bg-opacity-90 text-white p-3 rounded-lg mb-4 text-center text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-500 bg-opacity-90 text-white p-3 rounded-lg mb-4 text-center text-sm">
                {success}
              </div>
            )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email & Password - Always shown */}
            <div>
              <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500"
                placeholder={isLogin ? "Enter your password" : "Create a password (min 6 characters)"}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-600 hover:bg-gray-500 text-white p-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
              >
                {loading ? "Processing..." : (isLogin ? "Enter Password" : "Sign Up")}
              </button>
            </div>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {isLogin ? "Sign in with Google" : "Sign up with Google"}
          </button>

          {/* Forgot Password */}
          {isLogin && (
            <div className="mt-4 text-center">
              <button 
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-red-400 hover:text-red-300 text-sm underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Toggle between Login/Signup */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setSuccess("");
              }}
              className="text-gray-300 hover:text-white text-sm"
            >
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span className="underline font-semibold">
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 max-w-md w-full">
            <h2 className="text-2xl font-bold text-white mb-4">Reset Password</h2>
            <p className="text-gray-400 text-sm mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleForgotPassword}>
              <div className="mb-4">
                <label className="block text-gray-300 text-xs font-medium mb-2 uppercase tracking-wider" htmlFor="resetEmail">
                  Email Address
                </label>
                <input
                  type="email"
                  id="resetEmail"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(false);
                    setResetEmail("");
                    setError("");
                  }}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg font-semibold transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white p-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;