import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getAddToCartList, removeFromCartList } from '../../utilities/addToDB';
import { RxCrossCircled } from 'react-icons/rx';

const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isSortedDesc, setIsSortedDesc] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false); // Track purchase state
    const gadgets = useLoaderData();
    const navigate = useNavigate();

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
    };

    const handleSort = () => {
        const sortedList = [...cartList].sort((a, b) => {
            return isSortedDesc ? a.price - b.price : b.price - a.price; // Sort by price
        });
        setCartList(sortedList);
        setIsSortedDesc(!isSortedDesc);
    };

    const handlePurchase = () => {
        setIsPurchased(true); // Set purchase state
        localStorage.removeItem('cart'); // Clear cart in local storage
        setCartList([]); // Clear cart items from state
        setTotalCost(0); // Reset total cost
    };

    return (
        <div>
            <div className='w-4/5 mx-auto flex justify-between'>
                <span className="font-bold text-lg">Number of items in cart: {cartList.length}</span>
                <h2 className="text-xl font-semibold">Cart</h2>
                <div className='flex items-center'>
                    <h3 className="text-lg font-bold">Total Cost: {totalCost}</h3>
                    <button 
                        onClick={handleSort} 
                        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Sort by Price
                    </button>
                    <button 
                        onClick={handlePurchase} 
                        disabled={cartList.length === 0} 
                        className={`ml-4 px-4 py-2 ${cartList.length === 0 ? 'bg-gray-400' : 'bg-green-500'} text-white rounded hover:bg-green-600`}
                    >
                        Purchase
                    </button>
                </div>
            </div>
            {isPurchased ? (
                <dialog id="my_modal_1" className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Payment Successful!</h3>
                        <p className="py-4">Thank you for your purchase.</p>
                        <div className="modal-action">
                            <button 
                                className="btn" 
                                onClick={() => {
                                    setIsPurchased(false); // Reset purchase state
                                    navigate('/'); // Redirect to home page
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
                        <div className="flex flex-grow gap-8">
                            <div>
                                <img className='w-52 h-[125px] object-contain rounded-xl' src={gadget.product_image} alt={gadget.product_title} />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h2 className="font-semibold">{gadget.product_title}</h2>
                                <p>{gadget.description}</p>
                                <p className="font-bold">Price: ${gadget.price}</p>
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
