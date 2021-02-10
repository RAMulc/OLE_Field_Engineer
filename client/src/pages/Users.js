import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import InputBox from "../components/InputBox";
import UserTable from "../components/UserTable";
import { Container, Col, Row } from "../components/Grid";
import UserContext from '../context/userContext';
import { Link } from 'react-router-dom';

import "./style.css";
import bgrnd from "../assets/bgrnd5.jpg";

function Users() {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({
        name: ""
    });
    const { userData } = useContext(UserContext);

    useEffect(() => {
        API.getAllUsers()
            .then((res) => {
                // console.log("res", res);
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        filterUsers();
    }, [formObject]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function filterUsers() {
        const userName = {
            name: formObject.name
        };

        // API.getSystemDesignByFilter(JSON.stringify(userName))
        //     .then((res) => {
        //         setsystemDesigns(res.data);
        //         //console.log("results:", res.data);
        //     })
        //     .catch(err => console.log(err));
        API.getAllUsers()
            .then((res) => {
                // console.log("res", res);
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <Container fluid={true}>
            <div className={"wrap"}>
                <img src={bgrnd} alt="OLE Background" />
                <div className={"main-page"}>
                    {userData.isAdmin ? (
                        <div>
                            <Row>
                                <Col size={"12"} justify={'align-self-center'}>
                                    <p className='float-left'>Search for User by name:</p>
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="name"
                                        value={formObject.name}
                                        placeholderText="name"
                                        clasNam="search"
                                    />
                                </Col>
                            </Row>
                                <Row>
                                    <Col size={"2"} />
                                    <Col size={"8"} >
                                        <UserTable DataTable={users} />
                                    </Col>
                                </Row>
                        </div>
                    ) : (
                            <div>
                                <h2>You are not authorised to view user data</h2>
                                <Link to="/">Back to System Design</Link>
                            </div>
                        )}
                </div>
            </div>
        </Container >
    );
}

export default Users;
