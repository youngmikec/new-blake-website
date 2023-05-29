import React from 'react';

import './style.css';
import leftEllipse from '../../assets/img/left-ellipses.svg';
import rightEllipse from '../../assets/img/right-ellipses.svg';

type Props = {
    preAmble: string;
    isPreAmble: boolean;
    title: string;
    subTitle: string;
}

const HeroComp = ({ preAmble, title, subTitle, isPreAmble }: Partial<Props>) => {
    return (
        <>
            <div className="w-full text-center text-white hero-bg">
                <div className='mx-auto my-12 w-11/12 sm:w-10/12 md:w-9/12 lg:w-6/12'>
                    {
                        isPreAmble && 
                        <div className='flex justify-center gap-4 my-4'>
                            <div className="flex justify-center items-center">
                                <img src={leftEllipse} className='my-auto' alt="" />
                            </div>
                            <div >
                                <h1 className="text-3xl  my-auto">{ preAmble }</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={rightEllipse} className='my-auto' alt="" />
                            </div>
                        </div>
                    }

                    <h1 className="text-5xl font-semibold my-8">{ title }</h1>
                    <p className="my-8">{ subTitle }</p>

                    <div className="my-8">
                        <button className="border-[1px] border-white rounded-md py-3 px-6 bg-transparent hover:bg-white hover:text-black">
                            Contact us now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComp;