import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function WordListScreen() {
  const { text } = useParams();
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    // Make API call to fetch word list based on the text
    axios.get(`/api/words?text=${text}`)
      .then(response => {
        setWordList(response.data);
      })
      .catch(error => {
        console.error('Error fetching word list:', error);
      });
  }, [text]);

  return (
    <div>
      <h2>Word List</h2>
      <ul>
        {wordList.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordListScreen;