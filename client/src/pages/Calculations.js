import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Col, Row, Container } from "../components/Grid";
import { BlowOff, Sag } from '../components/Calculations';
import TensionState from '../components/Calculations/TensionState';

function Calculations() {
    const [calcType, setCalcType] = useState();

    function onsubmit(event) {
        let { name } = event.target;
        setCalcType(name);
    };

    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col size="2">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-item-button">
                                Select Calculation
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={onsubmit} name={"sag"} href="#">
                                    Conductor Sag
                                </Dropdown.Item>
                                <Dropdown.Item onClick={onsubmit} name={"blow-off"} href="#">
                                    Conductor Blow-Off
                                </Dropdown.Item>
                                <Dropdown.Item onClick={onsubmit} name={"tensionState"} href="#">
                                    Temperature Tension
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col size="12">
                        {calcType === "blow-off" && <BlowOff />}
                        {calcType === "sag" && <Sag />}
                        {calcType === "tensionState" && <TensionState />}
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Calculations;