import React from 'react';
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Label } from "../../ui/label";
import { MapPin, Plus } from 'lucide-react';

const HeroSection = () => {
    return (
        <Card className="w-full mx-auto">
            <CardContent className="p-5 lg:p-8 rounded-lg font-[Helvetica] bg-gray-200 m-4 sm:m-8">
                <h2 className="text-2xl font-semibold mb-6">Pickup Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Label htmlFor="fullName" className="text-lg">Full Name</Label>
                            <Input id="fullName" placeholder="Enter full name" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="address" className="text-lg">Address</Label>
                            <Input id="address" placeholder="Enter address" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="landmark" className="text-lg">Landmark</Label>
                            <Input id="landmark" placeholder="Enter landmark" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="phoneNumber" className="text-lg">Phone Number</Label>
                            <Input id="phoneNumber" placeholder="Enter phone number" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Label htmlFor="alternativeNumber" className="text-lg">Alternative Number</Label>
                            <Input id="alternativeNumber" placeholder="Enter alternative number" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="secondAddress" className="text-lg">2nd Address</Label>
                            <Input id="secondAddress" placeholder="Enter second address" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="postalCode" className="text-lg">Postal Code</Label>
                            <Input id="postalCode" placeholder="Enter postal code" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="otp" className="text-lg">OTP</Label>
                            <Input id="otp" placeholder="Enter OTP" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button variant="outline" className="w-full outline-none border-none sm:w-auto sm:flex-1 text-lg py-3 bg-[#ffffff93]">
                        <MapPin className="mr-2 h-5 w-5" />
                        <div className='text-blue-500 '>
                            Pickup Location Verification
                        </div>
                    </Button>
                    <Button variant="outline" className="w-full outline-none border-none sm:w-auto sm:flex-1 bg-yellow-100 hover:bg-yellow-200 text-black text-lg py-3">
                        <Plus className="mr-2 h-5 w-5" />
                        Add Another Pickup Location
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroSection;
