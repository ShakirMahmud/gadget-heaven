
import { Outlet, useLoaderData } from 'react-router-dom';
import GadgetsCategories from '../GadgetsCategories/GadgetsCategories';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    const categories = useLoaderData();

    return (
        <div className='lg:w-4/5 mx-auto -translate-y-12'>
            <Helmet>
        <title>Home || Gadget-Heaven</title>
      </Helmet>
            
            <h2 className='font-bold text-4xl text-[#0B0B0B text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='lg:flex mt-6 md:mt-12 gap-6'>
                <div className='lg:w-1/5 p-4 lg:p-0'>
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