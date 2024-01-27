import App from "App"
import { AuthRoute } from "Auth/AuthRoute";
import Login from "Auth/Login";
import Signup from "Auth/Signup";
import NotFound from "NotFound";
import Mypage from "pages/Mypage";
import { ProtectedRoute } from "pages/ProtectedRoute";

const routerInfo = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "auth",
                element: <AuthRoute/>,
                children: [
                    {
                        path: "login",
                        element: <Login/>,
                    },
                    {
                        path: "signup",
                        element: <Signup/>,
                    },
                ]
            },
            {
                path: "protect",
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: "mypage",
                        element: <Mypage/>,
                    },
                ] 
            },
        ],
        errorElement: <NotFound />,
    },
    
]

export default routerInfo