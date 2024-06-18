import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const generateData = (baseval, count, yrange) => {
    let i = 0;
    let series = [];
    const fixedZ = 30;
    while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y, fixedZ]);
        baseval += 86400000;
        i++;
    }
    return series;
}

const Burbujas = () => {
    const [series, setSeries] = useState([
        {
            name: 'Bubble1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 })
        },
        // {
        //     name: 'Bubble2',
        //     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 })
        // },
    ]);

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'bubble'
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1
        },
        title: {
            text: 'Reportes Funnel  '
        },
        xaxis: {
            tickAmount: 12,
            type: 'category'
        },
        yaxis: {
            max: 70
        }
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="bubble" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Burbujas;
