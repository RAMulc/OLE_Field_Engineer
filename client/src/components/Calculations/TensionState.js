import React, { useState, useEffect } from 'react';
import OLEChart from "../OLEChart";
import InputBox from "../InputBox";
import { Container, Col, Row } from "../Grid";
import CalcAPI from "../../utils/CalcAPI";

import "./style.css";

function TensionState() {
    const [formObject, setFormObject] = useState({
        youngsMod: 65000000000,
        csa: 157.5,
        alpha: 0.000023,
        tens0: 3490,
        temp0: 25,
        temp1: -5,
        wt0: 4.246,
        wt1: 4.246,
        span: 65
    });
    const [finalTens, setFinalTens] = useState();
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        calculate();
    }, []);

    useEffect(() => {
        calculate();
    }, [formObject]);

    // useEffect(() => {
    //     spanRange();
    // }, [finalTens]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function calculate() {
        CalcAPI.getTensionState(formObject)
            .then((res) => {
                setFinalTens(res.data);
            })
            .catch(err => console.log(err));
    };

    function spanRange() {
        const minSpan = 5;
        const maxSpan = 70;
        setChartData([]);
        const spanRange = [];
        for (let i = minSpan; i <= maxSpan; i = i + 5) {
            const sData = { ...formObject, span: i };
            CalcAPI.getTensionState(sData)
                .then((res) => {
                    const tData = [];
                    tData.push(i);
                    tData.push(res.data);
                    spanRange.push(tData);
                    if (spanRange.length > (maxSpan - minSpan) / 5) {
                        setChartData(spanRange);
                        return;
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <Container fluid={false}>
            <div>
                <Row>
                    <Col size={"4"} justify={'align-self-start'}>
                        <p>Calculate Tension change for Temperature Range:</p>
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="youngsMod"
                            value={formObject.youngsMod}
                            id="youngsMod"
                            placeholderText="Youngs' Modulus (N/sqm)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="csa"
                            value={formObject.csa}
                            id="csa"
                            placeholderText="Cross-Sectional Area (sqmm)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="alpha"
                            value={formObject.alpha}
                            id="alpha"
                            placeholderText="Coefficient of Expansion (/degC)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="tens0"
                            value={formObject.tens0}
                            id="tens0"
                            placeholderText="Setup Tension (N)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="temp0"
                            value={formObject.temp0}
                            id="temp0"
                            placeholderText="Setup Temperature (degC)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="temp1"
                            value={formObject.temp1}
                            id="temp1"
                            placeholderText="Final Temperature (degC)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="wt0"
                            value={formObject.wt0}
                            id="wt0"
                            placeholderText="Initial Unit Weight (N/m)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="wt1"
                            value={formObject.wt1}
                            id="wt1"
                            placeholderText="Final Unit Weight (N/m)"
                            clasNam="search medium"
                            type="text"
                        />
                        <InputBox
                            handleInputChange={handleInputChange}
                            name="span"
                            value={formObject.span}
                            id="span"
                            placeholderText="Span Length (m)"
                            clasNam="search medium"
                            type="text"
                        />
                    </Col>
                    <Col size={"8"}>
                        <Row>
                            <Col size={"12"}>
                                <InputBox
                                    name="tens1"
                                    value={Math.round(parseFloat(finalTens))}
                                    id="tens1"
                                    placeholderText="Final Tension (N)"
                                    clasNam="search medium"
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col size={"12"}>
                                {/* <div className={"ole-chart"}> */}
                                    {/* TODO - Disabled requires additional work*/}
                                    {/* <OLEChart chartData={chartData} lbel={"Temperature Tension"} /> */}
                                {/* </div> */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default TensionState;
