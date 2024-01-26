import { mockSignUp, mockLogin } from './auth';

const userData = {email:"testuser", password:"password123"}

describe("회원가입, 로그인 묵킹", () => {
  test("회원가입 테스트", () => {
    const response = mockSignUp(userData);
    expect(response).toEqual({ message: "회원가입 성공" });
  });

  test("이메일 중복 가입 확인 테스트", () => {
    expect(() => mockSignUp(userData)).toThrow("이미 가입된 이메일입니다.");
  });

  test("로그인 성공 테스트", () => {
    const response = mockLogin(userData);
    expect(response).toHaveProperty("token")
    expect(response).toEqual({ message: "로그인 성공" })
  });

  test("로그인 실패 테스트", () => {
    expect(() => mockLogin({email:"testuser", password:"wrong123"})).toThrow("비밀번호가 올바르지 않습니다.");
  });
});
