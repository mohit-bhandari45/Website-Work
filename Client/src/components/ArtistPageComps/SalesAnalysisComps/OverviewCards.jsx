import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$122,239</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$98,239</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Best Sellers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl">Product A, Product B</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewCards;