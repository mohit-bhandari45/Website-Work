import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 w-64 h-screen bg-gray-100 px-1 py-2 space-y-2 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        xl:relative xl:translate-x-0 xl:h-auto xl:min-h-screen
      `}>
        <div className="flex justify-between items-center mb-4 xl:hidden">
          <h2 className="text-lg font-semibold px-4">Dashboard Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <Button variant="ghost" className="w-full justify-start">Product Management</Button>
        <Button variant="ghost" className="w-full justify-start">Earnings Reports</Button>
        <Link to="/sales-analysis">
          <Button variant="ghost" className="w-full justify-start">Sales Analytics</Button>
        </Link>
        <Button variant="ghost" className="w-full justify-start">Contact Info</Button>
      </aside>
    </>
  );
};

export default Sidebar;