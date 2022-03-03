import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Welcome page', () => {
  <BrowserRouter>
    render(<App />);
  </BrowserRouter>
});
