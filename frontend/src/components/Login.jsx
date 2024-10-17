import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Toggle for forgot password popup
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [message, setMessage] = useState(""); // Success/Error message
  const navigate = useNavigate(); // Add useNavigate for routing

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", response.data.token);
      onLoginSuccess();
    } catch (err) {
      console.error("Login Error:", err.response.data);
      setMessage(err.response.data.message || "Login failed");
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forgot-password", { phoneNumber });
      setMessage("A reset link has been sent to your phone.");
      setShowForgotPassword(false);
      navigate("/reset-password");
    } catch (err) {
      console.error("Forgot Password Error:", err.response.data);
      setMessage(err.response.data.message || "Failed to send reset link");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-300">
            Login
          </button>
          <button type="button" onClick={() => setShowForgotPassword(true)} className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </button>
        </div>
      </form>

      {/* Forgot Password Popup */}
      {showForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 transition duration-300"
                >
                  Send Reset Link
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>
            {message && <p className="text-sm text-green-500 mt-4">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
