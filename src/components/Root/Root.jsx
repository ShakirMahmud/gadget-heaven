import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HomeNavBar from '../NavBar/HomeNavBar';
import { OtherNavBar } from '../NavBar/OtherNavBar';
import HomeBanner from '../Banner/HomeBanner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAddToCartList } from '../../utilities/addToDB';



const Root = () => {



    const getCartItems = () => getAddToCartList(); // Fetch the cart list
    const [cartLength, setCartLength] = useState(getCartItems().length);

    useEffect(() => {
        const currentCartLength = getCartItems().length;
        setCartLength(currentCartLength);

        // Optionally use intervals or subscriptions depending on cart updating
        const interval = setInterval(() => {
            const updatedCartLength = getCartItems().length;
            if (updatedCartLength !== cartLength) {
                setCartLength(updatedCartLength);
            }
        }, 500); // Poll every 500ms, or use custom event

        return () => clearInterval(interval);
    }, [cartLength]);


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
            {/* {isHome || isCategory ? <HomeNavBar></HomeNavBar> : <OtherNavBar></OtherNavBar>} */}
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
            <Footer></Footer>
        </div>
    );
};

export default Root;