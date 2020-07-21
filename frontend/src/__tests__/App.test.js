import React from 'react';

import { render } from '@testing-library/react';

import App from '../App';

test('renders Mobiliza title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Mobiliza/i);
  expect(linkElement).toBeInTheDocument();
});
