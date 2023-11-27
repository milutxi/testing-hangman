import { render, screen } from '@testing-library/react';
import Words from '.';

test("The component is being rendered without error", () => {
  render(<Words />);
});

test("Display the right letters of the guess word", () => {
  const selectedWord = "cheer"; 
  
  render(<Words word={selectedWord} />);
  
  const displayedWord = screen.getByTestId(/hangman-word/i).textContent;
  
  expect(displayedWord).toBe(selectedWord);
});
  
test("the number of letter spans is equal to the length of the word", () => {
  const selectedWord = "cheer"; 
    
  render(<Words word={selectedWord} />);
  
  const displayedWord = screen.getAllByTestId("letter"); 
  
  expect(displayedWord.length).toBe(selectedWord.length); 
});
  


  



