import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'
import Output from './Output'

describe('Greeting Component', () => {
    test('renders Hello',() => {
        //! ARRANGE
        render(<Greeting />)
    
        //! ACT
    
        //! ASSERT
        const el = screen.getByText('HELLO', {exact: false})
        expect(el).toBeInTheDocument()
    })

    test('renders "Not Changed" if btn was not clicked', () => {
        render(<Greeting />)

        const el = screen.getByText('Not Changed');
        expect(el).toBeInTheDocument()
    })

    test('renders "Changed" if btn was clicked', () => {
        render(<Greeting />)

        const btn = screen.getByRole('button')
        userEvent.click(btn)

        const el = screen.getByText('Changed');
        expect(el).toBeInTheDocument()
    })

    test('does not rendering "Not Changed" if btn was clicked', () => {
        render(<Greeting />)

        const btn = screen.getByRole('button')
        userEvent.click(btn)

        const el = screen.queryByText('Not Changed', {exact: false})
        expect(el).toBeNull()

    })
})