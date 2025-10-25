import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default RootLayout;