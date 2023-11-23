import {render, screen } from '@testing-library/react';
import Words from '.';

test("The component is being rendered without error", () => {
    render (<Words randomWord={} />);

})

test("Display the right letter", () => {
    render (<Words />);
    const displayedWord = screen.getByTestId('hangman-word').textContent;
    expect(displayedWord).toBe('table')
})


