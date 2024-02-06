interface IUser {
  email: string;
  password: string;
}

interface ApiResponse<T> {
  data: T;
  message: string;
}

type SignUpResponse = ApiResponse<{ user: IUser }>;
type LoginResponse = ApiResponse<{ token: string }>;

//회원 가입
const users: IUser[] = [
  {
    email: "exist@naver.com",
    password: "password123"
  }
];

export const mockSignUp = (userData:IUser): SignUpResponse => {
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error("이미 가입된 이메일입니다.");
  }
  const newUser = userData;
  users.push(newUser);
  return { data: { user: newUser }, message: "회원가입 성공" };
};

export const mockLogin = (userData:IUser): LoginResponse => {
  const user = users.find(user => user.email === userData.email && user.password === userData.password);
  if (user) {
    return { data: { token: "mock-jwt-token" }, message: "로그인 성공" };
  } else {
    throw new Error("비밀번호가 올바르지 않습니다.");
  }
};

export const mockMyPage = (authToken:string) => {

  const getUserInfoFromToken = (token:string) => {
    const mockUser = {
      email: 'exist@naver.com',
      password: 'password123'
    };
    if(token) return mockUser;
  };

  const userInfo = getUserInfoFromToken(authToken);

  return { data: { user: userInfo }, message: '마이페이지 조회 성공' };
};