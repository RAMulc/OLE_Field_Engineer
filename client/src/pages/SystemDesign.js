import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import SystemDesignTable from "../components/SystemDesignTable";
import { Col, Row } from "../components/Grid";
import UserContext from '../context/userContext';
import { useHistory, Link } from 'react-router-dom';

function SystemDesign(props) {
    const [systemDesigns, setsystemDesigns] = useState([])
    const [formObject, setFormObject] = useState({
        ptaDgnNo: "",
        allocRef: "",
        title: ""
    });
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) {
            console.log("userData", userData);
            history.push("/signin");
        } else {
            API.getSystemDesign()
                .then((res) => {
                    setsystemDesigns(res.data);
                })
                .catch(err => console.log(err));
        }
    }, []);

    useEffect(() => {
        filterSystemDesign();
    }, [formObject]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function filterSystemDesign() {
        const sysData = {
            ptaDgnNo: formObject.ptaDgnNo,
            allocRef: formObject.allocRef,
            title: formObject.title
        };

        API.getSystemDesignByFilter(JSON.stringify(sysData))
            .then((res) => {
                setsystemDesigns(res.data);
                //console.log("results:", res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            {userData.user ? (
                <div>
                    <Row>
                        <Col size={"12"} justify={'align-self-center'}>
                            <p className='float-left'>Search by:</p>
                            <SearchBox
                                handleInputChange={handleInputChange}
                                name="ptaDgnNo"
                                value={formObject.ptaDgnNo}
                                filterby="PTA Drawing No."
                            />
                            <SearchBox
                                handleInputChange={handleInputChange}
                                name="allocRef"
                                value={formObject.allocRef}
                                filterby="Allocation Ref."
                            />
                            <SearchBox
                                handleInputChange={handleInputChange}
                                name="title"
                                value={formObject.title}
                                filterby="Title"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size={"12"} justify={'align-self-start'}>
                            <SystemDesignTable DataTable={systemDesigns} />
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

export default SystemDesign;
