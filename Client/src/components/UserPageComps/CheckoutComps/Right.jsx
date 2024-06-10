import React from 'react'

const Right = () => {
    return (
        <div className="right card w-1/2 flex flex-col justify-center items-start">
            <div className="up w-[70%] flex flex-col gap-4 py-9">
                <div className="first w-full flex justify-between items-center text-gray-900">
                    <div className="images flex justify-center items-center">
                        <img className='h-14' src="src/assets/ak-900-01-500x500 1.png" alt="" />
                        <div className="title font-semibold font-[Helvetica]">Khadi Saree</div>
                    </div>
                    <div className="price font-semibold font-[Helvetica]">$650</div>
                </div>
                <div className="first w-full flex justify-between items-center text-gray-900">
                    <div className="images flex justify-center items-center">
                        <img className='h-14 pl-8 pr-5' src="src/assets/652e82cd70aa6522dd785109a455904c.png" alt="" />
                        <div className="title font-semibold font-[Helvetica]">Brass Murti</div>
                    </div>
                    <div className="price font-semibold font-[Helvetica]">$650</div>
                </div>
            </div>
            <div className="middle w-[70%] flex flex-col justify-between items-start gap-4 text-gray-900 pl-4">
                <div className="text w-full flex justify-between items-center">
                    <div className="total font-bold font-[Helvetica]">Subtotal:</div>
                    <div className="total font-bold font-[Helvetica]">$1750</div>
                </div>
                <div className="line h-[3px] rounded-full w-full bg-gray-400"></div>
                <div className="text w-full flex justify-between items-center">
                    <div className="total font-bold font-[Helvetica]">Shipping:</div>
                    <div className="total font-bold font-[Helvetica]">Free</div>
                </div>
                <div className="line h-[2px] rounded-full w-full bg-gray-400"></div>
                <div className="text w-full flex justify-between items-center">
                    <div className="total font-bold font-[Helvetica]">Total:</div>
                    <div className="total font-bold font-[Helvetica]">$1750</div>
                </div>
            </div>
            <div className="w-[70%] flex flex-col gap-6 anothermid pl-4 py-6 text-gray-900">
                <div className="bank w-full flex justify-between items-center">
                    <div className="left flex gap-4 justify-center items-center">
                        <div className="input flex justify-center items-center">
                            <input className='w-5 h-5' type="radio" name="" id="" />
                        </div>
                        <div className="name font-bold font-[Helvetica]">Bank</div>
                    </div>
                    <div className="cards flex gap-2 justify-center items-center">
                        <div className="img1"><img className='h-4' src="src/assets/image 32.png" alt="" /></div>
                        <div className="img2"><img className='h-4' src="src/assets/image 30.png" alt="" /></div>
                        <div className="img3"><img className='h-4' src="src/assets/image 31.png" alt="" /></div>
                        <div className="img4"><img className='h-4' src="src/assets/image 33.png" alt="" /></div>
                    </div>
                </div>
                <div className="cash w-full flex justify-between items-center">
                    <div className="left flex gap-4 justify-center items-center">
                        <div className="input flex justify-center items-center">
                            <input className='w-5 h-5' type="radio" name="" id="" />
                        </div>
                        <div className="name font-bold font-[Helvetica]">Cash on delivery</div>
                    </div>
                </div>
            </div>
            <div className="buttonsmain w-full flex flex-col gap-5 pl-4">
                <div className="buttons w-full flex gap-5">
                    <div className="input border-2 border-black w-[50%] py-3 px-4 rounded-sm">
                        <input className='w-full font-[Helvetica] text-xl' type="text" placeholder='Coupon Code' name="coupon" id="" />
                    </div>
                    <div className="button w-[40%]">
                        <button className='bg-[#ED8A73] py-3 px-4 w-full text-xl text-white flex justify-center items-center font-[Helvetica] rounded-sm'>Apply Coupon</button>
                    </div>
                </div>
                <div className="button">
                    <button className='bg-[#ED8A73] py-3 px-16 text-xl text-white flex justify-center items-center font-[Helvetica] rounded-sm'>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Right
