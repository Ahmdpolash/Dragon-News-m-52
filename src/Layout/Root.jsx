import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container px-5 lg:px-20 py-4 mx-auto'>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Root;