import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';

const data = [
    {
        name: 'Invitation Created',
        value: 1000,
        fill: '#1f77b4',
    },
    {
        name: 'Invitation opened',
        value: 980,
        fill: '#aec7e8',
    },
    {
        name: 'Show consent',
        value: 960,
        fill: '#ffbb78',
    },
    {
        name: 'Accept consent',
        value: 900,
        fill: '#98df8a',
    },
    {
        name: 'Show tips selfie',
        value: 888,
        fill: '#ff9896',
    },
    {
        name: 'Btn continue to take selfie',
        value: 870,
        fill: '#9467bd',
    },
    {
        name: 'Show post selfie',
        value: 850,
        fill: '#c5b0d5',
    },
    {
        name: 'Btn continue to Front',
        value: 830,
        fill: '#8c564b',
    },
    {
        name: 'Show tips front',
        value: 820,
        fill: '#c49c94',
    },
    {
        name: 'Btn continue to take front',
        value: 800,
        fill: '#e377c2',
    },
    {
        name: 'Show post front',
        value: 790,
        fill: '#f7b6d2',
    },
    {
        name: 'Btn continue to Back',
        value: 790,
        fill: '#7f7f7f',
    },
    {
        name: 'Show tips back',
        value: 780,
        fill: '#c7c7c7',
    },
    {
        name: 'Btn continue to take back',
        value: 740,
        fill: '#bcbd22',
    },
    {
        name: 'Show post back',
        value: 700,
        fill: '#dbdb8d',
    },
    {
        name: 'Btn continue to close',
        value: 680,
        fill: '#17becf',
    },
    {
        name: 'Send result to project',
        value: 650,
        fill: '#9edae5',
    },
    {
        name: 'Show screen result',
        value: 630,
        fill: '#ff7f0e',
    },
];

const CustomFunnelChart = () => {
    return (
        <FunnelChart width={730} height={850}>
            <Tooltip />
            <Funnel dataKey="value" data={data} isAnimationActive>
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
            </Funnel>
        </FunnelChart>
    );
};

export default CustomFunnelChart;
