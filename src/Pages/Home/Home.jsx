import React from 'react';
import { HeroSection } from './HeroSection';
import { CarBrands } from './CarBrands';
import { HowItWorks } from './HowItWorks';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CarBrands></CarBrands>
            <HowItWorks></HowItWorks>
            <Services></Services>
        </div>
    );
};

export default Home;