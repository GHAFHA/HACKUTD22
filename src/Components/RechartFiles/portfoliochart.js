import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Time',
    uv: 4000,
    cash: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    cash: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    cash: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    cash: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    cash: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    cash: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    cash: 7000,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cash" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}