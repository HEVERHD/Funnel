import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Generar 500 transacciones aleatorias
const generateTransactionsData = (numTransactions) => {
    const transactions = [];
    for (let i = 1; i <= numTransactions; i++) {
        transactions.push({
            transactionId: i,
            executionTime: Math.floor(Math.random() * 100) + 1, // Tiempo de ejecución entre 1 y 100 ms
        });
    }
    return transactions;
};

const transactionsData = generateTransactionsData(1000);

// Custom shape for the scatter bubbles
const CustomCircle = (props) => {
    const { cx, cy, fill, opacity } = props;
    return (
        <circle cx={cx} cy={cy} r={8} fill={fill} opacity={opacity} stroke="#1E1E1E" strokeWidth={2} />
    );
};

const CustomBubbleChart = () => {
    return (
        <ScatterChart width={800} height={400}>
            <CartesianGrid />
            <XAxis type="number" dataKey="transactionId" name="ID de Transacción" />
            <YAxis type="number" dataKey="executionTime" name="Tiempo de Ejecución (ms)" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter
                name="Transacción"
                data={transactionsData}
                fill="#8884d8"
                shape={<CustomCircle />}
                isAnimationActive={true}
                animationBegin={10}
                animationDuration={1500}
                animationEasing="ease"
            />
        </ScatterChart>
    );
};

export default CustomBubbleChart;
