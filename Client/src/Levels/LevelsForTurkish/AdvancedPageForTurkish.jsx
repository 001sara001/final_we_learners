import { useState, useEffect } from 'react';
import '../../styles/LevelOfTurkish/AdvancedPageForTurkish.css';

const AdvancedPageForTurkish = () => {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState([]);
  const [submittedPages, setSubmittedPages] = useState(new Set());
  const [isEditing, setIsEditing] = useState(false);
  
  const wordsPerPage = 1;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8000/advanced-turkish-words?userId=${userId}`);
        
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

    // Move to the next page if not on the last page
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
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

  const canNavigate = isEditing ? false : true; // Allow navigation even if submitted

  return (
    <div className="advanced-page-wrapper-for-turkish">
      <div className="advanced-page-container-for-turkish">
        <h1 className="advanced-page-heading-for-turkish">İleri Düzey Kelimeler (Advanced Words)</h1>
        <ul className="word-list-for-advanced-turkish">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item-for-turkish">
              <span className="word-text-for-turkish">
                {word.word} 
                <span className="word-meaning"> (Anlam: {word.meaning})</span>
                <span className="word-example"> (Örnek: {word.example})</span>
                <span className="word-pronunciation"> [Telaffuz: {word.pronunciation}]</span>
              </span>
              <textarea
                className="response-textarea-for-turkish"
                placeholder="Buraya yazın... (Write here...)"
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        {/* Keyboard Section */}
        <div className="keyboard-options-for-turkish">
          {currentWords.map((word, index) => (
            <button
              key={index}
              className="keyboard-button-for-turkish"
              onClick={() => handleResponseChange(index, word.word)} // Use word.word for input
              disabled={submittedPages.has(currentPage) && !isEditing}
            >
              {word.word}
            </button>
          ))}
        </div>

        <div className="button-container-for-turkish">
          <button className="pagination-button-for-turkish" onClick={prevPage} disabled={currentPage === 0}>Önceki Sayfa (Previous Page)</button>
          <button className="submit-button-for-turkish" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>Gönder (Submit)</button>
          <button className="pagination-button-for-turkish" onClick={nextPage} disabled={currentPage === totalPages - 1}>Sonraki Sayfa (Next Page)</button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button-for-turkish" onClick={toggleEdit}>{isEditing ? 'Düzenlemeyi Bitir (Finish Editing)' : 'Düzenle (Edit)'}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPageForTurkish;
