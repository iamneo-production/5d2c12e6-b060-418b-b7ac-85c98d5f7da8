import React, { useState, useEffect } from 'react';
import  './Tool.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [totalWordCount, setTotalWordCount] = useState(0);

  useEffect(() => {
    const storedTotalRequests = parseInt(localStorage.getItem('totalRequests')) || 0;
    const storedTotalWordCount = parseInt(localStorage.getItem('totalWordCount')) || 0;
    setTotalRequests(storedTotalRequests);
    setTotalWordCount(storedTotalWordCount);
  }, []);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    setWordCount(countWords(newText));
  };

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const updateStatistics = () => {
    const newTotalRequests = totalRequests + 1;
    const newTotalWordCount = totalWordCount + wordCount;
    setTotalRequests(newTotalRequests);
    setTotalWordCount(newTotalWordCount);
    localStorage.setItem('totalRequests', newTotalRequests);
    localStorage.setItem('totalWordCount', newTotalWordCount);
  };

  const resetStatistics = () => {
    setTotalRequests(0);
    setTotalWordCount(0);
    localStorage.setItem('totalRequests', 0);
    localStorage.setItem('totalWordCount', 0);
  };

  const handleClear  = ()=>{
    setInputText('');
    setWordCount(0);
  }

  return (
    <div className="word-counter-app">
      <h1>Word Counter Tool</h1>
      <textarea
        rows="10"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your text here..."
      />
      <p>Word Count: {wordCount}</p>
      <button onClick={() => { setInputText(''); updateStatistics(); }}>Submit</button>
      <button onClick={handleClear} >Clear</button>
      <button onClick={resetStatistics}>Reset Statistics</button>
    
      <div className="statistics">
        <p>Total Requests: {totalRequests}</p>
        <p>Total Word Count: {totalWordCount}</p>
        <p>Average Word Count: {totalRequests === 0 ? 0 : (totalWordCount / totalRequests).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
