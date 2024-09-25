import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnrollNowAllPages/EnrollNowForKorean.css';

const EnrollNowForKorean = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSubmit = () => {
    if (selectedLevel) {
      navigate(`/${selectedLevel.toLowerCase()}-korean-page`);
    } else {
      alert('제출하기 전에 레벨을 선택해주세요. (Please select a level before submitting.)');
    }
  };

  return (
    <div className="enroll-now-for-korean-container">
      <h1 className="enroll-now-for-korean-heading">
        한국어 과정에 등록되었습니다. <span style={{ fontSize: 'small' }}>(You have registered for the Korean course.)</span>
      </h1>
      <p className="enroll-now-for-korean-description">
        귀하의 요구에 가장 적합한 수준을 선택하고 개선 방법을 알려주세요. <span style={{ fontSize: 'small' }}>(Select the level that best suits your needs and let us know how we can improve.)</span>
      </p>

      <div className="enroll-now-for-korean-options">
        <button className={`enroll-now-for-korean-button ${selectedLevel === 'Beginner' ? 'selected' : ''}`} onClick={() => handleLevelChange('Beginner')}>
          초급 <span style={{ fontSize: 'small' }}>(Beginner)</span>
        </button>
        <button className={`enroll-now-for-korean-button ${selectedLevel === 'Advanced' ? 'selected' : ''}`} onClick={() => handleLevelChange('Advanced')}>
          고급 <span style={{ fontSize: 'small' }}>(Advanced)</span>
        </button>
      </div>

      <div className="feedback-section">
        <textarea 
          className="feedback-textarea" 
          placeholder="여기에 피드백이나 질문을 공유하세요... (Share your feedback or questions here...)" 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
        />
      </div>

      <button className="submit-button" onClick={handleSubmit} disabled={!selectedLevel}>
        제출 <span style={{ fontSize: 'small' }}>(Submit)</span>
      </button>
    </div>
  );
};

export default EnrollNowForKorean;
