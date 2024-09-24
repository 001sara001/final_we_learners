import { useState, useEffect } from 'react';
import '../../styles/LevelOfJapanese/EasyPageForJapanese.css';

const EasyPageForJapanese = () => {
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
        const response = await fetch(`http://localhost:8000/japanese-words?userId=${userId}&language=ja`);
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
        <h1 className="easy-page-heading">学ぶべき言葉 (Words to Learn)</h1>
        <ul className="word-list">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item">
              <span className="word-text">
             {word.word} 
             <span className="word-meaning"> (Meaning: {word.meaning})</span>
            <span className="word-pronunciation"> [Pronunciation: {word.pronunciation}]</span>
            </span>

              <textarea
                className="response-textarea"
                placeholder="ここに書いてください... (Write here...)"
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
              {word.word} {/* Display word */}
            </button>
          ))}
        </div>

        <div className="button-container">
          <button className="pagination-button" onClick={prevPage} disabled={currentPage === 0 || canNavigate}>前のページ (Previous)</button>
          <button className="submit-button" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>提出する (Submit)</button>
          <button className="pagination-button" onClick={nextPage} disabled={currentPage === totalPages - 1 || !allResponsesCorrect || !canNavigate}>次のページ (Next)</button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button" onClick={toggleEdit}>{isEditing ? '編集完了 (Done Editing)' : '編集 (Edit)'}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EasyPageForJapanese;
