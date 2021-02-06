import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import UserTable from "../components/UserTable";
import { Col, Row } from "../components/Grid";
import UserContext from '../context/userContext';
import { useHistory, Link } from 'react-router-dom';

function Users(props) {
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({
        name: ""
    });
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) {
            // console.log("userData", userData);
            history.push("/signin");
        } else {
            API.getAllUsers()
                .then((res) => {
                    // console.log("res", res);
                    setUsers(res.data);
                })
                .catch(err => console.log(err));
        }
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
        <>
            {userData.user ? (
                <div>
                    <Row>
                        <Col size={"12"} justify={'align-self-center'}>
                            <p className='float-left'>Search for User by name:</p>
                            <SearchBox
                                handleInputChange={handleInputChange}
                                name="name"
                                value={formObject.name}
                                filterby="name"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size={"12"} justify={'align-self-start'}>
                            <UserTable DataTable={users} />
                        </Col>
                    </Row>
                </div>
            ) : (
                    <div>
                        <h2>You are not logged in</h2>
                        <Link to="/signin">Sign in</Link>
                    </div>
                )}

        </>
    );
}

export default Users;
