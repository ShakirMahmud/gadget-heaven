import React from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HomeNavBar from '../NavBar/HomeNavBar';
import OtherNavBar from '../NavBar/OtherNavBar';
import HomeBanner from '../Banner/HomeBanner';

const Root = () => {
    const categories = useLoaderData();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isDashboard = location.pathname.startsWith('/dashboard');
    const isCategory = Array.isArray(categories) && categories.some(category => location.pathname === `/category/${category.category_name}`);
    const showHomeNavAndBanner = isHome || isCategory;
    return (
        <div className='flex flex-col'>
            {/* {isHome || isCategory ? <HomeNavBar></HomeNavBar> : <OtherNavBar></OtherNavBar>} */}
            {showHomeNavAndBanner ? <div>
                <HomeNavBar></HomeNavBar>
                <HomeBanner></HomeBanner>
            </div> : 
            <div>
                {
                    isDashboard ? <OtherNavBar
                        title='Dashboard'
                        subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                        cart = 'cart'
                        wishlist = 'wishlist'
                    ></OtherNavBar>
                    :
                    <OtherNavBar
                    title='Product Details'
                    subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                    cart = ''
                    wishlist = ''
                    ></OtherNavBar>
                }
            </div>
            }
            <div className='flex-grow'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;