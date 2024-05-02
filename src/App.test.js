import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movie database app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Movie Database App/i);
  expect(titleElement).toBeInTheDocument();
});
