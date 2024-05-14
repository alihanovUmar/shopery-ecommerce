import React, { useContext, useState } from 'react';
import { SlBasket } from 'react-icons/sl';
import { MdDeleteForever } from 'react-icons/md';
import { CartContext } from '../../contexts/store';

export default function Favorite() {
  const { favoriteProducts, removeFromFavorites } = useContext(CartContext);

  const [isBasketClicked, setIsBasketClicked] = useState({});

  const handleAddToBasket = (id) => {
    setIsBasketClicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    console.log(`Product with id ${id} added to basket.`);
  };

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id);
    console.log(`Product with id ${id} removed from favorites.`);
  };

  const isProductFavorite = (id) => favoriteProducts.some((favProduct) => favProduct.id === id);

  return (
    <div className="container">
      <center>
        <h1 className="m-[50px] text-gray-400 font-poppins text-[25px] font-normal">Favorite Products</h1>
      </center>
      <div className="my-[50px] flex gap-[30px] flex-wrap">
        {favoriteProducts && favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-2xl border border-gray-300 w-[300px] h-[420px] text-left flex flex-col"
            >
              <img className="w-full h-[220px] object-contain rounded-lg mb-4" src={product.img} alt="" />
              <div className="text p-2">
                <h2 className="text-black-600 font-poppins text-[30px] font-normal leading-relaxed">{product.title}</h2>
                <p className="w-[250px] text-black-600 font-poppins text-base font-normal leading-relaxed overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {product.description}
                </p>
                <div className="text-[20px] font-normal font-poppins flex gap-5 items-center mb-4">
                  <h3 className="text-gray-600 ">{product.prices}</h3>
                  <h3 className="text-red-400 line-through">{product.discount}</h3>
                </div>
                <div className="flex justify-between">
                  <button
                    className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                      ${isBasketClicked[product.id] ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                    onClick={() => handleAddToBasket(product.id)}
                  >
                    <SlBasket className="text-lg" />
                  </button>
                  <button
                    className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                      ${isProductFavorite(product.id) ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                    onClick={() => handleRemoveFromFavorites(product.id)}
                  >
                    <MdDeleteForever className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite products yet.</p>
        )}
      </div>
    </div>
  );
}
