import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroComp from '../components/hero-comp';
import FAQ from '../components/faq';

import './faq.css'

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

                <div className="faqs text-center w-full bg-white mt-40 mb-36">
                    <div className="mx-auto lg:w-11/12">
                        <span className="heading small-heading mb-4 text-base font-medium">FAQS</span>
                        <h2 className="heading main-heading text-4xl font-semibold mt-4 mb-12">We have all the answers to your question</h2>

                        <div className="asked">
                            <FAQ isWhite={true} isBlue={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs;