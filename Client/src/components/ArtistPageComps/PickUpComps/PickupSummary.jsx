import React from 'react'

const PickupSummary = () => {
    return (
        <div className="flex justify-center items-center pb-6">
            <div className="w-full max-w-[95vw] font-[Helvetica] bg-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Pickup Summary</h2>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Hand Crafted</span>
                        <span>$600.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Hand Mat</span>
                        <span>$900.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Sipping</span>
                        <span>$10.00</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$1510.00</span>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                <button className="w-[90%] mt-6 bg-[#8B4A44] text-white py-2 rounded-lg hover:bg-[#733834]">
                    Order Place
                </button>
                </div>
            </div>
        </div>
    )
}

export default PickupSummary
