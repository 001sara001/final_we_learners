import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnrollNowAllPages/EnrollNowForBangla.css';

const EnrollNowForBangla = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSubmit = () => {
    if (selectedLevel) {
      navigate(`/${selectedLevel.toLowerCase()}-bangla-page`);
    } else {
      alert('জমা দেওয়ার আগে একটি স্তর নির্বাচন করুন। (Please select a level before submitting.)');
    }
  };

  return (
    <div className="enroll-now-for-bangla-container">
      <h1 className="enroll-now-for-bangla-heading">
        বাংলা কোর্সে আপনার নিবন্ধন সম্পন্ন হয়েছে। <span style={{ fontSize: 'small' }}>(You have registered for the Bangla course.)</span>
      </h1>
      <p className="enroll-now-for-bangla-description">
        আপনার প্রয়োজনের জন্য সবচেয়ে উপযুক্ত স্তর নির্বাচন করুন এবং আমাদের জানান কিভাবে আমরা উন্নতি করতে পারি। <span style={{ fontSize: 'small' }}>(Select the level that best suits your needs and let us know how we can improve.)</span>
      </p>

      <div className="enroll-now-for-bangla-options">
        <button className={`enroll-now-for-bangla-button ${selectedLevel === 'Easy' ? 'selected' : ''}`} onClick={() => handleLevelChange('Easy')}>
          সহজ <span style={{ fontSize: 'small' }}>(Easy)</span>
        </button>
        <button className={`enroll-now-for-bangla-button ${selectedLevel === 'Medium' ? 'selected' : ''}`} onClick={() => handleLevelChange('Medium')}>
          মধ্যম <span style={{ fontSize: 'small' }}>(Medium)</span>
        </button>
        <button className={`enroll-now-for-bangla-button ${selectedLevel === 'Advanced' ? 'selected' : ''}`} onClick={() => handleLevelChange('Advanced')}>
          উন্নত <span style={{ fontSize: 'small' }}>(Advanced)</span>
        </button>
      </div>

      <div className="feedback-section">
        <textarea 
          className="feedback-textarea" 
          placeholder="এখানে আপনার মতামত বা প্রশ্ন শেয়ার করুন... (Share your feedback or questions here...)" 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
        />
      </div>

      <button className="submit-button" onClick={handleSubmit} disabled={!selectedLevel}>
        জমা দিন <span style={{ fontSize: 'small' }}>(Submit)</span>
      </button>
    </div>
  );
};

export default EnrollNowForBangla;
