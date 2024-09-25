import { useState, useEffect } from 'react';
import '../../styles/LevelOfBangla/BeginnerPageForBangla.css';

const BeginnerPageForBangla = () => {
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
        const response = await fetch(`http://localhost:8000/bangla-words?userId=${userId}&language=bangla`);
        const data = await response.json();
        setWords(data);
        
        const savedResponses = JSON.parse(localStorage.getItem('userResponses')) || [];
        setResponses(new Array(data.length).fill('')); // Initialize responses for this page
        
        const savedSubmittedPages = JSON.parse(localStorage.getItem('submittedPages')) || [];
        setSubmittedPages(new Set(savedSubmittedPages));
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
    localStorage.setItem('userResponses', JSON.stringify(newResponses));
  };

  const handleSubmit = () => {
    const newSubmittedPages = new Set(submittedPages);
    newSubmittedPages.add(currentPage);
    setSubmittedPages(newSubmittedPages);
    localStorage.setItem('submittedPages', JSON.stringify([...newSubmittedPages]));
    setResponses(new Array(words.length).fill('')); // Clear responses after submission
  };

  const allResponsesCorrect = currentWords.every((word, index) => {
    const userInput = responses[currentPage * wordsPerPage + index] || '';
    return userInput.trim() === word.word; // Assuming the correct answer is in word.word
  });

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

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const canNavigate = isEditing ? false : submittedPages.has(currentPage);

  return (
    <div className="beginner-page-wrapper-for-bangla">
      <div className="beginner-page-container-for-bangla">
        <h1 className="beginner-page-heading-for-bangla">শিক্ষার জন্য শব্দ</h1>
        <ul className="word-list-for-bangla">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item-for-bangla">
              <span className="word-text-for-bangla">
                {word.word} <span className="meaning"> (অর্থ: {word.meaning}) </span>
              </span>
              <textarea
                className="response-textarea-for-bangla"
                placeholder="এখানে লিখুন..."
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        <div className="keyboard-options-for-bangla">
          {currentWords.map((word, index) => (
            <button
              key={index}
              className="keyboard-button-for-bangla"
              onClick={() => handleResponseChange(index, word.word)} // Use word.word for input
              disabled={submittedPages.has(currentPage) && !isEditing}
            >
              {word.word}
            </button>
          ))}
        </div>

        <div className="button-container-for-bangla">
          <button className="pagination-button-for-bangla" onClick={prevPage} disabled={currentPage === 0 || canNavigate}>পূর্ববর্তী পৃষ্ঠা</button>
          <button className="submit-button-for-bangla" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>জমা দিন</button>
          <button className="pagination-button-for-bangla" onClick={nextPage} disabled={currentPage === totalPages - 1 || !allResponsesCorrect || !canNavigate}>পরবর্তী পৃষ্ঠা</button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button-for-bangla" onClick={toggleEdit}>{isEditing ? 'সম্পাদনা শেষ' : 'সম্পাদনা করুন'}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeginnerPageForBangla;
