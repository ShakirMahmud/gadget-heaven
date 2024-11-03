import banner from '../../assets/banner.jpg';

const HomeBanner = () => {
    return (
        <div className='relative '>
            <div className='bg-banner outline outline-2 outline-offset-8 outline-[#F6F6F6]  rounded-[32px] w-[96.25%] mx-auto absolute -top-24 left-1/2 transform -translate-x-1/2 z-0'>
                <div className='text-center text-white w-[72.72%] mx-auto'>
                    <h1 className='font-bold lg:text-[56px] lg:mt-[128px]'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='mt-6 text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <button className='mt-8 mb-[268px] text-[#9538E2] font-bold text-xl bg-white px-7 py-4 shadow-custom-inset rounded-[32px]'>Shop Now</button>
                </div>
            </div>
                <img className='object-contain  mx-auto rounded-3xl outline outline-2 outline-offset-[12px] outline-[#F6F6F6] h-[563px] absolute top-96 left-1/2 transform -translate-x-1/2' src={banner} alt="" />
        </div>
    );
};

export default HomeBanner;