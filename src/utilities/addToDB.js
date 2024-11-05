const getAddToCartList =()=>{
    const storedListStr = localStorage.getItem('cart');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredCartList = (id) =>{
    const storedList = getAddToCartList();
    const alreadyInCart = storedList.some(item => item === id);
    if(alreadyInCart){
        alert('already added')
    }else{
        storedList.push(id);
        localStorage.setItem('cart', JSON.stringify(storedList));
        alert('added to cart successfully');
    }
}

const removeFromCartList = (id) => {
    let storedList = getAddToCartList();
    storedList = storedList.filter(item => item !== id.toString()); 
    localStorage.setItem('cart', JSON.stringify(storedList));
    // alert('Removed from cart successfully');
};


const getAddToWishList =()=>{
    const storedListStr = localStorage.getItem('wishlist');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredWishList = (id) =>{
    const storedList = getAddToWishList();
    const alreadyInWishList = storedList.some(item => item === id);
    if(alreadyInWishList){
        alert('already added')
    }else{
        storedList.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedList));
        alert('added to cart successfully')
     
    }
}

const removeFromWishList = (id) => {
    let storedList = getAddToWishList();
    storedList = storedList.filter(item => item !== id.toString()); 
    localStorage.setItem('wishlist', JSON.stringify(storedList));
    // alert('Removed from wishlist successfully');
  
}

export {addToStoredCartList, getAddToCartList, getAddToWishList, addToStoredWishList, removeFromCartList, removeFromWishList}