import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

const EarningsReports = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Recent Order</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Order #1234 - $50000</li>
            <li>Order #11234 - $50000</li>
            <li>Order #112124 - $50000</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Queries</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Queries from xyz about z Product</li>
            <li>Queries from xyz about z Product</li>
            <li>Queries from xyz about z Product</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EarningsReports;