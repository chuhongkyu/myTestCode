import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <NavLink
                to="/auth/login"
                style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
                }}
            >
                Login
            </NavLink>
            <NavLink
                to="/auth/signup"
                style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
                }}
            >
                회원가입
            </NavLink>
        </nav>
    )
}

export default Nav