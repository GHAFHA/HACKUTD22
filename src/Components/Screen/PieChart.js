import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const RenderLineChart = () =>{

    return(
        <LineChart width={4000000} height={4000000} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    );
}

export default RenderLineChart;