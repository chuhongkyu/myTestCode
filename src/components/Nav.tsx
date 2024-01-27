import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <nav style={{ display : "flex", gap: "10px"}}>
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
            <NavLink
                to="/protect/mypage"
                style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
                }}
            >
                마이페이지
            </NavLink>
        </nav>
    )
}

export default Nav