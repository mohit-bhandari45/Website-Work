import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../../components/ArtistPageComps/UniversalComps/Navbar';
import Sidebar from "../../components/ArtistPageComps/SalesAnalysisComps/Sidebar"
import OverviewCards from '../../components/ArtistPageComps/SalesAnalysisComps/OverviewCards';
import ProductPerformance from '../../components/ArtistPageComps/SalesAnalysisComps/ProductPerformance';
import EarningsReports from '../../components/ArtistPageComps/SalesAnalysisComps/EarningsReports';
import ContactInfo from '../../components/ArtistPageComps/UniversalComps/ContactInfo';

const SalesAnalysis = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <div className="flex flex-1 font-[Helvetica]">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="flex-1 flex flex-col">
                    <header className="bg-white shadow-sm p-4 lg:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </header>
                    <main className="flex-1 p-4 lg:p-6 space-y-6 overflow-y-auto">
                        <h1 className="text-2xl font-bold">Sales Analysis</h1>
                        <OverviewCards />
                        <ProductPerformance />
                        <EarningsReports />
                        <ContactInfo />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalysis;