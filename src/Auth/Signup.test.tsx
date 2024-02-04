import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Signup from "./Signup";
import { mockSignUp } from "mock/auth";
import { BrowserRouter } from "react-router-dom";

jest.mock('mock/auth', () => ({
    mockSignUp: jest.fn()
}));

test('회원가입 테스트',() => {
    render(<Signup/>, { wrapper: BrowserRouter })
    const title = screen.getByText('회원가입')
    const emailLabel = screen.getByLabelText('이메일')
    const passwordLabel = screen.getByLabelText('비밀번호')

    expect(title).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument()
})

test('입력 테스트',() => {
    render(<Signup/>, { wrapper: BrowserRouter })
    const emailInput = screen.getByPlaceholderText("이메일") as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText("비밀번호")as HTMLInputElement;
    
    fireEvent.change(emailInput, { target : { value : 'user@example.com'}})
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('user@example.com');
    expect(passwordInput.value).toBe('password123');
})


test('회원가입 제출하기', async() => {
    render(<Signup/>,{ wrapper: BrowserRouter })
    const emailInput = screen.getByPlaceholderText("이메일") as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText("비밀번호")as HTMLInputElement;
    const button = screen.getByRole('button', { name: '제출하기' });

    fireEvent.change(emailInput, { target : { value : 'user@example.com'}})
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(button)

    await waitFor(()=>{
        expect(mockSignUp).toHaveBeenCalledWith({
            email: 'user@example.com',
            password: 'password123',
        });
    })
})