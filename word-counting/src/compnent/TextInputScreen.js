import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './TextInputScreen.css'; // Import your CSS file
import { Link } from 'react-router-dom';
function TextInputScreen() {

  const [inputText, setInputText] = useState('');

  const [isDragging, setIsDragging] = useState(false);

  const navigate = useNavigate();

  const calculateAverageWordCount = text => {

    const words = text.trim().split(/\s+/).filter(word => word !== '');

    const totalWordCount = words.length;

    if (totalWordCount === 0) {

      return 0;

    }

    const totalCharacters = words.reduce((acc, word) => acc + word.length, 0);

    return Math.round(totalCharacters / totalWordCount);

  };




  const handleCalculate = () => {

    fetch('http://localhost:8080/words', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({ text: inputText }),

    })

      .then(response => response.json())

      .then(data => {

        const averageWordCount = calculateAverageWordCount(inputText);

        navigate(`/statistics?averageWordCount=${averageWordCount}&totalRequests=1`);

        console.log(averageWordCount);

      })

      .catch(error => {

        console.error('Error calculating word count:', error);

      });

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

      <Link to="/word-list">
        <button>Word List</button>
      </Link>

      <Link to="/unique-word-list">
<button>Unquie Word List</button>




</Link>

    </div>

  );

}




export default TextInputScreen;