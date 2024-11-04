import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNavBar = () => {
    return (

        <div className="bg-banner outline outline-2 outline-offset-8 outline-[#F6F6F6]  rounded-[32px] w-[96.25%] mx-auto mt-3">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium text-base">

                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/statistics'>Statistics</NavLink>
                            <NavLink to='/dashboard'>Dashboard</NavLink>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12 font-medium text-base">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <button className="border p-3 rounded-full">
                        <HiOutlineShoppingCart />
                    </button>
                    <button className="border p-3 rounded-full">
                        <AiOutlineHeart />
                    </button>
                </div>
            </div>
            <div className=' '>
                <div className='text-center text-white w-[72.72%] mx-auto'>
                    <h1 className='font-bold text-3xl lg:text-6xl mt-8 lg:mt-8'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='mt-6 text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='mt-8 mb-44 lg:mb-[268px] text-[#9538E2] font-bold text-xl bg-white px-7 py-4 shadow-custom-inset rounded-[32px]'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeNavBar;