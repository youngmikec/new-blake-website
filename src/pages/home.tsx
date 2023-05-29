import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import HeroComp from '../components/hero-comp';

const Home = () => {
    return (
        <>
            <div className="mx-auto">
                <HeroComp 
                    isPreAmble={true}
                    preAmble='Welcome to'
                    title='Blake’s Design Studio'
                    subTitle='Transforming Ideas into Stunning Designs'
                />
            </div>
        </>
    )
}

export default Home;