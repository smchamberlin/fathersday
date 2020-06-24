import React from 'react';
import logo from './logo.svg';
import './App.css';
import Music from './components/Music.js';
import Switcher from './components/Switcher.js';

function App() {
  
  return (
    <div className="App">
        <p id="headerText"> 
          Happy Father's Day Dad !!
        </p>
      <Switcher />
    </div>
  );
}

export default App;
