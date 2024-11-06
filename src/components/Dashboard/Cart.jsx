import { FaSortAmountDownAlt } from "react-icons/fa"; 
import { FaSortAmountDown } from "react-icons/fa"; 

import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getAddToCartList, removeFromCartList } from '../../utilities/addToDB';
import { RxCrossCircled } from 'react-icons/rx';
import modalImg from '../../assets/Group.png'
import { CartContext } from '../../context';

const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isSortedDesc, setIsSortedDesc] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);
    const [purchaseTotalCost, setPurchaseTotalCost] = useState(0);
    const gadgets = useLoaderData();
    const navigate = useNavigate();
    const { setCartLength } = useContext(CartContext);

    useEffect(() => {
        const storedCartList = getAddToCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const gadgetsInCart = gadgets.filter(gadget => storedCartListInt.includes(gadget.product_id));
        setCartList(gadgetsInCart);
        const total = gadgetsInCart.reduce((acc, gadget) => acc + gadget.price, 0);
        setTotalCost(total);
    }, [gadgets]);

    const handleRemove = (productId) => {
        const updatedCartList = cartList.filter(gadget => gadget.product_id !== productId);
        const removedGadget = cartList.find(gadget => gadget.product_id === productId);
        setTotalCost(prevTotal => prevTotal - (removedGadget ? removedGadget.price : 0));
        setCartList(updatedCartList);
        removeFromCartList(productId);
        const storedList = getAddToCartList();
        setCartLength(storedList.length);
    };

    const handleSort = () => {
        const sortedList = [...cartList].sort((a, b) => {
            return isSortedDesc ? a.price - b.price : b.price - a.price;
        });
        setCartList(sortedList);
        setIsSortedDesc(!isSortedDesc);
    };

    const handlePurchase = () => {
        setPurchaseTotalCost(totalCost);
        setIsPurchased(true);
        localStorage.removeItem('cart');
        setCartList([]);
        setTotalCost(0);
        const storedList = getAddToCartList();
        setCartLength(storedList.length);
    };

    return (
        <div className=' my-12'>
            <div className='w-4/5 mx-auto flex items-center justify-between'>
                <h2 className="text-xl font-semibold">Cart</h2>
                <div className='flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-5'>
                    <h3 className="text-lg font-bold">Total Cost: ${totalCost}</h3>
                    <button
                        onClick={handleSort}
                        className="ml-0 lg:ml-4 px-6 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-3"
                    >
                        Sort by Price {!isSortedDesc ? <FaSortAmountDown /> : <FaSortAmountDownAlt />}
                    </button>
                    <button
                        onClick={handlePurchase}
                        disabled={cartList.length === 0}
                        className={`ml-0 lg:ml-4 px-6 py-3 w-full lg:w-auto text-white text-lg font-bold rounded-full transition-all duration-300
                            ${cartList.length === 0 ? 'bg-gray-400' : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'}`}
                    >
                        Purchase
                    </button>
                </div>
            </div>

            {isPurchased ? (
                <dialog id="my_modal_1" className="modal modal-open">
                    <div className="modal-box flex flex-col items-center justify-center space-y-6">
                        <img src={modalImg} alt="" />
                        <h3 className="font-bold text-3xl">Payment Successful!</h3>
                        <p className="py-4">Thank you for your purchase.</p>
                        <p className="font-bold text-xl">Total Cost: ${purchaseTotalCost}</p>
                        <div className="modal-action w-full">
                            <button
                                className="btn text-lg font-bold rounded-3xl w-full"
                                onClick={() => {
                                    setIsPurchased(false);
                                    navigate('/');
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            ) : (
                cartList.map(gadget => (
                    <div key={gadget.product_id} className='flex w-4/5 mx-auto bg-white p-8 rounded-2xl my-6'>
                        <div className="flex flex-col lg:flex-row flex-grow gap-8">
                            <div>
                                <img className='w-52 h-[125px] object-contain rounded-xl' src={gadget.product_image} alt={gadget.product_title} />
                            </div>
                            <div className='flex flex-col justify-between text-center lg:text-start space-y-3'>
                                <h2 className="font-bold text-xl">{gadget.product_title}</h2>
                                <p>{gadget.description}</p>
                                <p className="font-medium text-lg">Price: ${gadget.price}</p>
                            </div>
                        </div>
                        <div onClick={() => handleRemove(gadget.product_id)} className="text-red-600 text-3xl flex cursor-pointer">
                            <RxCrossCircled />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
