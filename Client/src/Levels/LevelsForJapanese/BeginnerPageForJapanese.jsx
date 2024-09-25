import { useState, useEffect } from 'react';
import '../../styles/LevelOfJapanese/BeginnerPageForJapanese.css';

const BeginnerPageForJapanese = () => {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState([]);
  const [submittedPages, setSubmittedPages] = useState(new Set());
  const [isEditing, setIsEditing] = useState(false);
  
  const wordsPerPage = 3;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8000/japanese-words?userId=${userId}&language=japanese`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
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
    return userInput.trim() === word.word; // Assuming the correct answer is in word.word
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const canNavigate = isEditing ? false : submittedPages.has(currentPage);

  return (
    <div className="beginner-page-wrapper-for-japanese">
      <div className="beginner-page-container-for-japanese">
        <h1 className="beginner-page-heading-for-japanese">学ぶべき言葉 (Words to Learn)</h1>
        <ul className="word-list-for-japanese">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item-for-japanese">
              <span className="word-text-for-japanese">
                {word.word} 
                <span className="meaning"> (意味: {word.meaning})</span>
                <span className="pronunciation"> [発音: {word.pronunciation}]</span>
              </span>
              <textarea
                className="response-textarea-for-japanese"
                placeholder="ここに書いてください... (Write here...)"
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        <div className="keyboard-options-for-japanese">
          {currentWords.map((word, index) => (
            <button
              key={index}
              className="keyboard-button-for-japanese"
              onClick={() => handleResponseChange(index, word.word)} // Use word.word for input
              disabled={submittedPages.has(currentPage) && !isEditing}
            >
              {word.word}
            </button>
          ))}
        </div>

        <div className="button-container-for-japanese">
          <button className="pagination-button-for-japanese" onClick={prevPage} disabled={currentPage === 0 || canNavigate}>前のページ (Previous)</button>
          <button className="submit-button-for-japanese" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>送信 (Submit)</button>
          <button className="pagination-button-for-japanese" onClick={nextPage} disabled={currentPage === totalPages - 1 || !allResponsesCorrect || !canNavigate}>次のページ (Next)</button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button-for-japanese" onClick={toggleEdit}>{isEditing ? '編集完了 (Done Editing)' : '編集 (Edit)'}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeginnerPageForJapanese;
