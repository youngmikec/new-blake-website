import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroComp from '../components/hero-comp';
import Tab from '../components/tab';
import Testimonial from '../components/testimonials';

import './gallary.css'

const Gallary = () => {
    return (
        <>
            <div className="mx-auto">
                <HeroComp 
                    isPreAmble={true}
                    preAmble='Welcome to'
                    title='Our Gallery'
                    subTitle="Transforming Ideas into Stunning Designs"
                />

                <div className="gallary w-full bg-white mt-40 mb-20">
                    <div className="mx-auto lg:w-11/12">
                        <span className="heading small-heading text-base font-medium mb-6">works</span>
                        <h2 className="heading main-heading text-5xl font-semibold mb-20">Glance through some of our works</h2>

                        <Tab />
                        <Testimonial />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallary;