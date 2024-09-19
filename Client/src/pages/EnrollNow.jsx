// src/pages/EnrollNow.jsx
import React, { useState } from 'react';
import '../styles/EnrollNow.css';  // Import the CSS file

const EnrollNow = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSubmit = () => {
    if (selectedLevel) {
      alert(`Enrolled in ${selectedLevel} level. Feedback: ${feedback}`);
      // Here you can add logic to handle form submission
    } else {
      alert('Please select a level before submitting.');
    }
  };

  return (
    <div className="enroll-now-container">
      <h1 className="enroll-now-heading">Enroll in a Course</h1>
      <p className="enroll-now-description">
        Choose the level that best suits your needs and let us know how we can improve.
      </p>

      <div className="enroll-now-options">
        <button
          className={`enroll-now-button ${selectedLevel === 'Easy' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Easy')}
        >
          Easy
        </button>
        <button
          className={`enroll-now-button ${selectedLevel === 'Medium' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Medium')}
        >
          Medium
        </button>
        <button
          className={`enroll-now-button ${selectedLevel === 'Advanced' ? 'selected' : ''}`}
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

export default EnrollNow;
