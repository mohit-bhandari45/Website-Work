import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Register the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function SalesAnalytics() {
  // Data for the Monthly Sales Bar Chart
  const monthlySalesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 500, 2000, 3000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the Category Sales Pie Chart
  const categorySalesData = {
    labels: ['Art', 'Craft', 'Pottery'],
    datasets: [
      {
        label: 'Category Sales',
        data: [3000, 2000, 1000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Sales Analytics</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[250px]">
              <Bar 
                data={monthlySalesData} 
                options={{ 
                  responsive: true, 
                  maintainAspectRatio: false 
                }} 
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Category Sales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[250px]">
              <Pie 
                data={categorySalesData} 
                options={{ 
                  responsive: true, 
                  maintainAspectRatio: false 
                }} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}