import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroComp from '../components/hero-comp';

const Faqs = () => {
    return (
        <>
            <div className="mx-auto">
                <HeroComp 
                    isPreAmble={false}
                    preAmble='faq'
                    title='Frequently Asked Questions'
                    subTitle="Find some answers to your regular question or rather as us "
                />
            </div>
        </>
    )
}

export default Faqs;