import React from 'react';
import { NavLink } from 'react-router-dom';

const GadgetsCategories = ({categories}) => {
    return (
        <div className='grid lg:grid-cols-1 grid-cols-2 w-full items-start gap-6 p-3 lg:p-6 bg-white rounded-2xl lg:mr-6'>
            <NavLink to={`/`} 
            key='all-products'
            className={({isActive})=>`${isActive ? 'bg-[#9538E2] rounded-[2rem] text-white': ''}`}
            ><button className='bg-[#09080F0D] rounded-[2rem] px-5 py-3 w-full text-start'>ALl Product</button></NavLink>
            {
                categories.map(category=><NavLink 
                    to={`/category/${category.category_name}`} 
                    key={category.category_id}
                className={({isActive})=>`${isActive? 'bg-purple-700 rounded-[2rem] text-white': ''}`}
                ><button className='bg-[#09080F0D] rounded-[2rem] px-5 py-3 w-full text-start'>{category.category_name}</button></NavLink>)
            }
        </div>
    );
};

export default GadgetsCategories;