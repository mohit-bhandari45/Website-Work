import React from 'react';
import { Input } from "../../ui/input";
import { Textarea} from "../../ui/textarea"
import { Label } from "../../ui/label";
import { Card, CardContent } from "../../ui/card";

const ArtworkDetails = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-8 font-[Helvetica]">
            {/* Artwork Details Section */}
            <Card className="flex-1 bg-gray-200">
                <CardContent className="p-6 lg:p-8">
                    <h2 className="text-2xl font-semibold mb-6">Artwork Details</h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-lg">Title of the Artwork</Label>
                            <Input id="title" placeholder="Enter title" className="h-12 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description" className="text-lg">Description</Label>
                            <Textarea id="description" placeholder="Enter description" className="h-24 text-lg bg-[#ffffff93]" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="dimensions" className="text-lg">Dimensions</Label>
                                <Input id="dimensions" placeholder="(HxWxD)" className="h-12 text-lg bg-[#ffffff93]" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="weight" className="text-lg">Weight</Label>
                                <Input id="weight" placeholder="Enter weight" className="h-12 text-lg bg-[#ffffff93]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="instructions" className="text-lg">Special Handling Instructions</Label>
                            <Textarea id="instructions" placeholder="Enter instructions" className="h-24 text-lg bg-[#ffffff93]" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Map Section */}
            <div className="flex-1">
                <Card className="w-full h-full p-0 overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.96305791531662!3d-37.81621897975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b3a7f3b5a0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1604386983604!5m2!1sen!2sau"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </Card>
            </div>
        </div>
    );
};

export default ArtworkDetails;
