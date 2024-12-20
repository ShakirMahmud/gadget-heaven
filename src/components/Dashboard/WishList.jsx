import { RxCrossCircled } from "react-icons/rx";
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToStoredCartList, getAddToWishList, removeFromWishList } from "../../utilities/addToDB";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { WishlistContext } from "../../context";

const WishList = () => {
    const [wishList, setWishList] = useState([]);
    const gadgets = useLoaderData();
    const { setWishlistLength } = useContext(WishlistContext);

    useEffect(() => {
        const storedWishList = getAddToWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const gadgetsInWish = gadgets.filter(gadget => storedWishListInt.includes(gadget.product_id));
        setWishList(gadgetsInWish);
    }, [gadgets]);

    const handleAddToWishlist = (productId) => {
        const updatedWishList = wishList.filter(gadget => gadget.product_id !== productId);
        setWishList(updatedWishList);
        removeFromWishList(productId);
        addToStoredCartList(String(productId));
        const storedList = getAddToWishList(); 
        setWishlistLength(storedList.length);
    };

    const handleRemove = (productId) => {
        const updatedWishList = wishList.filter(gadget => gadget.product_id !== productId);
        setWishList(updatedWishList);
        removeFromWishList(productId); 
        const storedList = getAddToWishList(); 
        setWishlistLength(storedList.length);
    };

    return (
        <div className="w-4/5 mx-auto my-12">
            <h2 className="text-xl font-semibold">WishList</h2>
            {
                wishList.map(gadget => (
                    <div key={gadget.product_id} className='flex justify-between  bg-white p-8 rounded-2xl my-6'>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div>
                                <img className='w-52 h-[125px] object-contain rounded-xl' src={gadget.product_image} alt="" />
                            </div>
                            <div className='flex flex-col text-center lg:text-start space-y-3 justify-between'>
                                <h2 className="text-xl font-bold">{gadget.product_title}</h2>
                                <p>{gadget.description}</p>
                                <p className="text-lg font-medium">Price: ${gadget.price}</p>
                                <div>
                                    <button 
                                        onClick={() => handleAddToWishlist(gadget.product_id)} 
                                        className="btn btn-primary bg-[#9538E2] rounded-[2rem] text-white text-base mr-4 border-none">
                                        Add to Cart <HiOutlineShoppingCart />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-red-600 text-3xl cursor-pointer" onClick={() => handleRemove(gadget.product_id)}>
                            <RxCrossCircled />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default WishList;
