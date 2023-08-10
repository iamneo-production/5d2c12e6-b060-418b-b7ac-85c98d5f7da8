import React, { useEffect, useState } from 'react';//useState Hook,useEffect Hook

const WordCounterTool = () => {

const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    setWordCount(countWords(newText));
  };

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleSubmit = ()=>{
    setInputText('');
    setWordCount(0);
  }
  
  useEffect(()=>{
      alert("text is cleared");
  })



  return (
    <div className="word-counter-app">
      <h1>Word Counter Tool</h1>
      <textarea
        rows="15"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your text here..."
      />
      <p>Word Count: {wordCount}</p>
      <button onClick={handleSubmit}>Clear</button>
    </div>
  )
}

export default WordCounterTool
