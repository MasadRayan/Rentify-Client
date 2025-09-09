import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;