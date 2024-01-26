import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('로그인 폼이 제대로 렌더링되는지 확인', () => {
  render(<App />);
  const home = screen.getByText('홈')
  expect(home).toHaveTextContent('홈')
});