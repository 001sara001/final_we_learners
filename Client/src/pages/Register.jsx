import React, { useState } from "react";
import "../styles/Register.css";
import {
  IoCloseOutline,
  IoPersonOutline,
  IoMailOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import upload from "../utils/upload";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    picture: '' // Changed from 'pictur' to 'picture'
  });

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const pictureUrl = await upload(file);
        setData({ ...data, picture: pictureUrl });
      } catch (err) {
        console.error('Error uploading file:', err);
      }
    }
  };

  const RegisterUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/auth/register", data);
      const { message } = res.data;

      if (res.status !== 200) {
        throw new Error(message);
      }

      setLoading(false);
      navigate('/login');
      
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className="wrapper">
        <div className="Register-box" id="register-box">
          <form onSubmit={RegisterUser}>
            <h1>Register</h1>
            <span className="icon-close" id="register-close">
              <IoCloseOutline />
            </span>

            <div className="input-box">
              <span className="icon">
                <IoPersonOutline />
              </span>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
              <label>UserName</label>
            </div>
           
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
            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={handleFileInput} />
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & Conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="login-link">
              <p>
                Already have an account?
                <Link to="/login">LogIn</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
