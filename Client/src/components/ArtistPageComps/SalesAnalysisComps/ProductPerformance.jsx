import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data - replace this with your actual data
const data = [
  { name: 'Jan', product1: 4000, product2: 2400 },
  { name: 'Feb', product1: 3000, product2: 1398 },
  { name: 'Mar', product1: 2000, product2: 9800 },
  { name: 'Apr', product1: 2780, product2: 3908 },
  { name: 'May', product1: 1890, product2: 4800 },
  { name: 'Jun', product1: 2390, product2: 3800 },
  { name: 'Jul', product1: 3490, product2: 4300 },
];

const ProductPerformanceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="product1" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="product2" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductPerformanceChart;