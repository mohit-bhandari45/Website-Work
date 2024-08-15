import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../../components/ArtistPageComps/UniversalComps/Navbar';
import Sidebar from '../../components/ArtistPageComps/DashboardComps/Sidebar';
import ProductManagement from '../../components/ArtistPageComps/DashboardComps/ProductManagement';
import SalesAnalytics from '../../components/ArtistPageComps/DashboardComps/SalesAnalytics';
import EarningsReports from '../../components/ArtistPageComps/DashboardComps/EarningsReports';
import ContactInfo from '../../components/ArtistPageComps/UniversalComps/ContactInfo';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow-sm p-4 xl:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </header>
          <main className="flex-1 p-4 xl:p-6 space-y-6 overflow-y-auto">
            <ProductManagement />
            <SalesAnalytics />
            <EarningsReports />
            <ContactInfo />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;