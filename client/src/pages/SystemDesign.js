import React, { Component } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import SystemDesignTable from "../components/SystemDesignTable";
import { Col, Row } from "../components/Grid";

class SystemDesign extends Component {
    state = {
        results: [],
        search: "",
        err: ""
    };

    origData = [];

    componentDidMount() {
        API.getSystemDesign()
            .then((res) => {
                this.origData = res.data;
                this.setState({ results: res.data });
                //console.log("results", res.data);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        // console.log("Changed", event.target.value);
        if (event.target.value === "") {
            // console.log("null: ", event.target.value);
            this.setState({ results: this.origData });
        }
        else {
            const tData = this.origData;
            const filteredResults = tData.filter(
                dgn => dgn.allocReference.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
            this.setState({ results: filteredResults });
        }

    };

    render() {
        return (
            <div>
                <Row>
                    <Col size={"12"} justify={'align-self-center'}>
                        <SearchBox
                            handleInputChange={this.handleInputChange}
                            name={this.state.search}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size={"12"} justify={'align-self-start'}>
                        <SystemDesignTable DataTable={this.state.results} />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default SystemDesign;
