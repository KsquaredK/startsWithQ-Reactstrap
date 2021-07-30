import { render, screen } from '@testing-library/react';
import StartsWithQ from './StartsWithQ';

test('renders learn react link', () => {
  render(<StartsWithQ />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
