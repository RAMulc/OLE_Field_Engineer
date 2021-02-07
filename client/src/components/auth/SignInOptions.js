import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";

function SignInOptions() {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    // const signup = () => history.push("/signup");
    const signin = () => history.push("/signin");
    const signout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <Link
                    to="/"
                    onClick={signout}
                    className="nav-link"
                >
                    Logout
                </Link>
            ) : (
                    <Link
                        to="/signin"
                        onClick={signin}
                        className="nav-link"
                    >
                        Login / Register
                    </Link>
                )}
        </nav>
    )
}

export default SignInOptions;
