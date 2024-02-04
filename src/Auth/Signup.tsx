import { mockSignUp } from "mock/auth"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const onHandleSignup = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await mockSignUp(formData)
            // console.log(response)
            if(response?.message){
                navigate('/auth/login')
            }
        }catch (error) {
            console.log((error as Error).message);
        }
    }

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    return(
        <div>
            <h1>회원가입</h1>
            <form onSubmit={onHandleSignup}>
                <label htmlFor="email">이메일</label>
                <input id="email" name="email" placeholder="이메일" type="email" maxLength={25} onChange={onHandleChange}/>
                <label htmlFor="password">비밀번호</label>
                <input id="password" name="password" placeholder="비밀번호" type="password" maxLength={25} onChange={onHandleChange}/>
                <button type="submit">제출하기</button>
            </form>
        </div>
    )
}

export default Signup