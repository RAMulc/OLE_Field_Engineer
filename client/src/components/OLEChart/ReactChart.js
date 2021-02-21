import React, { useState, useEffect } from 'react'
import { Chart } from 'react-charts'

// import './style.css';


function OLEChart(props) {
    const data = React.useMemo(
        () => [
            {
                label: props.lbel,
                data: props.chartData
            },
        ],
        [props.chartData]
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        [props.chartData]
    )

    return (
        <div>
            <div
                style={{
                    width: '500px',
                    height: '400px'
                }}
            >
                <Chart className={"chart"} data={data} axes={axes} />
            </div>
        </div>
    );
}

export default OLEChart;