import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/EnrollNowAllPages/EnrollNowCommonPage.css';

const EnrollNow = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data is available in local storage
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData)); // Parse and set user data
    } else {
      // Redirect to login if user is not logged in
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Language:", selectedLanguage);

    // Redirect based on selected language
    switch (selectedLanguage) {
      case "english":
        navigate("/enroll-now-for-english");
        break;
      case "bangla":
        navigate("/enroll-now-for-bangla");
        break;
      case "turkish":
        navigate("/enroll-now-for-turkish");
        break;
      case "korean":
        navigate("/enroll-now-for-korean");
        break;
      case "japanese":
        navigate("/enroll-now-for-japanese");
        break;
      default:
        break;
    }
  };

  return (
    <div className="enroll-now-wrapper">
      <div className="enroll-now-container">
        <h1 className="enroll-now-heading">Enroll Now in Our Language Courses</h1>
        {user && <p>Welcome, {user.name}!</p>} {/* Display user name if available */}
        <p className="enroll-now-description">
          Choose a language you would like to enroll in:
        </p>

        <form className="enroll-now-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="language">Select Language</label>
            <select
              id="language"
              name="language"
              value={selectedLanguage}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select a language</option>
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="turkish">Turkish</option>
              <option value="korean">Korean</option>
              <option value="japanese">Japanese</option>
            </select>
          </div>

          <button className="submit-button" type="submit">Enroll Now</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollNow;
