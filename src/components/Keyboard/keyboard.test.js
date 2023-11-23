import { render, screen } from '@testing-library/react';
import Keyboard from '.';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

test("The keyboard buttons and functionality", () => {
  render(
    <Keyboard
      activeLetter={[]}
      inactiveLetter={[]}
      addGuessLetter={() => {}}
      disabled={false}
    />
  );

  const buttons = screen.getAllByRole("button");

  expect(buttons.length).toBe(KEYS.length);

  buttons.forEach((button, index) => {
    expect(button.textContent).toBe(KEYS[index]);
  });
});


