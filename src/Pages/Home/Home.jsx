import React from 'react';
import { HeroSection } from './HeroSection';
import { CarBrands } from './CarBrands';
import { HowItWorks } from './HowItWorks';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CarBrands></CarBrands>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;