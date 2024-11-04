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
    const isCategory = Array.isArray(categories) && categories.some(category => location.pathname.startsWith(`/category/${category.category_name}`));
    const showHomeNavAndBanner = isHome || isCategory;
    return (
        <div className='flex flex-col'>
            {/* {isHome || isCategory ? <HomeNavBar></HomeNavBar> : <OtherNavBar></OtherNavBar>} */}
            {showHomeNavAndBanner ? <div>
                <HomeNavBar></HomeNavBar>
                <HomeBanner></HomeBanner>
            </div> : 
            <div>
                <OtherNavBar></OtherNavBar>
                <OtherBanner></OtherBanner>
            </div>
            }
            <div className='flex-grow'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;