import {render, screen} from '@testing-library/react'
import Header from '.'

test ("The page title is render", () => {
    render(<Header title="Testing Page" />)

    const pageTitle = screen.getByRole("heading", {level:1});

    expect(pageTitle).toBeInTheDocument();
})

test ("the subtitle are rendered", () => {
    render(<Header subtitle="Created By Us" />)

    const subTitle = screen.getByRole("heading", {level:2});
    
    expect(subTitle).toBeInTheDocument();
})
