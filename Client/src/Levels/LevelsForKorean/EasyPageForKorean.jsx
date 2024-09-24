import { useState, useEffect } from 'react';
import '../../styles/LevelOfKorean/EasyPageForKorean.css';

const EasyPageForKorean = () => {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState([]);
  const [submittedPages, setSubmittedPages] = useState(new Set());
  const [isEditing, setIsEditing] = useState(false);
  
  const wordsPerPage = 5;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8000/korean-words?userId=${userId}&language=ko`);
        const data = await response.json();
        setWords(data);
        
        const savedResponses = JSON.parse(localStorage.getItem('userResponses')) || [];
        setResponses(savedResponses);
        
        const savedSubmittedPages = JSON.parse(localStorage.getItem('submittedPages')) || [];
        setSubmittedPages(new Set(savedSubmittedPages));
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    
    fetchWords();
  }, []);

  const handleResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[currentPage * wordsPerPage + index] = value;
    setResponses(newResponses);
    localStorage.setItem('userResponses', JSON.stringify(newResponses));
  };

  const totalPages = Math.ceil(words.length / wordsPerPage);
  const currentWords = words.slice(currentPage * wordsPerPage, (currentPage + 1) * wordsPerPage);

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const allResponsesCorrect = currentWords.every((word, index) => {
    const userInput = responses[currentPage * wordsPerPage + index] || '';
    return userInput.trim() === word.word;
  });

  const handleSubmit = () => {
    const newSubmittedPages = new Set(submittedPages);
    newSubmittedPages.add(currentPage);
    setSubmittedPages(newSubmittedPages);
    localStorage.setItem('submittedPages', JSON.stringify([...newSubmittedPages]));
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const canNavigate = isEditing ? false : submittedPages.has(currentPage);

  return (
    <div className="easy-page-wrapper">
      <div className="easy-page-container">
        <h1 className="easy-page-heading">배워야 할 단어 (Words to Learn)</h1>
        <ul className="word-list">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item">
              <span className="word-text">
                {word.word} <span className="meaning"> (Meaning: {word.meaning}) </span> <span className="pronunciation"> [Pronunciation: {word.pronunciation}] </span>
              </span>
              <textarea
                className="response-textarea"
                placeholder="여기에 작성하세요... (Write here...)"
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        <div className="keyboard-options">
          {currentWords.map((word, index) => (
            <button
              key={index}
              className="keyboard-button"
              onClick={() => handleResponseChange(index, word.word)} // Use word.word for input
              disabled={submittedPages.has(currentPage) && !isEditing}
            >
              {word.word} ({word.pronunciation}) {/* Display character and pronunciation */}
            </button>
          ))}
        </div>

        <div className="button-container">
          <button className="pagination-button" onClick={prevPage} disabled={currentPage === 0 || canNavigate}>이전 페이지 (Previous)</button>
          <button className="submit-button" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>제출 (Submit)</button>
          <button className="pagination-button" onClick={nextPage} disabled={currentPage === totalPages - 1 || !allResponsesCorrect || !canNavigate}>다음 페이지 (Next)</button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button" onClick={toggleEdit}>{isEditing ? '편집 완료 (Done Editing)' : '편집 (Edit)'}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EasyPageForKorean;
