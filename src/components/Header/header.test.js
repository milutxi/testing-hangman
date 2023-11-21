import {render, screen} from '@testing-library/react'
import Header from '.'

test ("The page title and the subtitle are rendered", () => {
    render(<Header title="Hangman" subtitle="By Sarvnaz and Sheila" />)

    const pageTitle = screen.getByRole("heading", {level:1});
    const subTitle = screen.getByRole("heading", {level:2});

    expect(pageTitle).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();

})