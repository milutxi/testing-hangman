const wordToGuess = ["cheer", "table", "beach", "green", "drive", "hello", "admit", "earth", "image", "brown", "mouse", "house", "water", "drink"];
const randomWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];

const Words = () => {
    return (
      <div data-testid="hangman-word">
        {/* take the word, create individual characters, write with map */}
        {randomWord.split('').map((letter, index) => (
          <span key={index}>
            
              {letter}
            
          </span>
        ))}
      </div>
    )
  }
  
  export default Words