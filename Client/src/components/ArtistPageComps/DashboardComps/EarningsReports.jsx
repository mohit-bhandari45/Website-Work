import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', red: 4000, orange: 2400 },
    { month: 'Feb', red: 3000, orange: 1398 },
    { month: 'Mar', red: 2000, orange: 9800 },
    { month: 'Apr', red: 2780, orange: 3908 },
    { month: 'May', red: 1890, orange: 4800 },
    { month: 'Jun', red: 2390, orange: 3800 },
];

const EarningsReport = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Earnings Reports</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="flex flex-col border-none bg-gray-200">
                    <CardHeader>
                        <CardTitle className="text-lg">Total Earning</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-bold">$500000</p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-gray-200">
                    <CardHeader>
                        <CardTitle className="text-lg">Best Selling Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">Hand crafty</p>
                    </CardContent>
                </Card>
                <Card className="border-none bg-gray-200">
                    <CardHeader>
                        <CardTitle className="text-lg">Earnings by Month</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <Line type="monotone" dataKey="red" stroke="#ef4444" strokeWidth={2} />
                                <Line type="monotone" dataKey="orange" stroke="#f97316" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default EarningsReport;