import { useState, useEffect } from 'react';
import '../../styles/LevelOfEnglish/AdvancedPageForEnglish.css';

const AdvancedPageForEnglish = () => {
  const [words, setWords] = useState([]);
  const [responses, setResponses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [submittedPages, setSubmittedPages] = useState(new Set());
  const [isEditing, setIsEditing] = useState(false);
  const [isResponseCorrect, setIsResponseCorrect] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const wordsPerPage = 1;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8000/advanced-english-words?userId=${userId}&language=en`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setWords(data);
        setResponses(new Array(data.length).fill(''));
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

  const handleSubmit = async () => {
    const correctResponse = currentWords[0].AdvancedEnglishWords;
    const userResponse = responses[currentPage * wordsPerPage];

    if (userResponse.toLowerCase() === correctResponse.toLowerCase()) {
      const newSubmittedPages = new Set(submittedPages);
      newSubmittedPages.add(currentPage);
      setSubmittedPages(newSubmittedPages);
      setIsEditing(false);
      setIsResponseCorrect(true);
      setHasSubmitted(true);

      // Store the response in the backend
      try {
        const userId = localStorage.getItem('userId');
        await fetch('http://localhost:8000/store-responses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            word: correctResponse,
            response: userResponse,
            page: currentPage,
          }),
        });
      } catch (error) {
        console.error("Error storing response:", error);
      }
    } else {
      alert('Your response is incorrect. Please try again.');
      setIsResponseCorrect(false);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsResponseCorrect(false);
      setHasSubmitted(false);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setIsResponseCorrect(false);
      setHasSubmitted(false);
    }
  };

  return (
    <div className="advanced-page-for-english">
      <div className="advanced-page-for-english-container">
        <h1 className="advanced-page-for-english-heading">Advanced English Words</h1>
        <ul className="word-list">
          {currentWords.map((word, index) => (
            <li key={index} className="word-item-for-english">
              <span className="word-text-for-english">{word.AdvancedEnglishWords}</span>
              <span className="word-meaning-for-english"> (Meaning: {word.meaning})</span>
              <span className="word-sentence-for-english"> (Sentence: {word.sentence})</span>
              <textarea
                className="response-textarea-for-english"
                placeholder="Type your response here..."
                value={responses[currentPage * wordsPerPage + index] || ''}
                onChange={(e) => handleResponseChange(index, e.target.value)}
                disabled={submittedPages.has(currentPage) && !isEditing}
              />
            </li>
          ))}
        </ul>

        <div className="button-container-for-english">
          <button className="pagination-button-for-english" onClick={prevPage} disabled={currentPage === 0}>Previous</button>
          <button className="submit-button-for-english" onClick={handleSubmit} disabled={submittedPages.has(currentPage)}>Submit</button>
          <button className="pagination-button-for-english" onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
          <button className="edit-button-for-english" onClick={() => setIsEditing(!isEditing)} disabled={!hasSubmitted}>
            {isEditing ? 'Done Editing' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPageForEnglish;
