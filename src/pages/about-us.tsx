import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroComp from '../components/hero-comp';
import CoreValues from '../components/core-values';
import Founder from '../components/founder';

const AboutUs = () => {
    return (
        <>
            <div className="mx-auto">
                <HeroComp 
                    isPreAmble={true}
                    preAmble=''
                    title='About us'
                    subTitle="Ready to embark on a design journey that will elevate your brand and leave a lasting impression? Let's collaborate and create something extraordinary"
                />
                <CoreValues />
                <Founder />
            </div>
        </>
    )
}

export default AboutUs;