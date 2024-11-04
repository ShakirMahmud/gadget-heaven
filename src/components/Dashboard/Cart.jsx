import { RxCrossCircled } from "react-icons/rx"; 
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAddToCartList, removeFromCartList } from '../../utilities/addToDB';

const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const gadgets = useLoaderData();
    useEffect(()=>{
        const storedCartList = getAddToCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const gadgetsInCart = gadgets.filter(gadget => storedCartListInt.includes(gadget.product_id));
        setCartList(gadgetsInCart);
    },[]);

    const handleRemove = (productId) => {
        const updatedCartList = cartList.filter(gadget => gadget.product_id !== productId);
        setCartList(updatedCartList);
        removeFromCartList(productId); 
    };

    return (
        <div>
            <div>{cartList.length}</div>
            {
                cartList.map(gadget => <div key={gadget.product_id}
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

export default Cart;