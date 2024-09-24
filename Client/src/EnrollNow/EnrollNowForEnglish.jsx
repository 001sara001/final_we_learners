import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/EnrollNowAllPages/EnrollNowForEnglish.css'; // Import the CSS file

const EnrollNowForEnglish = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');
  const [user, setUser] = useState(null); // State to hold user data
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Get user data from local storage
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData)); // Parse and set user data
    } else {
      navigate('/login'); // Redirect to login if user data is not available
    }
  }, [navigate]);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSubmit = () => {
    if (selectedLevel) {
      navigate(`/${selectedLevel.toLowerCase()}-page`); // Navigate to the corresponding page
    } else {
      alert('Please select a level before submitting.');
    }
  };

  return (
    <div className="enroll-now-for-english-container">
      {user && <h2 className="username-heading">Welcome, {user.name}!</h2>} {/* Display username */}
      <h1 className="enroll-now-for-english-heading">Enrolled in English Course.</h1>
      <p className="enroll-now-for-english-description">
        Choose the level that best suits your needs and let us know how we can improve.
      </p>

      <div className="enroll-now-for-english-options">
        <button
          className={`enroll-now-for-english-button ${selectedLevel === 'Beginner' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Beginner')}
        >
          Beginner
        </button>
        <button
          className={`enroll-now-for-english-button ${selectedLevel === 'Advanced' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Advanced')}
        >
          Advanced
        </button>
      </div>

      <div className="feedback-section">
        <textarea
          className="feedback-textarea"
          placeholder="Share your feedback or questions here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!selectedLevel}
      >
        Submit
      </button>
    </div>
  );
};

export default EnrollNowForEnglish;
