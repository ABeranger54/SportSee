import { render, screen } from '@testing-library/react';
import Profile from './page/Profile';

test('renders learn react link', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
