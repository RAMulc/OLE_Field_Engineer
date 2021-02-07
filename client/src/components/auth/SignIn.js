import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../context/userContext";
import ErrorNotification from "../ErrorNotification";
import { Container, Col, Row } from "../../components/Grid";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

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
        console.log("ud", userData);
        API.userSignIn(userData)
            .then((res) => {
                console.log("rd", res.data);
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
                        // for (const [key, value] of Object.entries(inputErrors[i])) {
                        // iErrors.push(`${key}: ${value}`);
                        for (const [value] of Object.entries(inputErrors[i])) {
                            iErrors.push(`${value}`);
                        }
                    }
                    setError(iErrors);
                }
            });
    };

    return (
        <Container>
            <Row>
                <Col size={"8"}>
                    <br />
                    <h4>
                        <b>Login</b>
                    </h4>
                    <p>
                        Don't have an account? <Link to="/signup">Register </Link>
                    </p>
                    <Row>
                        <Col size={"5"}>
                            <InputBox
                                handleInputChange={onChange}
                                name="email"
                                value={user.email}
                                id="email"
                                placeholderText="email"
                                clasNam="input"
                                type="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size={"5"}>
                            <InputBox
                                handleInputChange={onChange}
                                name="password"
                                value={user.password}
                                id="password"
                                placeholderText="Password"
                                clasNam="input"
                                type="password"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size={"5"}>
                            {error.length > 0 && <ErrorNotification messages={error} clearError={() => setError([])} />}
                        </Col>
                    </Row>
                    <Row>
                        <Col size={"5"}>
                                <Button onClick={onSubmit} name="login" label="Login"></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;