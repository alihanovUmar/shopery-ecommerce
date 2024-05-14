import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorites = (item) => {
    setFavoriteProducts(prev => [...prev, item]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteProducts(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        showModal,
        modalItem,
        favoriteProducts, 
        addToFavorites,
        removeFromFavorites,
        setModalItem,
        setShowModal,
        setCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
