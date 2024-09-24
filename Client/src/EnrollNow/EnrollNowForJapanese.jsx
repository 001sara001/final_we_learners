import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnrollNowAllPages/EnrollNowForJapanese.css';

const EnrollNowForJapanese = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSubmit = () => {
    if (selectedLevel) {
      navigate(`/${selectedLevel.toLowerCase()}-japanese-page`);
    } else {
      alert('提出する前にレベルを選択してください。 (Please select a level before submitting.)');
    }
  };

  return (
    <div className="enroll-now-for-japanese-container">
      <h1 className="enroll-now-for-japanese-heading">
        日本語コースに登録されました。 <span style={{ fontSize: 'small' }}>(You have registered for the Japanese course.)</span>
      </h1>
      <p className="enroll-now-for-japanese-description">
        あなたのニーズに最適なレベルを選択し、改善方法を教えてください。 <span style={{ fontSize: 'small' }}>(Select the level that best suits your needs and let us know how we can improve.)</span>
      </p>

      <div className="enroll-now-for-japanese-options">
        <button className={`enroll-now-for-japanese-button ${selectedLevel === 'Beginner' ? 'selected' : ''}`} onClick={() => handleLevelChange('Beginner')}>
          初心者 <span style={{ fontSize: 'small' }}>(Beginner)</span>
        </button>
        <button className={`enroll-now-for-japanese-button ${selectedLevel === 'Advanced' ? 'selected' : ''}`} onClick={() => handleLevelChange('Advanced')}>
          上級 <span style={{ fontSize: 'small' }}>(Advanced)</span>
        </button>
      </div>

      <div className="feedback-section">
        <textarea 
          className="feedback-textarea" 
          placeholder="ここにフィードバックや質問を共有してください... (Share your feedback or questions here...)" 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
        />
      </div>

      <button className="submit-button" onClick={handleSubmit} disabled={!selectedLevel}>
        送信 <span style={{ fontSize: 'small' }}>(Submit)</span>
      </button>
    </div>
  );
};

export default EnrollNowForJapanese;
