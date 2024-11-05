import { toast } from "react-toastify";

const getAddToCartList = () => {
  const storedListStr = localStorage.getItem("cart");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCartList = (id) => {
  const storedList = getAddToCartList();
  const alreadyInCart = storedList.some((item) => item === id);
  if (alreadyInCart) {
    toast.warn("Item already added to cart!", {
      position: "top-right",
      autoClose: 3000,
    });
  } else {
    storedList.push(id);
    localStorage.setItem("cart", JSON.stringify(storedList));
    console.log("Toast:", toast),
      console.log("Toast POSITION:", toast.POSITION);

    toast.success("Added to cart successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  }
};

const removeFromCartList = (id) => {
  let storedList = getAddToCartList();
  storedList = storedList.filter((item) => item !== id.toString());
  localStorage.setItem("cart", JSON.stringify(storedList));
  toast.info("Removed from cart successfully!", {
    position: "top-right",
    autoClose: 3000,
  });
};

const getAddToWishList = () => {
  const storedListStr = localStorage.getItem("wishlist");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getAddToWishList();
  const alreadyInWishList = storedList.some((item) => item === id);
  if (alreadyInWishList) {
    toast.warn("Item already added to wishlist!", {
      position: "top-right",
      autoClose: 3000,
    });
  } else {
    storedList.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedList));
    toast.success("Added to wishlist successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  }
};

const removeFromWishList = (id) => {
  let storedList = getAddToWishList();
  storedList = storedList.filter((item) => item !== id.toString());
  localStorage.setItem("wishlist", JSON.stringify(storedList));
  toast.info("Removed from wishlist successfully!", {
    position: "top-right",
    autoClose: 3000,
  });
};

export {
  addToStoredCartList,
  getAddToCartList,
  getAddToWishList,
  addToStoredWishList,
  removeFromCartList,
  removeFromWishList,
};
