import React from 'react';

const GadgetCards = ({ gadget }) => {
    const {product_image, product_title, price, } = gadget;
    // console.log(gadget)
    return (
        <div className="card bg-base-100 w-auto shadow-xl ">
            <figure>
                <img
                    className='h-[181px] mt-3'
                    src={product_image}
                    alt={product_image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='text-[#09080F99] text-xl'>Price: {price}$</p>
                <div>
                <button className='border-2 border-[#9538E2] px-5 py-3 rounded-[2rem] text-[#9538E2] font-semibold hover:bg-[#9538E2] hover:text-white'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default GadgetCards;