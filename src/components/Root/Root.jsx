import React from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HomeNavBar from '../NavBar/HomeNavBar';
import OtherNavBar from '../NavBar/OtherNavBar';
import HomeBanner from '../Banner/HomeBanner';
import OtherBanner from '../Banner/OtherBanner';

const Root = () => {
    const categories = useLoaderData();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isCategory = categories.map(category =>location.pathname === `/category/${category.category_name}`)
    console.log(isCategory)
    return (
        <div className='flex flex-col'>
            {isHome ? <HomeNavBar></HomeNavBar> : <OtherNavBar></OtherNavBar>}
            {isHome || isCategory ? <HomeBanner></HomeBanner> : <OtherBanner></OtherBanner>}
            <div className='flex-grow'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;