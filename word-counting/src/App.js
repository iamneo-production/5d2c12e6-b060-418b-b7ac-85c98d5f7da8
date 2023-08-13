import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './compnent/HomeScreen';
import TextInputScreen from './compnent/TextInputScreen';
import StatisticsScreen from './compnent/StatisticsScreen';
import WordListScreen from './compnent/WordListScreen';
import UniqueWordList from './compnent/UniqueWordList';  
function App() {
   return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/text-input" element={<TextInputScreen />} />
          <Route path="/word-list" element={<WordListScreen />} />
          <Route path="/unique-word-list" element={<UniqueWordList/>} />
          <Route path="/statistics" element={<StatisticsScreen/>} />
          </Routes>
      </Router>
    );
  }
  export default App;

 

 