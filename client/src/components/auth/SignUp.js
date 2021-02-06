import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../context/userContext";
import ErrorNotification from "../ErrorNotification";

function SignUp() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });
    const [error, setError] = useState([]);

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    function onChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    function onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password,
            password2: user.password2
        };
        API.userSignUp(newUser)
            .then((res) => {
                console.log("res", res);
                setUserData({
                    token: "",
                    user: res.data.result.name,
                    email: res.data.result.email,
                    isAdmin: false
                })
                history.push("/signin");
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
                            <b>Register</b>
                        </h4>
                        <p className="grey-text text-darken-1">
                            Already have an account? <Link to="/signin">Log in</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={user.name}
                                id="name"
                                type="text"
                            />
                            <label htmlFor="name">Name</label>
                        </div>
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
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={user.password2}
                                id="password2"
                                type="password"
                            />
                            <label htmlFor="password2">Confirm Password</label>
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
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;