import { RxCrossCircled } from "react-icons/rx"; 
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAddToWishList, removeFromWishList } from "../../utilities/addToDB";


const WishList = () => {
    const [wishList, setWishList] = useState([]);
    const gadgets = useLoaderData();
    useEffect(()=>{
        const storedWishList = getAddToWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const gadgetsInWish = gadgets.filter(gadget => storedWishListInt.includes(gadget.product_id));
        setWishList(gadgetsInWish);
    },[]);

    const handleRemove = (productId) => {
        const updatedWishList = wishList.filter(gadget => gadget.product_id !== productId);
        setWishList(updatedWishList);
        removeFromWishList(productId); 
    };

    return (
        <div>
            <div>{wishList.length}</div>
            {
                wishList.map(gadget => <div key={gadget.product_id}
                    className='flex w-4/5 mx-auto  bg-white p-8 rounded-2xl my-6'
                >
                    <div className="flex flex-grow gap-8">
                    <div>
                        <img className='w-52 h-[125px] object-contain rounded-xl' src={gadget.product_image} alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h2>{gadget.product_title}</h2>
                        <p>{gadget.description}</p>
                        <p>Price: {gadget.price}</p>
                    </div>
                    </div>
                    <div
                    onClick={() => handleRemove(gadget.product_id)}
                     className="text-red-600 text-3xl flex ">
                        <RxCrossCircled />
                    </div>
                </div>)
            }
        </div>
    );
};

export default WishList;