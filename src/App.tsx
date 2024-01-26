import { FormEvent, useState } from 'react';
import './App.css';
import { mockLogin } from '../mock/auth'

function App() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  })

  const onHandleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await mockLogin(formData);
      console.log(response);

    } catch (error) {
      console.log((error as Error).message);
    }
  }

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div className="App">
      <h1>로그인</h1>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="email">이메일</label>
        <input id="email" name="email" type="email" maxLength={25} placeholder={"이메일"} onChange={onHandleChange}/>
        <label htmlFor="password">비밀번호</label>
        <input id="password" name="password" type='password' maxLength={25} placeholder={"비밀번호"} onChange={onHandleChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
