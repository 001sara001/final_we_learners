import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/EnrollNowAllPages/EnrollNowCommonPage.css'; // Link your CSS file

const EnrollNow = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Language:", selectedLanguage);

    // Redirect based on selected language
    switch (selectedLanguage) {
      case "english":
        navigate("/enroll-now-for-english"); // English enrollment page route
        break;
      case "bangla":
        navigate("/enroll-now-for-bangla"); // Bangla enrollment page route
        break;
      case "turkish":
        navigate("/enroll-now-for-turkish"); // Turkish enrollment page route
        break;
      case "korean":
        navigate("/enroll-now-for-korean"); // Korean enrollment page route
        break;
      case "japanese":
        navigate("/enroll-now-for-japanese"); // Japanese enrollment page route
        break;
      default:
        break;
    }
  };

  return (
    <div className="enroll-now-wrapper">
      <div className="enroll-now-container">
        <h1 className="enroll-now-heading">Enroll Now in Our Language Courses</h1>
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
