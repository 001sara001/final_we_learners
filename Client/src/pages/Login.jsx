import React, { useState } from "react";
import { IoCloseOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // State to store user input
  const [data, setData] = useState({
    email: '',   
    password: '',
  });

  // Function to handle form submission
  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message before new login attempt

    try {
      // Send login request to the backend
      const res = await axios.post("http://localhost:8000/auth/login", data);

      // Extract token and user data from response
      const { token, user } = res.data; // Ensure your backend sends user data

      // Check if response status is 200 (successful login)
      if (res.status === 200 && token) {
        // Save token and user data to local storage
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(user)); // Save user data

        // Navigate to the home page
        navigate('/');
      } else {
        throw new Error('Login failed. Please try again.');
      }
    } catch (e) {
      // Capture and display the error message
      console.error('Login Error:', e.response?.data || e.message);
      setError(e.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading regardless of the outcome
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className="wrapper">
        <div className="login-box" id="login-box">
          <form onSubmit={loginUser}>
            <h2>Log In</h2>
            <span className="icon-close" id="login-close">
              <IoCloseOutline />
            </span>

            {/* Email Input */}
            <div className="input-box">
              <span className="icon">
                <IoMailOutline />
              </span>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
              <label>Email</label>
            </div>

            {/* Password Input */}
            <div className="input-box">
              <span className="icon">
                <IoLockClosedOutline />
              </span>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
              <label>Password</label>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {/* Display Error Message */}
            {error && <p className="error-message">{error}</p>}

            {/* Register Link */}
            <div className="register-link">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
