import React from 'react';
import { HeroSection } from './HeroSection';
import { CarBrands } from './CarBrands';
import { HowItWorks } from './HowItWorks';
import Services from './Services';
import { BeADriver } from './BeADriver';
import { FAQ } from './FAQ';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CarBrands></CarBrands>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <BeADriver></BeADriver>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;