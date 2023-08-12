import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import from 'react-router-dom' instead of 'react-router'
import './TextInputScreen.css';

function TextInputScreen() {
  const [inputText, setInputText] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const history = useHistory();

  const handleCalculate = () => {
    const totalWords = inputText.trim().split(/\s+/).filter(word => word !== '').length;
    const averageWordCount = totalWords / 2;
    history.push(`/statistics?averageWordCount=${averageWordCount}&totalRequests=1`);
  };

  const wordCount = inputText.trim().split(/\s+/).filter(word => word !== '').length;

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="center-container">
      <h2>Text Input</h2>
      <div
        className={`text-area-container ${isDragging ? 'grabbing' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <textarea
          className={`input-textarea ${isDragging ? 'grabbing' : ''}`}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Enter your text here"
        />
        <p className="word-count">Word Count: {wordCount}</p>
      </div>
      <button className="calculate-button" onClick={handleCalculate}>
        Calculate
      </button>
    </div>
  );
}

export default TextInputScreen;
