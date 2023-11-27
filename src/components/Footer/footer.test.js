import {render, screen} from '@testing-library/react'
import Footer from '.'

test ("The title is rendered", () => {
    render (<Footer />)

    const right = screen.getByRole("heading", {level:3});
    expect(right).toBeInTheDocument();
})

test ("The list is render", ()=> {
    render(<Footer />)

    const author = screen.getByRole("list");
    expect(author).toBeInTheDocument();

})

test("The list items are render", () => {
    render(<Footer />)

    const author = screen.getAllByRole("listitem");
    expect(author.length).toBe(2);
    
})