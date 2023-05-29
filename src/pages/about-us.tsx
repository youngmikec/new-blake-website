import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroComp from '../components/hero-comp';

const AboutUs = () => {
    return (
        <>
            <div className="mx-auto">
                <HeroComp 
                    isPreAmble={true}
                    preAmble='About us'
                    title=''
                    subTitle="Ready to embark on a design journey that will elevate your brand and leave a lasting impression? Let's collaborate and create something extraordinary"
                />
            </div>
        </>
    )
}

export default AboutUs;