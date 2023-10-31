import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from "@/app/dashboard/page";

describe('Dashboard page', () => {
    it('Should render properly', () => {
        render(<Dashboard />);

        const header = screen.getByRole('heading', {
            name: /Heading/i,
        });
        const headerText = 'Hello world';

        expect(header).toHaveTextContent(headerText);
    });

    it('Should have a disabled button', () => {
        render(<Dashboard />);

        const buttonElement = screen.getByRole('button');

        expect(buttonElement).toBeDisabled();
    });

    it ('Should have a p tag with className of blue', () => {
        render(<Dashboard />);
        const pElement = screen.getByTestId('paragraph-blue');

        expect(pElement).toHaveClass('test-blue');
    });
});
