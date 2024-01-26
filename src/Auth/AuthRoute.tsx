import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "utils/helper";

export const AuthRoute = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = getCookie('jwt');
      if (token) {
        navigate("/");
      }
    }, [navigate]);

    return (
      <section>
        <Outlet />
      </section>
    );
  };