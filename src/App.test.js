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

//to make the following test the array of words will be only one word
test('Show the correct amount of spaces to write the word in', () => {
  
  const selectLetters = ["t","a","b","l","e"]

 // Act
 render(<App />);
  const startButton = screen.getByText('Start game');
  let displayedWord = screen.queryByTestId(/hangman-word/i);

  expect(displayedWord).not.toBeInTheDocument();
   
  fireEvent.click(startButton);
  displayedWord = screen.queryByTestId(/hangman-word/i);
  expect(displayedWord).toBeInTheDocument();
  

 // Get all elements with alt text "letter"
 const wordElements = screen.getAllByTestId("letter");

 // Assert
 expect(wordElements).toHaveLength(selectLetters.length);
});
