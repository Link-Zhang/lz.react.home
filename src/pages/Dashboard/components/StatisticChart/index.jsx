import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './index.css';

const StatisticChart = (data) => {
    return (
        <div className={"chart"}>
            <div className={"title"}>房屋情况表</div>
            <ResponsiveContainer minHeight={360}>
                <LineChart data={data}>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatisticChart;
