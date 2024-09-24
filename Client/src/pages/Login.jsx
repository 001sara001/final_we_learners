import { useState } from "react";
import { IoCloseOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post("http://localhost:8000/auth/login", data);
      const { token, user } = res.data;

      if (res.status === 200 && token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(user));
        navigate('/');
      } else {
        throw new Error('Login failed. Please try again.');
      }
    } catch (e) {
      console.error('Login Error:', e.response?.data || e.message);
      setError(e.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className="wrapper">
        <div className="login-box" id="login-box">
          <form onSubmit={loginUser}>
            <h2>Log In</h2>
            <span className="icon-close" onClick={() => navigate('/')}>
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
              <Link to="/forgot-password">Forgot Password?</Link>
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
                Don’t have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
