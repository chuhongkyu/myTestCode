import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { mockLogin } from 'mock/auth';

jest.mock('mock/auth', () => ({
  mockLogin: jest.fn()
}));


test('로그인 폼이 제대로 렌더링되는지 확인', () => {
  render(<Login />);
  const emailLabel = screen.getByLabelText("이메일");
  const passwordLabel = screen.getByLabelText("비밀번호");
  const button = screen.getByRole('button', { name: 'Login' });
  
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('입력 테스트', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText("이메일") as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText("비밀번호")as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  expect(emailInput.value).toBe('user@example.com');
  expect(passwordInput.value).toBe('password123');
});

test('로그인 테스트', async() => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText("이메일") as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText("비밀번호")as HTMLInputElement;
  const button = screen.getByRole('button', { name: 'Login' });

  fireEvent.change(emailInput, { target: { value: 'exist@naver.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  fireEvent.click(button);
  
  await waitFor(() => {
    expect(mockLogin).toHaveBeenCalledWith({ email: 'exist@naver.com', password: 'password123' });
  });
});


test('로그인 틀렸을 때', async() => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText("이메일") as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText("비밀번호")as HTMLInputElement;
  const button = screen.getByRole('button', { name: 'Login' });

  fireEvent.change(emailInput, { target: { value: 'exist@naver.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  fireEvent.click(button);

  await waitFor(() => {
    expect(mockLogin).toHaveBeenCalledWith({ email: 'exist@naver.com', password: 'password123' });
  });
});