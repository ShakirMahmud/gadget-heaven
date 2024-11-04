import banner from '../../assets/banner.jpg';

const HomeBanner = () => {
    return (
        <div className=' w-[90.25%] lg:w-auto mx-auto  flex justify-center -translate-y-2/4 lg:-translate-y-1/3'>
                <img className='object-contain lg:h-[563px] rounded-3xl outline outline-2 outline-offset-[12px] outline-[#F6F6F6] shadow-2xl ' src={banner} alt="" />
        </div>
    );
};

export default HomeBanner;