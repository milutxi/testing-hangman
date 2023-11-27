import React, { useState } from 'react';
import Header from './components/Header';
import Words from './components/Words'; 
import './App.css';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard';
import Footer from './components/Footer';


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
      <Header 
        title={"Hola"}
        subtitle={"It is us"}
        />
      <div>
        <p>We hope you enjoy this game, press the button to start it.</p>
      </div>
      <button onClick={getRandomWord}>Start game</button>
      {randomWord && <Words word={randomWord} />} 

      <Footer />
    </div>
  );
}


export default App;


