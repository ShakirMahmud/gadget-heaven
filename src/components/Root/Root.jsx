import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HomeNavBar from '../NavBar/HomeNavBar';
import OtherNavBar from '../NavBar/OtherNavBar';
import HomeBanner from '../Banner/HomeBanner';
import OtherBanner from '../Banner/OtherBanner';

const Root = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    console.log('Current Path:', location.pathname); 
    return (
        <div className='flex flex-col'>
            {isHome ? <HomeNavBar></HomeNavBar> : <OtherNavBar></OtherNavBar>}
            {isHome ? <HomeBanner></HomeBanner> : <OtherBanner></OtherBanner>}
            <div className='flex-grow'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;