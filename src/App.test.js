import { render, screen } from '@testing-library/react';
import App from './App';

test('renders view my profile link', () => {
  render(<App />);
  const linkElement = screen.getByText(/view my profile/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders view my profile link', () => {
  render(<App />);
  const linkElement = screen.getByText(/view my profile/i);
  expect(linkElement).toBeInTheDocument();
});
