import { render, screen } from '@testing-library/react';
import App from '../app';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText('Chess');
  expect(linkElement).toBeInTheDocument();
});
