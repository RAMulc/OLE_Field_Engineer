import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../context/userContext";
import ErrorNotification from "../ErrorNotification";
import { Container, Col, Row } from "../../components/Grid";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

import "./style.css";
import bgrnd from "../../assets/bgrnd3.JPG";

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
        <Container fluid={true}>
            <div className={"wrap"}>
                {/* <img src={bgrnd} alt="OLE Background" /> */}
                <div className={"login"}>
                    <Row>
                        <Col size={"sm-6 md-8 lg-9"}>

                        </Col>
                        <Col size={"sm-6 md-4 lg-3"}>
                            <div className={"input-form"}>
                                <br />
                                <h4>
                                    <b>Register</b>
                                </h4>
                                <p className="grey-text text-darken-1">
                                    Already have an account? <Link to="/signin">Log in</Link>
                                </p>
                                <Row>
                                    <Col size={"12"}>
                                        <InputBox
                                            handleInputChange={onChange}
                                            name="name"
                                            value={user.name}
                                            id="name"
                                            placeholderText="Name"
                                            clasNam="input"
                                            type="text"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={"12"}>
                                        <InputBox
                                            handleInputChange={onChange}
                                            name="email"
                                            value={user.email}
                                            id="email"
                                            placeholderText="Email"
                                            clasNam="input"
                                            type="text"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={"12"}>
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
                                    <Col size={"12"}>
                                        <InputBox
                                            handleInputChange={onChange}
                                            name="password2"
                                            value={user.password2}
                                            id="password2"
                                            placeholderText="Verify Password"
                                            clasNam="input"
                                            type="password"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={"12"}>
                                        {error.length > 0 && <ErrorNotification messages={error} clearError={() => setError([])} />}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={"12"}>
                                        <Button onClick={onSubmit} name="register" label="Register"></Button>
                                    </Col>
                                </Row>
                                <br />
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        </Container >
    );
}

export default SignUp;