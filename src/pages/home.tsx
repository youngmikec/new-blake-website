import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import HeroComp from '../components/hero-comp';
import designExpImg from '../assets/img/design-expert.png';
import ReachOutComp from '../components/reach-out';
import Offers from '../components/offers';
import Works from '../components/works';
import Packages from '../components/packeges';
import FAQ from '../components/faq';
import Testimonial from '../components/testimonials';

const Home = () => {
    return (
        <>
            <div>
                <HeroComp 
                    isPreAmble={true}
                    preAmble='Welcome to'
                    title='Blake’s Design Studio'
                    subTitle='Transforming Ideas into Stunning Designs'
                />
                <div className="mx-auto w-11/12">
                    <ReachOutComp />
                    <Offers />
                    <Works />
                    <Packages />
                    <FAQ isWhite={false} isBlue={true} />
                    <Testimonial />
                </div>
            </div>
        </>
    )
}

export default Home;