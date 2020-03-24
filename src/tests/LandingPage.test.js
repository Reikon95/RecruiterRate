import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../landingpage/LandingPage';

test('renders header', () => {
  const { getByText } = render(<LandingPage />);
  const linkElement = getByText(/hiring/i);
  expect(linkElement).toBeInTheDocument();
});

test('button is present', () => {
  const {getAllByRole} = render(<LandingPage/>);
  const button = getAllByRole('button');
  expect(button).toBeTruthy();
  expect(button).toHaveLength(1);
})


test('link to log in is present', () => {
  const {getAllByTestId} = render(<LandingPage/>);
  const link = getAllByTestId('loginLink');
  expect(link).toBeTruthy();
  expect(link).toHaveLength(1);
})

test('expect the header to be present, and recruiterrate to be mentioned in the copy', () => {
  const { getAllByText } = render(<LandingPage />);
  const recruiterrate = getAllByText(/RecruiterRate/i);
  expect(recruiterrate).toBeTruthy();
  expect(recruiterrate).toHaveLength(2);

})