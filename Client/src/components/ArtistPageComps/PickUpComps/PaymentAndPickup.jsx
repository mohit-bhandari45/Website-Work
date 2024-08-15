import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../ui/select";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Card, CardContent } from "../../ui/card";

const PaymentAndPickup = () => {
    return (
        <div className="flex flex-col gap-4 p-4 lg:p-8 font-[Helvetica]">
            <div className="flex flex-col lg:flex-row gap-4">
                <Card className="flex-1 bg-gray-200">
                    <CardContent className="p-6 lg:p-8">
                        <h2 className="text-xl font-semibold mb-6">Receive Payment</h2>
                        <RadioGroup defaultValue="bank" className="space-y-2">
                            <RadioGroupItem value="bank" id="bank">
                                <Label htmlFor="bank" className="flex items-center space-x-2 text-lg">
                                    <span className="text-orange-500">●</span> <span>Bank Account</span>
                                </Label>
                            </RadioGroupItem>
                            <RadioGroupItem value="upi" id="upi">
                                <Label htmlFor="upi" className="flex items-center space-x-2 text-lg">
                                    <span className="text-white">●</span> <span>UPI</span>
                                </Label>
                            </RadioGroupItem>
                            <RadioGroupItem value="other" id="other">
                                <Label htmlFor="other" className="flex items-center space-x-2 text-lg">
                                    <span className="text-white">●</span> <span>Other</span>
                                </Label>
                            </RadioGroupItem>
                        </RadioGroup>
                    </CardContent>
                </Card>

                {/* Pickup Availability Section */}
                <Card className="flex-1 bg-gray-200">
                    <CardContent className="p-6 lg:p-8">
                        <h2 className="text-xl font-semibold mb-6">Pickup Availability</h2>
                        <div className="space-y-4">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-2 lg:space-y-0">
                                <Label htmlFor="pickupDate" className="text-lg lg:flex-shrink-0 lg:w-1/3">Preferred Pickup Date</Label>
                                <Input id="pickupDate" placeholder="Select Date" className="h-12 text-lg w-full lg:w-2/3" />
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-2 lg:space-y-0">
                                <Label htmlFor="pickupTime" className="text-lg lg:flex-shrink-0 lg:w-1/3">Preferred Pickup Time Slot</Label>
                                <Input id="pickupTime" placeholder="Select Time Slot" className="h-12 text-lg w-full lg:w-2/3" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Row: Packaging Confirmation and Type of Packaging */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Packaging Confirmation Section */}
                <Card className="flex-1 bg-gray-200">
                    <CardContent className="p-6 lg:p-8">
                        <h2 className="text-xl font-semibold mb-6">
                            <span className="text-orange-500">●</span> Packaging Confirmation
                        </h2>
                    </CardContent>
                </Card>

                {/* Type of Packaging Section */}
                <Card className="flex-1 bg-gray-200">
                    <CardContent className="p-6 lg:p-8">
                        <h2 className="text-xl font-semibold mb-6">Type of Packaging Used</h2>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
                            <Label htmlFor="packagingType" className="text-lg lg:flex-shrink-0 lg:w-1/3">Packaging Type</Label>
                            <Select>
                                <SelectTrigger className="w-full h-12 text-lg lg:w-2/3">
                                    <SelectValue placeholder="Select Packaging" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="box">Box</SelectItem>
                                    <SelectItem value="crate">Crate</SelectItem>
                                    <SelectItem value="pallet">Pallet</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PaymentAndPickup;
