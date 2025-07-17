import { render, screen } from '@testing-library/react';
import App from './App';

test('renders industry streamlining heading', () => {
  render(<App />);
  const heading = screen.getByText(/streamlining oil and gas industry/i);
  expect(heading).toBeInTheDocument();
});
