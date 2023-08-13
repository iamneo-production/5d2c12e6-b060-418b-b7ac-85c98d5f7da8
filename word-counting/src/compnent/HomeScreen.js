import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomeScreen.css'; // Import your CSS file
function HomeScreen() {

  return (
<center>
    <div>
      <h1>WELCOME TO WORD COUNTER TOOL APP</h1>
      <h1>--------------------------------------------------</h1>
      <p><b>Enter your text below to calculate the word count.</b></p>
   
      {/* Add a button or link to navigate to the Text Input Screen */}
      <Link to="/text-input">
        <button>Go to Text Input</button>
      </Link>
    </div>
    </center>
  );
}
export default HomeScreen;