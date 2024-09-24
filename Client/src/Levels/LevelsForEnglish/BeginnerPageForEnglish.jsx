import { useState, useEffect } from 'react';
import '../../styles/LevelOfEnglish/BeginnerPageForEnglish.css'; // Update the CSS path

const BeginnerPageForEnglish = () => {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState([]);
  const [submittedPages, setSubmittedPages] = useState(new Set());
  const [isEditing, setIsEditing] = useState(false);
  
  const wordsPerPage = 5;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail'); // Assume userEmail is stored on login
        const response = await fetch(`http://localhost:8000/words?email=${userEmail}`);
        const data = await response.json();
        setWords(data);
        
        // Load saved responses and submitted pages from local storage
        const savedResponses = JSON.parse(localStorage.getItem(`userResponses_${userEmail}`)) || [];
        setResponses(savedResponses);
        
        const savedSubmittedPages = JSON.parse(localStorage.getItem(`submittedPages_${userEmail}`)) || [];
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
    
    // Save responses to local storage for the specific user
    const userEmail = localStorage.getItem('userEmail');
    localStorage.setItem(`userResponses_${userEmail}`, JSON.stringify(newResponses));
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
    
    // Save submitted pages to local storage for the specific user
    const userEmail = localStorage.getItem('userEmail');
    localStorage.setItem(`submittedPages_${userEmail}`, JSON.stringify([...newSubmittedPages]));
    
    setIsEditing(false); // Exit editing mode after submitting
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const canNavigate = isEditing ? false : submittedPages.has(currentPage);

  return (
    <div className="beginner-page-wrapper-for-english">
      <div className="beginner-page-container">
        <h1 className="beginner-page-heading">Words to Learn</h1>
        <ul className="word-list">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item">
              <span className="word-text">
                {word.word}
              </span>
              <textarea
                className="response-textarea"
                placeholder="Write here..."
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        <div className="button-container">
          <button className="pagination-button" onClick={prevPage} disabled={currentPage === 0 || canNavigate}>Previous</button>
          <button className="submit-button" onClick={handleSubmit} disabled={!allResponsesCorrect || submittedPages.has(currentPage)}>Submit</button>
          <button className="pagination-button" onClick={nextPage} disabled={currentPage === totalPages - 1 || !allResponsesCorrect || !canNavigate}>Next</button>
          {submittedPages.has(currentPage) && (
            <button className="edit-button" onClick={toggleEdit}>
              {isEditing ? 'Done Editing' : 'Edit'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeginnerPageForEnglish;
