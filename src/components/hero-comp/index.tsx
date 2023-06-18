import React from 'react';

import './style.css';
import leftEllipse from '../../assets/img/left-ellipses.svg';
import rightEllipse from '../../assets/img/right-ellipses.svg';
import avatar1 from '../../assets/img/user-avatar-1.png'
import avatar2 from '../../assets/img/user-avatar-2.png'
import avatar3 from '../../assets/img/user-avatar-3.png'

type Props = {
    preAmble: string;
    isPreAmble: boolean;
    title: string;
    subTitle: string;
}

const HeroComp = ({ preAmble, title, subTitle, isPreAmble }: Partial<Props>) => {
    return (
        <>
            <div className="w-full text-center text-white pt-44 hero-bg">
                <div className='mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-6/12'>
                    {
                        isPreAmble && 
                        <div className='flex justify-center gap-4'>
                            <div className="flex justify-center items-center">
                                <img src={leftEllipse} className='my-auto' alt="" />
                            </div>
                            <div >
                                <h1 className="text-4xl preamble my-auto">{ preAmble }</h1>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={rightEllipse} className='my-auto' alt="" />
                            </div>
                        </div>
                    }

                    <h1 className="text-6xl main-title font-semibold my-8">{ title }</h1>
                    <p className="my-8">{ subTitle }</p>

                    <div className="my-16">
                        <button className="border-[1px] border-white rounded-md py-3 px-6 bg-transparent hover:bg-white hover:text-black">
                            Contact us now
                        </button>
                    </div>
                    <div className="avatars flex content-center justify-center mb-3">
                        <img src={avatar1} alt="" />
                        <img className='-ml-4' src={avatar2} alt="" />
                        <img className='-ml-4' src={avatar3} alt="" />
                    </div>
                    <span className='font-normal text-base'>Join with over <span className='font-semibold'>1k+ Users</span></span>
                </div>
            </div>
        </>
    )
}

export default HeroComp;