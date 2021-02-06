import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../context/userContext";
import ErrorNotification from "../ErrorNotification";

function SignIn() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState([]);

    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        setUser({ ...user, email: userData.email });
    }, []);

    function onChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    function onSubmit(e) {
        e.preventDefault();
        const userData = {
            email: user.email,
            password: user.password
        };
        API.userSignIn(userData)
            .then((res) => {
                setUserData({
                    token: res.data.token,
                    user: res.data.message.name,
                    isAdmin: res.data.message.isAdmin
                })
                localStorage.setItem("auth-token", res.data.token);
                history.push("/");
            })
            .catch(err => {
                const inputErrors = err.response.data.errors;
                if (inputErrors) {
                    let iErrors = [];
                    for (let i = 0; i < inputErrors.length; i++) {
                        for (const [key, value] of Object.entries(inputErrors[i])) {
                            //iErrors.push(`${key}: ${value}`);
                            iErrors.push(`${value}`);
                        }
                    }
                    setError(iErrors);
                }
            });
    };

    return (
        <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
                <div className="col s8 offset-s2">
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4>
                            <b>Login</b>
                        </h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/signup">Register </Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={user.email}
                                id="email"
                                type="email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={user.password}
                                id="password"
                                type="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        {error.length > 0 && <ErrorNotification messages={error} clearError={() => setError([])} />}
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;