import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const isAuthenticated = false;
    if (!isAuthenticated) {
      navigate("/signin");
    }
    return (
      <section>
        <h1>Protected</h1>
        <Outlet />
      </section>
    );
  };