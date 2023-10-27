import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from "@/app/dashboard/page";

describe('Dashboard page', () => {
    it('Should render properly', () => {
        render(<Dashboard />);

        const header = screen.getByRole('heading');
        const headerText = 'Hello world';

        expect(header).toHaveTextContent(headerText);
    });
});
