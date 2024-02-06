import { mockMyPage } from "mock/auth";
import { useEffect, useState } from "react";
import { getCookie } from "utils/helper";

function Mypage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const onHandleMypage = async (token:string) => {
    try {
      const response = await mockMyPage(token);
      
      if(response.data.user){
        setFormData(response.data.user)
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  useEffect(() => {
    const token = getCookie('jwt');
    if(token){
      onHandleMypage(token)
    }
  }, []);


  return (
    <div>
      <h1>마이 페이지</h1>
      <form>
          <label htmlFor="email">이메일</label>
          <input readOnly id="email" name="email" value={formData.email} type="email" maxLength={25} placeholder={"이메일"}/>
          <label htmlFor="password">비밀번호</label>
          <input readOnly id="password" name="password" value={formData.password} type='password' maxLength={25} placeholder={"비밀번호"}/>
      </form>
    </div>
  );
}

export default Mypage;
