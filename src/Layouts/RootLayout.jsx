import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;