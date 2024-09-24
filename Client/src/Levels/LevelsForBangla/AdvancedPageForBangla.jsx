import { useState, useEffect } from 'react';
import '../../styles/LevelOfBangla/AdvancedPageForBangla.css';

const AdvancedPageForBangla = () => {
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
        const response = await fetch(`http://localhost:8000/advanced-bangla-words?userId=${userId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data

        // Validate data structure
        if (!Array.isArray(data) || !data.every(item => item.word && item.meaning && item.pronunciation)) {
          console.error("Data format is incorrect", data); // Log the incorrect data
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
    <div className="advanced-page-wrapper-for-bangla">
      <div className="advanced-page-container-for-bangla">
        <h1 className="advanced-page-heading-for-bangla">উন্নত শব্দ (Advanced Words)</h1>
        <ul className="word-list-for-advanced-bangla">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item-for-bangla">
              <span className="word-text-for-bangla">
                {word.word} 
                <span className="word-meaning"> (অর্থ: {word.meaning})</span>
                <span className="word-pronunciation"> [উচ্চারণ: {word.pronunciation}]</span>
              </span>
              <textarea
                className="response-textarea-for-bangla"
                placeholder="এখানে আপনার উত্তর লিখুন... (Write your answer...)"
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        {/* Keyboard Section */}
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
          <button className="pagination-button-for-bangla" onClick={prevPage} disabled={currentPage === 0 || canNavigate}>
            পূর্ববর্তী পৃষ্ঠা (Previous)
          </button>
          <button className="submit-button-for-bangla" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>
            জমা দিন (Submit)
          </button>
          <button className="pagination-button-for-bangla" onClick={nextPage} disabled={currentPage === totalPages - 1 || !allResponsesCorrect || !canNavigate}>
            পরবর্তী পৃষ্ঠা (Next)
          </button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button-for-bangla" onClick={toggleEdit}>
              {isEditing ? 'সম্পাদনা সম্পন্ন (Done Editing)' : 'সম্পাদনা (Edit)'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPageForBangla;
