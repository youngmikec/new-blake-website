import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroComp from '../components/hero-comp';

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
            </div>
        </>
    )
}

export default Gallary;