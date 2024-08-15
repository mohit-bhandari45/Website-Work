import React from 'react';
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

const Header = () => {
    return (
        <header className="bg-white shadow-sm px-0 md:px-4 py-8">
            <div className="container mx-auto flex flex-col sm:flex-row items-start gap-4">
                <Input
                    type="search"
                    placeholder="Search"
                    className="w-full max-w-sm"
                />
                <div className="flex flex-wrap gap-2 justify-center sm:justify-end sm:ml-auto">
                    <Button className="bg-[#8D493A] px-6 sm:px-10 rounded-xl hover:bg-[#8D493A] w-full sm:w-auto">All Category</Button>
                    <Button className="bg-[#8D493A] px-6 sm:px-10 rounded-xl hover:bg-[#8D493A] w-full sm:w-auto">All Artist</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;