import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "utils/helper";

export const ProtectedRoute = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = getCookie('jwt');
      if (!token) {
        navigate("/auth/login");
      }
    }, [navigate]);

    return (
      <section>
        <h1>Protected</h1>
        <Outlet />
      </section>
    );
  };