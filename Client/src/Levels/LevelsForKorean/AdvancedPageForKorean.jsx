import { useState, useEffect } from 'react';
import '../../styles/LevelOfKorean/AdvancedPageForKorean.css';

const AdvancedPageForKorean = () => {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState([]);
  const [submittedPages, setSubmittedPages] = useState(new Set());
  const [isEditing, setIsEditing] = useState(false);
  
  const wordsPerPage = 2;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8000/advanced-korean-words?userId=${userId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched words:", data); // Log the fetched data

        // Validate data structure
        if (!Array.isArray(data) || !data.every(item => item.word && item.meaning && item.pronunciation)) {
          throw new Error("Data format is incorrect");
        }

        setWords(data);
        setResponses(new Array(data.length).fill('')); // Initialize responses for all words
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    
    fetchWords();
  }, []);

  const totalPages = Math.ceil(words.length / wordsPerPage);
  const currentWords = words.slice(currentPage * wordsPerPage, (currentPage + 1) * wordsPerPage);

  const handleResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[currentPage * wordsPerPage + index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    const newSubmittedPages = new Set(submittedPages);
    newSubmittedPages.add(currentPage);
    setSubmittedPages(newSubmittedPages);
    setIsEditing(false);
    
    // Clear the responses for this page after submission
    setResponses(prev => {
      const updatedResponses = [...prev];
      updatedResponses.fill('', currentPage * wordsPerPage, (currentPage + 1) * wordsPerPage);
      return updatedResponses;
    });
  };

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
    return userInput.trim() === word.word; // Adjust according to your data structure
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const canNavigate = isEditing ? false : submittedPages.has(currentPage);

  return (
    <div className="advanced-page-wrapper-for-korean">
      <div className="advanced-page-container-for-korean">
        <h1 className="advanced-page-heading-for-korean">고급 단어 (Advanced Words)</h1>
        <ul className="word-list-for-advanced-korean">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item-for-korean">
              <span className="word-text-for-korean">
                {word.word} 
                <span className="word-meaning"> (의미: {word.meaning})</span>
                <span className="word-pronunciation"> [발음: {word.pronunciation}]</span>
              </span>
              <textarea
                className="response-textarea-for-korean"
                placeholder="여기에 답변을 적어주세요... (Write your answer...)"
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        {/* Keyboard Section */}
        <div className="keyboard-options-for-korean">
          {currentWords.map((word, index) => (
            <button
              key={index}
              className="keyboard-button-for-korean"
              onClick={() => handleResponseChange(index, word.word)} // Use word.word for input
              disabled={submittedPages.has(currentPage) && !isEditing}
            >
              {word.word}
            </button>
          ))}
        </div>

        <div className="button-container-for-korean">
          <button className="pagination-button-for-korean" onClick={prevPage} disabled={currentPage === 0 || canNavigate}>
            이전 페이지 (Previous)
          </button>
          <button className="submit-button-for-korean" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>
            제출 (Submit)
          </button>
          <button className="pagination-button-for-korean" onClick={nextPage} disabled={currentPage === totalPages - 1 || !allResponsesCorrect || !canNavigate}>
            다음 페이지 (Next)
          </button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button-for-korean" onClick={toggleEdit}>
              {isEditing ? '편집 완료 (Done Editing)' : '편집 (Edit)'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPageForKorean;
