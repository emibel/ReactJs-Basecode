import React from 'react';
import App from './App';
import { renderWithStore } from './helpers/testing';

test('It should have text Home', () => {
  const { getByText } = renderWithStore(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
