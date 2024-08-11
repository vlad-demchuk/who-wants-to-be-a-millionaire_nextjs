import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Root page', () => {
  it('renders a start page correctly', () => {
    render(<Page />);

    const title = screen.getByRole('heading');
    const startButton = screen.getByText(/Start/i);

    expect(startButton).toBeInTheDocument();
    expect(title).toHaveTextContent('Who wants to bea millionaire?');
  });
});
