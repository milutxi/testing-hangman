const wordToGuess = ["cheer", "table", "beach", "green", "drive", "hello", "admit", "earth", "image", "brown", "mouse", "house", "water", "drink"];
const randomWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];


function Words({ word }) {
  return (
    <div data-testid="hangman-word">
      {word && typeof word === 'string' && word.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
}

export default Words;

