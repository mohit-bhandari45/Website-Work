import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"

export default function ContactInfo() {
    return (
        <Card className="mt-4 lg:col-span-3 mx-4 border-none bg-gray-200">
            <CardHeader>
                <CardTitle className="text-lg text-end">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-end'>7983497923</p>
                <p className='text-end'>XYZ@gmail.com</p>
            </CardContent>
        </Card>

    );
}
