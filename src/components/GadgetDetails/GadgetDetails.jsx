import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { addToStoredCartList, addToStoredWishList, getAddToWishList } from '../../utilities/addToDB';


const GadgetDetails = () => {
    const { product_id } = useParams();
    const allGadgets = useLoaderData();
    const clickedGadgets = allGadgets.filter(gadget => gadget.product_id == product_id);
    const [{ product_image, product_title, price, description, specification, rating, availability }] = clickedGadgets;

    const [isWishListed, setIsWishListed] = useState(false);
    const renderStars = () => {
        const stars = [];
        const maxStars = 5;
        for (let i = 1; i <= maxStars; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FaStar key={i} className="text-yellow-400" />); 
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />); 
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />); 
            }
        }
        return stars;
    };

    useEffect(() => {
        const storedWishList = getAddToWishList();
        const isProductInWishList = storedWishList.includes(product_id);
        setIsWishListed(isProductInWishList);
    }, [product_id]);

    const handleAddToCart = (id) => {
        addToStoredCartList(id);

    };
    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
        setIsWishListed(true); 
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const storedWishList = getAddToWishList();
            const isProductInWishList = storedWishList.includes(product_id);
            setIsWishListed(isProductInWishList);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [product_id]);

    return (
        <div className="bg-white w-3/4 mx-auto translate -translate-y-[40%] p-8 rounded-3xl">
            <div className="flex gap-8">
                <img
                    src={product_image}
                    className="w-[35%] h-auto object-contain max-h-[500px] rounded-3xl"
                    alt={product_title} />
                <div className="flex flex-col justify-between space-y-4">
                    <h1 className="text-3xl font-semibold">{product_title}</h1>
                    <p className="text-[#09080FCC] text-xl font-semibold ">Price: $ {price}</p>
                    <div className="flex items-start">
                        {availability ? (
                            <p className='rounded-[2rem] px-4 py-2 bg-[#309C081A] flex-shrink-0 font-medium text-[#309C08]'>
                                In stock
                            </p>
                        ) : (
                            <p className='rounded-[2rem] px-4 py-2 bg-[#FF00001A] flex-shrink-0 font-medium text-[#FF0000]'>
                                Out of Stock
                            </p>
                        )}
                    </div>
                    <p className='text-[#09080F99] text-lg'>{description}</p>
                    <h2 className='text-lg font-bold text-[#09080F]'>Specifications</h2>
                    <ul className="list-disc list-inside">
                        {specification.map((spec, index) => (
                            <li className='text-[#09080F99]' key={index}>{spec}</li>
                        ))}
                    </ul>
                    <h2 className='text-lg font-bold text-[#09080F]'>Rating</h2>
                    <div className="flex items-center text-2xl">
                        {renderStars()}
                        <div className='ml-5 px-4 py-2 bg-[#09080F0D] rounded-[2rem] font-bold text-base'>{rating}</div>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => handleAddToCart(product_id)} className="btn btn-primary bg-[#9538E2] rounded-[2rem] text-white text-base mr-4 border-none">Add to Cart <HiOutlineShoppingCart /></button>
                        <button onClick={() => handleAddToWishList(product_id)} className={`border p-4 rounded-full ml-2 ${isWishListed ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-black'
                            }`}
                            disabled={isWishListed}>
                            <AiOutlineHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
