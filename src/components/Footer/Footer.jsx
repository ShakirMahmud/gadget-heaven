import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-white text-base-content px-2 lg:py-24 py-12 flex flex-col items-center justify-center">
            <div className='text-center'>
                <h2 className='font-bold text-3xl text-[#09080F] text-center w-full'>Gadget Heaven</h2>
                <p className='font-medium text-base text-[#09080F99] text-center w-full'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="my-2 border-t border-gray-300 w-4/5 mx-auto"></div>

            <div className='flex justify-around w-4/5 mx-auto'>
            <nav className='flex flex-col space-y-4 text-center'>
                <h6 className=" font-bold text-lg text-[#09080F]">Services</h6>
                <a className="link link-hover text-base text-[#09080F99]">Product Support</a>
                <a className="link link-hover text-base text-[#09080F99]">Order Tracking</a>
                <a className="link link-hover text-base text-[#09080F99]">Shipping & Delivery</a>
                <a className="link link-hover text-base text-[#09080F99]">Returns</a>
            </nav>
            <nav className='flex flex-col space-y-4 text-center'>
                <h6 className=" font-bold text-lg text-[#09080F]">Company</h6>
                <a className="link link-hover text-base text-[#09080F99]">About us</a>
                <a className="link link-hover text-base text-[#09080F99]">Careers</a>
                <a className="link link-hover text-base text-[#09080F99]">Contact</a>
            </nav>
            <nav className='flex flex-col space-y-4 text-center'>
                <h6 className=" font-bold text-lg text-[#09080F]">Legal</h6>
                <a className="link link-hover text-base text-[#09080F99]">Terms of use</a>
                <a className="link link-hover text-base text-[#09080F99]">Privacy policy</a>
                <a className="link link-hover text-base text-[#09080F99]">Cookie policy</a>
            </nav>
            </div>
        </footer>
    );
};

export default Footer;