import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='container mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;