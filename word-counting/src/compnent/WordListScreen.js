import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';




function WordListScreen() {

  const { text } = useParams();

  const [wordList, setWordList] = useState([]);




  useEffect(() => {

    console.log('Fetching data...');

    fetch('http://localhost:8080/words')

      .then(response => {

        if (!response.ok) {

          throw new Error('Network response was not ok');

        }

        return response.json(); // Parse response data as JSON

      })

      .then(data => {

        console.log('Data received:', data);

        setWordList(data);

      })

      .catch(error => {

        console.error('Error fetching word list:', error);

      });

  }, []);




  return (

    <div>

      <h2>Word List</h2>

      <ul>

        {wordList.map(word => (

          <li key={word.id}>{word.text}</li>

        ))}

      </ul>

    </div>

  );

}




export default WordListScreen;