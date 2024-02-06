import { render, screen, waitFor } from "@testing-library/react"
import Mypage from "./Mypage"
import { mockMyPage } from "mock/auth"

jest.mock('mock/auth', () => ({
    mockMyPage: jest.fn(),
}));

describe('MyPage Component', () => {
    it('token', async () => {
        const token = 'mock-jwt-token'

        document.cookie = 'jwt=mock-jwt-token'

        render(<Mypage />)

        await waitFor(() => {
            expect(mockMyPage).toHaveBeenCalledWith(token)
        });
    });
});