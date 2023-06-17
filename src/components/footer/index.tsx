import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { CiMail } from 'react-icons/ci';
import { HiOutlinePhone } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa'; 
import { BsInstagram } from 'react-icons/bs'; 
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

import logo from '../../assets/img/official-logo-1.png';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-white mb-12">
                <div className="mx-auto lg:w-11/12 py-4">
                    <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-2 
                        lg:grid-cols-4"
                    >
                        <div>
                            <div className="flex justify-start gap-2">
                                <img src={logo} width="50px" height="50px" alt="logo" className="mr-[3px] my-auto" />
                                <p>Blakedesignx</p>
                            </div>
                            <div className="my-2">
                                <p>Transforming Ideas into Stunning designs</p>
                            </div>
                            <div className="flex justify-start my-2">
                                <HiOutlinePhone className='mr-2' />
                                <p>+234 8107 389 617</p>
                            </div>
                            <div className="flex justify-start my-2">
                                <CiMail className='mr-2' />
                                <p>blakedesignx@gmail.com</p>
                            </div>
                            <div className="flex justify-start">
                                <div className="rounded-full p-3 bg-[#021B79]">
                                    <FaFacebookF className="text-white" />
                                </div>
                                <div className="rounded-full p-3 bg-[#021B79] mx-3">
                                    <BsInstagram className="text-white" />
                                </div>
                                <div className="rounded-full p-3 bg-[#021B79]">
                                    <AiOutlineTwitter className="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className='text-left sm:text-left md:text-left lg:text-left mt-8 sm:mt-0 md:mt-0 lg:mt-0'>
                            <h1 className='lg:text-2xl text-xl text-blue-900'>
                                <b>Quick links</b>
                            </h1>
                            <div className='ml-1 sm:m-0 md:m-0 lg:m-0'>
                                <p className={`my-2`}>
                                    <Link to="/about">
                                        <a className='text-sm'>
                                            About
                                        </a>
                                    </Link>
                                </p>

                                <p className={`my-2`}>
                                    <Link to="/gallary">
                                        <a className='text-sm'>
                                            Gallery
                                        </a>                            
                                    </Link>
                                </p>
                                
                                <p className={`my-2`}>
                                    <Link to="/faqs">
                                        <a className='text-sm'>
                                            FAQs
                                        </a>                            
                                    </Link>
                                </p>
                                
                                <p className={`my-2`}>
                                    <Link to="/">
                                        <a className='text-sm'>
                                            Home
                                        </a>                            
                                    </Link>
                                </p>

                            </div>
                        </div>

                        <div className='text-left sm:text-left md:text-left lg:text-left mt-8 sm:mt-0 md:mt-0 lg:mt-0'>
                            <h1 className='lg:text-2xl text-xl text-blue-900'>
                                <b>Courses</b>
                            </h1>
                            <div className='ml-1 sm:m-0 md:m-0 lg:m-0'>
                                <p className={`my-2`}>
                                    <Link to="/about">
                                        <a className='text-sm'>
                                            Ui/Ux Design
                                        </a>
                                    </Link>
                                </p>

                                <p className={`my-2`}>
                                    <Link to="/gallary">
                                        <a className='text-sm'>
                                            Graphic Design
                                        </a>                            
                                    </Link>
                                </p>
                                
                                <p className={`my-2`}>
                                    <Link to="/faqs">
                                        <a className='text-sm'>
                                            Brand Identity Design
                                        </a>                            
                                    </Link>
                                </p>

                            </div>
                        </div>

                        <div className='text-left sm:text-left md:text-left lg:text-left mt-8 sm:mt-0 md:mt-0 lg:mt-0'>
                            <h1 className='lg:text-2xl text-xl text-blue-900'>
                                <b>Newsletter</b>
                            </h1>
                            <p className="my-3">Subscribe to our Newsletter</p>

                            <div className="border-gray-200 border-[1px] text-gray-200 px-4 py-3 rounded-md flex justify-end">
                                <div className="flex-grow my-auto">
                                    <input type="text" className="w-full border-0" placeholder='Enter your eamil here' />
                                </div>
                                <div>
                                    <div className="rounded-full p-3 bg-[#021B79]">
                                        <FaArrowRight className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;