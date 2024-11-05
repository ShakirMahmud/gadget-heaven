import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HomeNavBar from '../NavBar/HomeNavBar';
import { OtherNavBar } from '../NavBar/OtherNavBar';
import HomeBanner from '../Banner/HomeBanner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAddToCartList } from '../../utilities/addToDB';
import { CartContext, WishlistContext } from '../../context';



const Root = () => {

    const  [cartLength, setCartLength] = useState(0);
    const  [wishlistLength, setWishlistLength] = useState(0);

    const categories = useLoaderData();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isDashboard = location.pathname.startsWith('/dashboard');
    const isWhyChooseUs = location.pathname.startsWith('/whyChooseUs');
    const isStatistics = location.pathname.startsWith('/statistics');
    const isCategory = Array.isArray(categories) && categories.some(category => location.pathname === `/category/${category.category_name}`);
    const showHomeNavAndBanner = isHome || isCategory;
    return (
        
        <div className='flex flex-col'>
          <ToastContainer />
            
            <CartContext.Provider value={{cartLength, setCartLength}}>
            <WishlistContext.Provider value={{wishlistLength, setWishlistLength}}>
            {showHomeNavAndBanner ? <div>
                <HomeNavBar></HomeNavBar>
                <HomeBanner></HomeBanner>
            </div> :
                <div>
                    {
                        isDashboard ? <OtherNavBar
                        isDashboard={isDashboard}
                            title='Dashboard'
                            subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                            cart='Cart'
                            wishlist='Wishlist'
                            
                        ></OtherNavBar>
                            :
                            isWhyChooseUs ?
                            <OtherNavBar
                            isWhyChooseUs={isWhyChooseUs}
                            title='Why Choose Us?'
                            subtitle='Discover why Gadget Heaven is the best choice for your tech accessories needs!'
                            cart=''
                            wishlist=''
                            ></OtherNavBar>
                            :
                            isStatistics ?
                            <OtherNavBar
                            isStatistics={isStatistics}
                            title='Statistics'
                            subtitle='See how Gadget Heaven is helping to improve your tech accessories experience!'
                            cart=''
                            wishlist=''
                            ></OtherNavBar>
                            :
                            <OtherNavBar
                                title='Product Details'
                                subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                                cart=''
                                wishlist=''
                            ></OtherNavBar>
                    }
                </div>
            }
            <div className='flex-grow'><Outlet ></Outlet></div>
            </WishlistContext.Provider>
            </CartContext.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;