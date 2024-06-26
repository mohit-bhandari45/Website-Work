import React from 'react';
import Card from './Subcomps/Card';

const Frames2 = () => {
    return (
        <div className='main px-2 min-h-[50vh] xl:min-h-[100vh] py-10 xl:w-full flex flex-wrap justify-center items-center gap-10 font-[Helvetica]'>
            <div className="w-full xl:w-4/12 flex justify-center items-center">
                <Card image="src/assets/Rectangle 7.png" price="1000"/>
            </div>
            <div className="w-full xl:w-4/12 flex justify-center items-center">
                <Card image="src/assets/Rectangle 8.png" price="5000"/>
            </div>
            <div className="w-full xl:w-4/12 flex justify-center items-center">
                <Card image="src/assets/Rectangle 9.png" price="10000"/>
            </div>
            <div className="w-full xl:w-4/12 flex justify-center items-center">
                <Card image="src/assets/Rectangle 10.png" price="23000"/>
            </div>
        </div>
    );
}

export default Frames2;
