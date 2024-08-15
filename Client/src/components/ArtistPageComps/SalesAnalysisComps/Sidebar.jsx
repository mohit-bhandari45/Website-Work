import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 w-64 h-screen bg-gray-100 px-1 py-2 space-y-2 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:h-auto lg:min-h-screen
      `}>
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-lg font-semibold px-4">Quick Access</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <Button variant="ghost" className="w-full justify-start">Overview</Button>
        <Button variant="ghost" className="w-full justify-start">Product Performance</Button>
        <Button variant="ghost" className="w-full justify-start">Earnings Reports</Button>
        <Button variant="ghost" className="w-full justify-start">Customer Queries</Button>
      </aside>
    </>
  );
};

export default Sidebar;