import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('start button is working', () => {
  render(<App />);

  const button = screen.getByRole("button",{name:'Start game'});

  expect (button).toBeInTheDocument();
});

test('clicking "start game" button updates the random word state', () => {
  const {getByText}= render(<App />)

  const startButton = screen.getByText('Start game');

  fireEvent.click(startButton);

  const word = screen.getByTestId(/hangman-word/i);

  expect(word).toBeInTheDocument();

});

test('word component shows a currect word from the array', () => {
  const {getByText}= render(<App />)
  
  const startButton = screen.getByText('Start game');

  fireEvent.click(startButton);

  const word = screen.getByTestId(/hangman-word/i);

  let currectWord = word.getAttribute("data-testid").replace("hangman-word","").trim();
  // console.log(currectWord.length)
  
  expect(word).toBeInTheDocument();
  // console.log(word.textContent.length)
  expect(word.textContent.length).toBe(5);

  expect(word.textContent).toBe(currectWord);
});

test('currect amount of letters', () => {
  const {getByText}= render(<App />)
  
  const startButton = screen.getByText('Start game');

  fireEvent.click(startButton);
  
  const word = screen.getAllByTestId("letter");
  expect(word.length).toBe(5);

});
