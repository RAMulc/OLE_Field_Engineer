import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";

function Pdf(props) {
    const [pdfLink, setPdfLink] = useState();
    const [zoom, setZoom] = useState(1);

    const { id } = useParams()
    useEffect(() => {
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
        console.log(event.target);
        switch (event.target.name) {
            case "inc":
                setZoom(zoom + 0.1);
                //console.log(zoom);
                break;
            case "dec":
                setZoom(Math.max(0.1, zoom - 0.1));
                //console.log(zoom);
                break;
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        {id.substring(0, 12)}
                    </Jumbotron>
                    <Button onClick={onScaleClick} name="dec" label={"-"}></Button>
                    <Button onClick={onScaleClick} name="inc" label={"+"}></Button>
                    <Document file={pdfLink}>
                        <Page pageNumber={1} scale={zoom} />
                    </Document>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Link to="/">← Back to Search</Link>
                </Col>
                
            </Row>
        </Container>

    );
}

export default Pdf;