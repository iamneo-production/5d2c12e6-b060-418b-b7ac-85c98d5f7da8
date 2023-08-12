import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import TextInputScreen from './component/TextInputScreen';
import WordListScreen from './component/WordListScreen';
import StatisticsScreen from './component/StatisticsScreen';
import HomeScreen from './component/HomeScreen';
import React from 'react';

function App() {
  return (
    <Router>
       <Route path="/" exact component={HomeScreen} />
        <Route path="/text-input" component={TextInputScreen} />
        <Route path="/word-list" component={WordListScreen} />
        <Route path="/statistics" component={StatisticsScreen} />
       
       
     
    </Router>
  );
}

export default App;
