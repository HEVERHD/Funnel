import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';

const data = [
    {
        name: 'Invitacion created',
        value: 1000,
        fill: '#FF4560',
    },
    {
        name: 'Invitacion opened',
        value: 980,
        fill: '#775DD0',
    },
    {
        name: 'Show consent',
        value: 960,
        fill: '#FEB019',
    },
    {
        name: 'Accept consent',
        value: 900,
        fill: '#00E396',
    },
];

const CustomFunnelChart = () => {
    return (
        <FunnelChart width={730} height={250}>
            <Tooltip />
            <Funnel dataKey="value" data={data} isAnimationActive>
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
            </Funnel>
        </FunnelChart>
    );
};

export default CustomFunnelChart;
