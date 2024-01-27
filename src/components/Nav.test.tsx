import { render, screen, fireEvent } from "@testing-library/react"
import Nav from "./Nav"
import { BrowserRouter } from "react-router-dom";

test('네비게이션 - login', () => {
    render(<Nav/>,{ wrapper: BrowserRouter });
    const loginLink = screen.getByText("Login");

    expect(loginLink).toBeInTheDocument();

    fireEvent.click(loginLink); 
    expect(window.location.pathname).toBe("/auth/login");
})


test('네비게이션 - 회원가입', () => {
    render(<Nav/>,{ wrapper: BrowserRouter });
    const signupLink = screen.getByText("회원가입");

    expect(signupLink).toBeInTheDocument();

    fireEvent.click(signupLink); 
    expect(window.location.pathname).toBe("/auth/signup");
})

test('네비게이션 - 마이페이지', () => {
    render(<Nav/>,{ wrapper: BrowserRouter });
    const mypageLink = screen.getByText("마이페이지");

    expect(mypageLink).toBeInTheDocument();

    fireEvent.click(mypageLink); 
    expect(window.location.pathname).toBe("/protect/mypage");
})