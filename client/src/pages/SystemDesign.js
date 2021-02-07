import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import InputBox from "../components/InputBox";
import SystemDesignTable from "../components/SystemDesignTable";
import { Container, Col, Row } from "../components/Grid";
import SystemDesignContext from '../context/SystemDesignContext';

function SystemDesign() {
    const { systemDesigns, setsystemDesigns } = useContext(SystemDesignContext);
    const [formObject, setFormObject] = useState({
        ptaDgnNo: "",
        allocRef: "",
        title: ""
    });

    useEffect(() => {
        API.getSystemDesign()
            .then((res) => {
                setsystemDesigns(res.data);
            })
            .catch(err => console.log(err));
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
            })
            .catch(err => console.log(err));
    };

    return (
        <Container fluid={true}>
            <Row>
                <Col size={"1"} justify={'align-self-start'}>
                    <p className='float-left'>Search by:</p>
                </Col>
                <Col size={"11"} justify={'align-self-start'}>
                    <InputBox
                        handleInputChange={handleInputChange}
                        name="ptaDgnNo"
                        value={formObject.ptaDgnNo}
                        id="PTA Drawing No."
                        placeholderText="PTA Drawing No."
                        clasNam="search"
                        type="text"
                    />
                    <InputBox
                        handleInputChange={handleInputChange}
                        name="allocRef"
                        value={formObject.allocRef}
                        id="allocRef"
                        placeholderText="Allocation Ref."
                        clasNam="search"
                        type="text"
                    />
                    <InputBox
                        handleInputChange={handleInputChange}
                        name="title"
                        value={formObject.title}
                        id="title"
                        placeholderText="Title"
                        clasNam="search"
                        type="text"
                    />
                </Col>
            </Row>
            <Row>
                <Col size={"12"} justify={'align-self-center'}>
                    <SystemDesignTable DataTable={systemDesigns} />
                </Col>
            </Row>
        </Container>
    );
}

export default SystemDesign;
