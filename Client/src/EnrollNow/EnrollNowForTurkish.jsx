import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnrollNowAllPages/EnrollNowForTurkish.css';

const EnrollNowForTurkish = () => {
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
      navigate(`/${selectedLevel.toLowerCase()}-turkish-page`); // Navigate to the corresponding Turkish page
    } else {
      alert('Lütfen bir seviye seçin. (Please select a level.)');
    }
  };

  return (
    <div className="enroll-now-for-turkish-container">
      {user && <h2 className="username-heading">Hoş geldiniz, {user.name}! <span style={{ fontSize: 'small' }}>(Welcome, {user.name}!)</span></h2>} {/* Display username */}
      <h1 className="enroll-now-for-turkish-heading">Türkçe Kursuna Kaydoldunuz. <span style={{ fontSize: 'small' }}>(You have enrolled in the Turkish course.)</span></h1>
      <p className="enroll-now-for-turkish-description">
        İhtiyacınıza en uygun seviyeyi seçin ve nasıl geliştirebileceğimiz hakkında bize bilgi verin. <span style={{ fontSize: 'small' }}>(Choose the level that best suits your needs and let us know how we can help you improve.)</span>
      </p>

      <div className="enroll-now-for-turkish-options">
        <button
          className={`enroll-now-for-turkish-button ${selectedLevel === 'Beginner' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Beginner')}
        >
          Başlangıç <span style={{ fontSize: 'small' }}>(Beginner)</span>
        </button>
        <button
          className={`enroll-now-for-turkish-button ${selectedLevel === 'Intermediate' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Intermediate')}
        >
          Orta <span style={{ fontSize: 'small' }}>(Intermediate)</span>
        </button>
      </div>

      <div className="feedback-section">
        <textarea
          className="feedback-textarea"
          placeholder="Geri bildiriminizi veya sorularınızı burada paylaşın... (Share your feedback or questions here...)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!selectedLevel}
      >
        Gönder <span style={{ fontSize: 'small' }}>(Submit)</span>
      </button>
    </div>
  );
};

export default EnrollNowForTurkish;
