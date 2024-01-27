import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('홈', () => {
  render(<App />,{ wrapper: BrowserRouter });
  const home = screen.getByText('홈')
  expect(home).toBeInTheDocument();
});