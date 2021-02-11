import React, { useState, useEffect, useContext } from 'react';
import API from "../utils/API";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import SystemDesignContext from '../context/SystemDesignContext';
import UserContext from '../context/userContext';

import "./style.css";
import bgrnd from "../assets/bgrnd6.jpg";

function Pdf() {
    const [drawingData, setDrawingData] = useState({
        _id: "",
        objectiveID: "",
        ptaDgnNumber: "",
        allocReference: "",
        title: "",
        otherDgnNumbers: [],
        revision: "",
        filename: ""
    });
    const [btnName, setBtnName] = useState("Update");
    const [pdfLink, setPdfLink] = useState();
    const [zoom, setZoom] = useState(0.8);
    const { systemDesigns } = useContext(SystemDesignContext);
    const { userData } = useContext(UserContext);

    const { id } = useParams();
    const dgnNo = id.slice(0, 12);

    useEffect(() => {
        let data = systemDesigns.filter(function (item) {
            return item.ptaDgnNumber == dgnNo;
        });
        setDrawingData(data[0]);
        getPdfLink(id);
    }, []);

    function getPdfLink(drawing) {
        API.getGoogleStoragePdf(drawing)
            .then((res) => {
                setPdfLink(res.data[1].mediaLink);
                //console.log("res", res.data[1].mediaLink);
            });
    };

    function onScaleClick(event) {
        event.preventDefault();
        switch (event.target.name) {
            case "inc":
                setZoom(zoom + 0.1);
                break;
            case "dec":
                setZoom(Math.max(0.1, zoom - 0.1));
                break;
            default:
                break;
        }
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (drawingData) {
            API.updateSystemDesign(drawingData._id, drawingData)
                .then(() => {
                    setBtnName("Updated");
                })
                .catch(err => console.log(err));
        }
    };

    function handleInputChange(event) {
        let { name, value } = event.target;
        if (name.toUpperCase() === "otherDgnNumbers".toUpperCase()) {
            value = value.split(',');
            value = value.map(num => num.toUpperCase());
        }
        setDrawingData({ ...drawingData, [name]: value })
        setBtnName("Update");
    };

    return (
        <Container fluid={true}>
            <div>
                <div style={{ height: '50px' }}>
                    <Row>
                        <Col size="12">
                            <Jumbotron>
                                <Button onClick={onScaleClick} name="dec" label={"  -  "}></Button>
                                {'  ' + id.substring(0, 12) + '  '}
                                <Button onClick={onScaleClick} name="inc" label={"  +  "}></Button>
                            </Jumbotron>
                        </Col>
                    </Row>
                </div>

                {userData.isAdmin &&
                    <Row>
                        <Col size="12">
                            <Row>
                                <Col size="10">
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="objectiveID"
                                        value={drawingData.objectiveID}
                                        id="objectiveID"
                                        placeholderText="Objective ID"
                                        clasNam="input medium"
                                        width='150px'
                                    />
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="ptaDgnNumber"
                                        value={drawingData.ptaDgnNumber}
                                        id="ptaDgnNumber"
                                        placeholderText="PTA Drawing Number"
                                        clasNam="input medium"
                                    />
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="allocReference"
                                        value={drawingData.allocReference}
                                        id="allocReference"
                                        placeholderText="Allocation Reference"
                                        clasNam="input medium"
                                        width='150px'
                                    />
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="revision"
                                        value={drawingData.revision}
                                        id="revision"
                                        placeholderText="Revision"
                                        clasNam="input narrow"
                                    />
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="filename"
                                        value={drawingData.filename}
                                        id="filename"
                                        placeholderText="File name"
                                        clasNam="input medium"
                                    />

                                </Col>
                            </Row>
                            <Row>
                                <Col size="10">
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="title"
                                        value={drawingData.title}
                                        id="title"
                                        placeholderText="Drawing Title"
                                        clasNam="input wide"
                                    />
                                    <InputBox
                                        handleInputChange={handleInputChange}
                                        name="otherDgnNumbers"
                                        value={drawingData.otherDgnNumbers.join(', ')}
                                        id="otherDgnNumbers"
                                        placeholderText="Other Drawing Numbers"
                                        clasNam="input wide"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="10">
                                    <div style={{padding: '20px'}}>
                                        <Button onClick={handleFormSubmit} name="update" label={btnName}></Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col size="12">

                    </Col>
                </Row>
                <Row>
                    <Col size="12">
                        <Link to="/" className={"link"}>.... ← Back to Search</Link>
                        <div className={"pdf-div"}>
                            <Document file={pdfLink} className={"pdf-doc"}>
                                <Page pageNumber={1} scale={zoom} />
                            </Document>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container >
    );
}

export default Pdf;