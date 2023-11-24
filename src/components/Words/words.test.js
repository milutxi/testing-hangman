import { getAllByTestId, getAllByText, render, screen } from '@testing-library/react';
import Words from '.';

const wordToGuess = [
    "cheer", "table", "beach", "green", "drive", "hello", "admit", "earth",
    "image", "brown", "mouse", "house", "water", "drink"
  ];

Math.random = () => 0.5;

test("The component is being rendered without error", () => {
  render(<Words />);
});

test("Display the right letters of the guess word", () => {
    const selectedWord = "cheer"; 
  
    const { getByTestId } = render(<Words word={selectedWord} />);
  
    const displayedWord = screen.getByTestId(/hangman-word/i).textContent;
  
    expect(displayedWord).toBe(selectedWord);
  });
  
  test("the number of letter spans is equal to the length of the word", () => {
    const selectedWord = "cheer"; 
    
    const { getAllByTestId } = render(<Words word={selectedWord} />);
  
    const displayedWord = screen.getAllByTestId("letter"); 
  
    expect(displayedWord.length).toBe(selectedWord.length); 
  });
  


  



