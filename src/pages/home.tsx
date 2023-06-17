import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import HeroComp from '../components/hero-comp';
import designExpImg from '../assets/img/design-expert.png';

const Home = () => {
    return (
        <>
            <div>
                <div className="mx-auto">
                    <HeroComp 
                        isPreAmble={true}
                        preAmble='Welcome to'
                        title='Blake’s Design Studio'
                        subTitle='Transforming Ideas into Stunning Designs'
                    />

                    <div className="my-8 mx-auto lg:w-11/12">
                        <div className="grid gap-20 grid-cols-1 sm:grid-cols-1 md:grid-cos-2 lg:grid-cols-2">
                            <div>
                                <img src={designExpImg} className='rounded-md mb-4 w-full' alt="" />
                                <h1 className="text-[#344054] text-3xl font-semibold my-8">Talk to a Design Expert</h1>
                                <div className="text-[#344054] text-justify my-4 text-sm">
                                    <p>
                                        Design is not just about making things look good; it's about creating impactful solutions that communicate messages, evoke emotions, 
                                        and inspire action. At Blake’s Design Studio, We strive to bring your ideas to life, breathing beauty and functionality into every project.
                                    </p>
                                    <p className="my-4">
                                        What sets us apart is our unwavering commitment to delivering exceptional results. 
                                        With a blend of creativity and technical expertise, 
                                        we approach each design challenge as an opportunity to push boundaries and surpass expectations.
                                    </p>

                                </div>
                            </div>

                            <div>
                                <form>
                                    <div className="mb-8">
                                        <label htmlFor="fullName" className="block my-4">Full Name or company name</label>
                                        <input type="text" className="border-[1px] w-full border-[#344054] text-[#344054] rounded-md py-2 px-4" placeholder='enter your full name' />
                                    </div>
                                    <div className="my-8">
                                        <label htmlFor="email" className="block my-4">Email Address</label>
                                        <input type="email" className="border-[1px] w-full border-[#344054] text-[#344054] rounded-md py-2 px-4" placeholder='enter your email' />
                                    </div>
                                    <div className="my-8">
                                        <label htmlFor="phoneNumber" className="block my-4">Phone Number (whatsapp Number preferably)</label>
                                        <input type="text" id="phoneNumber" className="border-[1px] w-full border-[#344054] text-[#344054] rounded-md py-2 px-4" placeholder='whatsapp number' />
                                    </div>
                                    <div className="my-8">
                                        <label htmlFor="fullName" className="block my-4">what do you want?</label>
                                        <input type="text" className="border-[1px] w-full border-[#344054] text-[#344054] rounded-md py-2 px-4" placeholder='enter your full name' />
                                    </div>
                                    <div className="my-8 flex justify-end">
                                        <button className="px-8 py-2 rounded-md bg-[#021B79] text-[#ffffff] hover:bg-white hover:text-[#021B79] hover:border-[#021B79] border-[1px]">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;