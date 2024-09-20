import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "../layouts/Button"; // Ensure this is your button component
import '../styles/EnrollNow.css'; // Link your CSS file

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
        navigate("/enroll-now-for-english"); // Replace with your actual English enrollment page route
        break;
      case "bangla":
        navigate("/enroll-now-for-bangla"); // Replace with your actual Bangla enrollment page route
        break;
      case "turkish":
        navigate("/enroll-now-for-turkish"); // Replace with your actual Turkish enrollment page route
        break;
      case "korean":
        navigate("/enroll-now-for-korean"); // Replace with your actual Korean enrollment page route
        break;
      case "japanese":
        navigate("/enroll-now-for-japanese"); // Replace with your actual Japanese enrollment page route
        break;
      default:
        break;
    }
  };

  return (
    <div className="learn-more-wrapper">
      <div className="learn-more-container">
        <h1 className="learn-more-heading">Enroll Now in Our Language Courses</h1>
        <p className="learn-more-description">
          Choose a language you would like to enroll in:
        </p>

        <form className="learn-more-form" onSubmit={handleSubmit}>
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

          <Button className="submit-button" title="Enroll Now" />
        </form>
      </div>
    </div>
  );
};

export default EnrollNow;
