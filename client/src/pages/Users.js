import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import InputBox from "../components/InputBox";
import UserTable from "../components/UserTable";
import { Container, Col, Row } from "../components/Grid";
import UserContext from '../context/userContext';
import AllUsersContext from '../context/allUsersContext';
import AllUsersSearchContext from '../context/allUsersSearchContext';
import { Link } from 'react-router-dom';

import "./style.css";

function Users() {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({
        name: ""
    });
    const { userData } = useContext(UserContext);

    useEffect(() => {
        API.getAllUsers()
            .then((res) => {
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

        API.getUsersByFilter(JSON.stringify(userName))
            .then((res) => {
                setUsers(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <Container fluid={true}>
            <AllUsersContext.Provider value={{ users, setUsers }}>
                <AllUsersSearchContext.Provider value={{ formObject, setFormObject }}>
                    <div >
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
                                        <UserTable />
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
                </AllUsersSearchContext.Provider>
            </AllUsersContext.Provider>
        </Container >
    );
}

export default Users;
