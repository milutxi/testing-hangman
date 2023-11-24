import React, { useState } from 'react';
import Header from './components/Header';
import Words from './components/Words'; 
import './App.css';

const wordToGuess = [
  "cheer", "table", "beach", "green", "drive", "hello", "admit", "earth",
  "image", "brown", "mouse", "house", "water", "drink"
];

function App() {
  const [randomWord, setRandomWord] = useState("");

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordToGuess.length);
    const selectedWord = wordToGuess[randomIndex];
    setRandomWord(selectedWord);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={getRandomWord}>Start game</button>
      {randomWord && <Words word={randomWord} />} 
    </div>
  );
}

export default App;


