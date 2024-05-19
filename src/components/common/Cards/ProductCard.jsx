import React, { useContext, useState, useEffect } from 'react';
import { SlBasket } from 'react-icons/sl';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { CartContext } from '../../../contexts/store';

const ProductCard = ({ product }) => {
  const { cart, addToFavorites, favoriteProducts, removeFromFavorites, setShoppingCart } = useContext(CartContext);
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли продукт в корзине
    const foundProduct = cart.find((item) => item.id === product.id);
    setIsProductInCart(!!foundProduct); // Преобразуем результат в булевое значение
  }, [cart, product]);

  const handleAddToBasket = (product) => {
    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        updatedCart[productIndex].quantity = (updatedCart[productIndex].quantity || 0) + 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }
      return updatedCart;
    });
    console.log(`Product with id ${product.id} added to basket.`);
  };

  const handleAddToFavorites = (product) => {
    const isFavorite = favoriteProducts.some((favProduct) => favProduct.id === product.id);
    if (isFavorite) {
      removeFromFavorites(product.id);
      console.log(`Product with id ${product.id} removed from favorites.`);
    } else {
      addToFavorites(product);
      console.log(`Product with id ${product.id} added to favorites.`);
    }
  };

  return (
    <div className="container">
      <div className="my-[50px] flex gap-[30px] flex-wrap">
        {cart.slice(0, 8).map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-2xl border border-gray-300 w-[300px] h-[420px] text-left flex flex-col">
            <img className="w-full h-[220px] object-contain rounded-lg mb-4" src={item.img} alt="" />
            <div className="text p-2">
              <h2 className="text-black-600 font-poppins text-[30px] font-normal leading-relaxed">{item.title}</h2>
              <p className="w-[250px] text-black-600 font-poppins text-base font-normal leading-relaxed overflow-hidden whitespace-nowrap overflow-ellipsis">{item.description}</p>
              <div className="text-[20px] font-normal font-poppins flex gap-5 items-center mb-4">
                <h3 className="text-gray-600 ">{item.prices}</h3>
                {item.discount && <h3 className="text-red-400 line-through">{item.discount}</h3>}
              </div>
              <div className="flex justify-between">
                <button
                  className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                      ${isProductInCart ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                  onClick={() => handleAddToBasket(item)}
                >
                  <SlBasket className="text-lg" />
                </button>
                <button
                  className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                      ${
                        favoriteProducts.some((favProduct) => favProduct.id === item.id)
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-600'
                      }`}
                  onClick={() => handleAddToFavorites(item)}
                >
                  <MdOutlineFavoriteBorder className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
