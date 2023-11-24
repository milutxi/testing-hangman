import { render, screen } from '@testing-library/react';
import Words from '.';

const wordToGuess = [
    "cheer", "table", "beach", "green", "drive", "hello", "admit", "earth",
    "image", "brown", "mouse", "house", "water", "drink"
  ];

Math.random = () => 0.5;
//line 4-9 get deleted
test("The component is being rendered without error", () => {
  render(<Words />);
});

test("Display the right letters of the guess word", () => {
    const selectedWord = "cheer"; 
  
    const { getByTestId } = render(<Words word={selectedWord} />);
  
    const displayedWord = getByTestId('hangman-word').textContent;
  
    expect(displayedWord).toBe(selectedWord);
  });
  
test("Display a different word to guess", () => {

  const randomIndex = Math.floor(Math.random() * wordToGuess.length);
  const word = wordToGuess[randomIndex];

  render(<Words word={word} />);

  const displayedWord = screen.getByTestId('hangman-word').textContent;
  expect(displayedWord).toBe(word);
});


  



