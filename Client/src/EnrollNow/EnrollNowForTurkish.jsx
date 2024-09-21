import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnrollNowAllPages/EnrollNowForTurkish.css';

const EnrollNowForTurkish = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSubmit = () => {
    if (selectedLevel) {
      navigate(`/${selectedLevel.toLowerCase()}-turkish-page`);
    } else {
      alert('Lütfen bir seviye seçin. (Please select a level.)');
    }
  };

  return (
    <div className="enroll-now-for-turkish-container">
      <h1 className="enroll-now-for-turkish-heading">
        Türkçe Kursuna Kaydoldunuz. <span style={{ fontSize: 'small' }}>(You have enrolled in the Turkish course.)</span>
      </h1>
      <p className="enroll-now-for-turkish-description">
        İhtiyaçlarınıza en uygun seviyeyi seçin ve nasıl geliştirebileceğimiz hakkında bize bilgi verin. <span style={{ fontSize: 'small' }}>(Choose the level that best suits your needs and let us know how we can help you improve.)</span>
      </p>

      <div className="enroll-now-for-turkish-options">
        <button className={`enroll-now-for-turkish-button ${selectedLevel === 'Easy' ? 'selected' : ''}`} onClick={() => handleLevelChange('Easy')}>
          Kolay <span style={{ fontSize: 'small' }}>(Easy)</span>
        </button>
        <button className={`enroll-now-for-turkish-button ${selectedLevel === 'Medium' ? 'selected' : ''}`} onClick={() => handleLevelChange('Medium')}>
          Orta <span style={{ fontSize: 'small' }}>(Medium)</span>
        </button>
        <button className={`enroll-now-for-turkish-button ${selectedLevel === 'Advanced' ? 'selected' : ''}`} onClick={() => handleLevelChange('Advanced')}>
          İleri <span style={{ fontSize: 'small' }}>(Advanced)</span>
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

      <button className="submit-button" onClick={handleSubmit} disabled={!selectedLevel}>Gönder <span style={{ fontSize: 'small' }}>(Submit)</span></button>
    </div>
  );
};

export default EnrollNowForTurkish;
