import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('start button is working', () => {
  render(<App />);

  const button = screen.getByRole("button",{name:'Start game'});

  expect (button).toBeInTheDocument();
});

test('clicking "start game" button updates the random word state', () => {
  render(<App />)

  const startButton = screen.getByText('Start game');

  fireEvent.click(startButton);

  const word = screen.getByTestId(/hangman-word/i);

  expect(word).toBeInTheDocument();

});

test('word component shows a currect word from the array', () => {
  render(<App />)
  
  const startButton = screen.getByText('Start game');

  fireEvent.click(startButton);

  const word = screen.getByTestId(/hangman-word/i);

  let currectWord = word.getAttribute("data-testid").replace("hangman-word","").trim();
  // console.log(currectWord.length)
  
  expect(word).toBeInTheDocument();
  //console.log(word.textContent.length)
  expect(word.textContent.length).toBe(5);

  expect(word.textContent).toBe(currectWord);
});

test('currect amount of letters', () => {
  render(<App />)
  
  const startButton = screen.getByText('Start game');

  fireEvent.click(startButton);
  
  const word = screen.getAllByTestId("letter");

  expect(word.length).toBe(5);
 

});


test ('the paragraph renders', ()=> {
  render (<App />)
  const info = screen.queryByText(/enjoy/i);
  expect(info).toBeInTheDocument()
})

test('Show the correct word', () => {
  //const selectedWord = "table";
  const selectletters = ["t","a","b","l","e"]
  
  render(<App word={selectedWord} />);

 const word = screen.getAllByAltText("letter");

  expect(word).toBeEqual


})