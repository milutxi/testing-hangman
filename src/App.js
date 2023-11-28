import React, { useState } from 'react';
import Header from './components/Header';
import Words from './components/Words'; 
import './App.css';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard';
import Footer from './components/Footer';


const wordToGuess = [
  "table"
];

function App() {
  const [randomWord, setRandomWord] = useState("");
  const [guessLetter, setGuessLetter] = useState([]);

  // foundLetters = "_ _ _ _ _"

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordToGuess.length);
    const selectedWord = wordToGuess[randomIndex];
    setRandomWord(selectedWord);
  };

  const clickLetter = letter => {
    setGuessLetter ([...guessLetter, letter])

   console.log("letter  is " + letter)
   console.log("Rando word" + randomWord )


// if random word includes letter
// find the index of the letter

// update foundLetters state - chne the _ to the letter

// compare foundLetters to random word
// if they are the same show a win message

  } 

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
      {randomWord && 
      <>
      <Words word={randomWord} /> 
      <Keyboard addLetter={clickLetter} letterList={guessLetter} />
      </>
      } 

      <Footer />
    </div>
  );
}


export default App;


