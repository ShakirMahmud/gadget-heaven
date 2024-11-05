import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext, WishlistContext } from "../../context";

const HomeNavBar = () => {
    const { cartLength } = useContext(CartContext);
    const { wishlistLength } = useContext(WishlistContext);

    const getLinkClass = ({ isActive }) =>
        `menu-item ${isActive ? 'text-white font-bold border-2 p-2 rounded-full' : 'text-white p-2'}`;

    return (
        <div className="bg-banner outline outline-2 outline-offset-8 outline-[#F6F6F6] rounded-[32px] w-[96.25%] mx-auto mt-3">
            <div className="navbar text-white lg:w-[83.117%] mx-auto py-6 -translate-y-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium text-base flex justify-center">
                            <NavLink className={getLinkClass} to='/' ><button>Home</button></NavLink>
                            <NavLink className={getLinkClass} to='/statistics' ><button >Statistics</button></NavLink>
                            <NavLink className={getLinkClass} to='/dashboard' ><button >Dashboard</button></NavLink>
                            <NavLink className={getLinkClass} to='/whyChooseUs' ><button >WhyChooseUs</button></NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost hover:bg-transparent hover:shadow-none text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1 gap-12 font-medium text-base">
                        <NavLink className={getLinkClass} to='/' ><button>Home</button></NavLink>
                        <NavLink className={getLinkClass} to='/statistics' ><button >Statistics</button></NavLink>
                        <NavLink className={getLinkClass} to='/dashboard' ><button >Dashboard</button></NavLink>
                        <NavLink className={getLinkClass} to='/whyChooseUs' ><button >Why Choose Us</button></NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex  gap-4 items-center">
                    <NavLink to="/dashboard/cart" className="relative flex items-center">
                        <button className="border p-3 rounded-full flex items-center justify-center">
                            <HiOutlineShoppingCart />
                        </button>
                        {/* Cart Counter */}
                        {cartLength > 0 && (
                            <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-[#9538E2] bg-white text-xs shadow-md">
                                {cartLength}
                            </div>
                        )}
                    </NavLink>

                    <NavLink to="/dashboard/wishlist" className="relative flex items-center">
                        <button className="border p-3 rounded-full flex items-center justify-center">
                            <AiOutlineHeart />
                        </button>
                        {/* Wishlist Counter */}
                        {wishlistLength > 0 && (
                            <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-[#9538E2] bg-white text-xs shadow-md">
                                {wishlistLength}
                            </div>
                        )}
                    </NavLink>
                </div>


            </div>
            <div>
                <div className='text-center text-white w-[72.72%] mx-auto'>
                    <h1 className='font-bold text-3xl lg:text-6xl mt-8 lg:mt-8'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='mt-6 text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <NavLink to='/dashboard'><button className='mt-8 mb-44 lg:mb-[268px] text-[#9538E2] font-bold text-xl bg-white px-7 py-4 shadow-custom-inset rounded-[32px]'>Shop Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeNavBar;
