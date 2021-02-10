import React, { useState } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import { BlowOff, Sag } from '../components/Calculations';

function Calculations() {
    const [calcType, setCalcType] = useState();

    function onsubmit(event) {
        let { name } = event.target;
        setCalcType(name);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col size="2">
                        <Button onClick={onsubmit} name="blow-off" label={"Blow Off"}></Button>
                        <Button onClick={onsubmit} name="sag" label={"Conductor Sag"}></Button>
                    </Col>
                    <Col size="8">
                        {calcType === "blow-off" && <BlowOff />}
                        {calcType === "sag" && <Sag />}
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Calculations;