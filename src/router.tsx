import App from "App"
import Login from "Auth/Login";
import Signup from "Auth/Signup";
import Mypage from "pages/Mypage";
import { ProtectedRoute } from "pages/ProtectedRoute";

const routerInfo = [
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/protect",
        element: <ProtectedRoute/>,
        children: [
            {
                path: "login",
                element: <Mypage/>,
            },
        ]
        
    },
]

export default routerInfo