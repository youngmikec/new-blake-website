import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

//icons
import { FiSearch } from 'react-icons/fi';

import logo from '../../assets/img/logo-white.png';
import menu_btn from '../../assets/icons/menu.png'

import './navbar.css'

const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;

    const [menuOpen, setMenuOpen] = useState(false)

    const openSmallScreenMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className="w-full nav bg-black text-white">
                <div className="mx-auto w-11/12 flex justify-between py-4">
                    <div>
                        <div className="flex justify-start">
                            <img src={logo} width="50px" height="50px" alt="logo" className="mr-[3px] my-auto" />
                            <p className="my-auto">Blakedesignx</p>
                        </div>
                    </div>
                    <div className=''>
                        <div onClick={openSmallScreenMenu} className="small-screen-menu-btn bg-white cursor-pointer">
                            <img src={menu_btn} alt="" />
                        </div>
                        <div className="flex large-screen-menus justify-between">
                            <div className="mx-8 my-auto">
                                <p className={`${ pathname === '/' && 'border-b-[1px] border-b-white'}`}>
                                    <Link to="/">
                                        <a className='text-sm'>
                                            Home
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="mx-8 my-auto">
                                <p className={`${ pathname === '/about-us' && 'border-b-[1px] border-b-white'}`}>
                                    <Link to="/about-us">
                                        <a className='text-sm'>
                                            About
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="mx-8 my-auto">
                                <p className={`${ pathname === '/gallary' && 'border-b-[1px] border-b-white'}`}>
                                    <Link to="/gallary">
                                        <a className='text-sm'>
                                            Gallary
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="mx-8 my-auto">
                                <p className={`${ pathname === '/faqs' && 'border-b-[1px] border-b-white'}`}>
                                    <Link to="/faqs">
                                        <a className='text-sm'>
                                            FAQs
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="border-white border-2 text-white px-6 py-2 rounded-md flex justify-end">
                                <div className="flex-grow my-auto">
                                    <input type="text" className="w-full border-0 bg-transparent" placeholder='logos' />
                                </div>
                                <div>
                                    <div className="rounded-full px-4 py-1">
                                        <FiSearch className="text-white font-bold text-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    menuOpen && <div className="mx-auto pb-4 small-screen-menus w-11/12">
                        <div className="flex flex-col">
                            <div className="my-auto mb-2">
                                <p>
                                    <Link to="/">
                                        <a className='text-sm'>
                                            Home
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="my-auto mb-2">
                                <p>
                                    <Link to="/about-us">
                                        <a className='text-sm'>
                                            About
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="my-auto mb-2">
                                <p>
                                    <Link to="/gallary">
                                        <a className='text-sm'>
                                            Gallary
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="my-auto mb-2">
                                <p>
                                    <Link to="/faqs">
                                        <a className='text-sm'>
                                            FAQs
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Navbar;