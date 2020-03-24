import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../landingpage/LandingPage';

test('renders header', () => {
  const { getByText } = render(<LandingPage />);
  const linkElement = getByText(/hiring/i);
  expect(linkElement).toBeInTheDocument();
});
