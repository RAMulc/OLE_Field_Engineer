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
    const [chartSeries, setChartSeries] = useState([
        {
            name: "Tension/Span",
            data: []
        }
    ]);

    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "TensionState",
            offsetX: -10,
            offsetY: -10,
            type: "line",
            toolbar: { tools: { download: false } }
        },
        title: {
            text: 'Tension Variation by Span Length',
            align: 'left',
            style: {
                fontSize: "16px",
            }
        },
        xaxis: {
            categories: [],
            title: { text: "Span (m)" },
            hideOverlappingLabels: true,
            tickAmount: 10,
            axisTicks: { show: true }
        },
        yaxis: {
            title: { text: "Tension (kN)" },
            axisTicks: { show: true }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: 1
        }
    })

    useEffect(() => {
        setFinalTens("...calculating...");
        calculate();
    }, []);

    useEffect(() => {
        setFinalTens("...calculating...");
        calculate();
    }, [formObject]);

    useEffect(() => {
        spanRange();
    }, [finalTens]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function calculate() {
        CalcAPI.getTensionState(formObject)
            .then((res) => {
                setFinalTens(Math.round(parseFloat(res.data)));
            })
            .catch(err => console.log(err));
    };

    function spanRange() {
        const minSpan = 5;
        const maxSpan = 70;
        const catData = [];
        const seriesData = [];
        setChartSeries([
            {
                name: "Tension/Span",
                data: []
            }
        ]);
        try {
            for (let i = minSpan; i <= maxSpan; i = i + 1) {
                const sData = { ...formObject, span: i };
                CalcAPI.getTensionState(sData)
                    .then((res) => {
                        if (i % 5 === 0) catData.push(i);
                        seriesData.push({ x: i, y: Math.round(res.data) });
                        if (i === maxSpan) {
                            setChartSeries([
                                {
                                    name: "Tension/Span",
                                    data: seriesData
                                }
                            ]);
                            const ta = (maxSpan - minSpan) / 5;
                            setChartOptions({
                                ...chartOptions,
                                chartOptions: { xaxis: { categories: catData, tickAmount: ta } }
                            });
                            return;
                        }
                    })
                    .catch(err => console.log(err));
            }
        }
        catch (err) {
            console.log(err.message);
        }

    }

    return (

        <Row>
            <div className={"inputs"}>

                <Col size={"sm-5"}>
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
            </div>

            <Col size={"sm-7"}>
                <div className={"ole-chart"}>
                    <Row>
                        <Col size={"12"}>
                            <InputBox
                                name="tens1"
                                value={finalTens}
                                id="tens1"
                                placeholderText={"Final Tension (N) @ Span=" + formObject.span + "m"}
                                clasNam="search medium"
                                type="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size={"12"}>
                            <OLEChart chartOptions={chartOptions} chartSeries={chartSeries} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row >

    );
}

export default TensionState;
