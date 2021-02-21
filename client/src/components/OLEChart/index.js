import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

function OLEChart(props) {

    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);

    useEffect(() => {
        setOptions(props.chartOptions);
        setSeries(props.chartSeries);
    }, [props]);

    return (
        <div>
            <Chart
                options={options}
                series={series}
                width= '100%'
            />
        </div>
    );
}

export default OLEChart;
