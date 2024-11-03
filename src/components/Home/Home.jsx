
import { Outlet, useLoaderData } from 'react-router-dom';
import GadgetsCategories from '../GadgetsCategories/GadgetsCategories';




const Home = () => {
    const categories = useLoaderData();

    return (
        <div className='lg:w-4/5 mx-auto '>
            <h2 className='font-bold text-4xl text-[#0B0B0B text-center mt-[61.5rem]'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex mt-12 gap-6'>
                <div className='lg:w-1/5'>
                    <GadgetsCategories key={categories.category_id} categories={categories}></GadgetsCategories>
                </div>
                <div className=' w-full'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Home;