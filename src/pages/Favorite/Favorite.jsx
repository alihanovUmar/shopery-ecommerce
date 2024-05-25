import React, { useContext, useState } from 'react'
import { SlBasket } from 'react-icons/sl'
import { MdDeleteForever } from 'react-icons/md'
import { CartContext } from '../../contexts/store'

export default function Favorite() {
  const { favoriteProducts, removeFromFavorites, setShoppingCart, shoppingCart } = useContext(CartContext)
  const [isBasketClicked, setIsBasketClicked] = useState({})

  const handleToggleBasket = (id) => {
    setIsBasketClicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))

    const productToAdd = favoriteProducts.find((product) => product.id === id)
    const isItemInCart = shoppingCart.some((item) => item.id === id)

    if (isItemInCart) {
      setShoppingCart((prevCart) => prevCart.filter((item) => item.id !== id))
    } else {
      setShoppingCart((prevCart) => [...prevCart, { ...productToAdd, quantity: 1 }])
    }

    console.log(`Product with id ${id} added/removed from basket.`)
  }

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id)
    console.log(`Product with id ${id} removed from favorites.`)
  }

  return (
    <div className="container">
      <center>
        <h1 className="m-[50px] text-gray-400 font-poppins text-[25px] font-normal">Favorite Products</h1>
      </center>
      <div className="my-[50px] hfef gap-[30px] flex-wrap overflow-y-auto max-[700px]:flex-nowrap max-[700px]:w-[400px]">
        {favoriteProducts && favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-2xl border border-gray-300 w-[300px] h-[420px] text-left flex flex-col"
            >
              <img className="w-full h-[220px] object-contain rounded-lg mb-4" src={product.img} alt={product.title} />
              <div className="text p-2">
                <h2 className="text-black-600 font-poppins text-[30px] font-normal leading-relaxed">{product.title}</h2>
                <p className="w-[250px] text-black-600 font-poppins text-base font-normal leading-relaxed overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {product.description}
                </p>
                <div className="text-[20px] font-normal font-poppins flex gap-5 items-center mb-4">
                  <h3 className="text-gray-600">{product.prices}</h3>
                  <h3 className="text-red-400 line-through">{product.discount}</h3>
                </div>
                <div className="flex justify-between">
                  <button
                    className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                      ${isBasketClicked[product.id] ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                    onClick={() => handleToggleBasket(product.id)}
                  >
                    <SlBasket className="text-lg" />
                  </button>
                  <button
                    className="w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md"
                    onClick={() => handleRemoveFromFavorites(product.id)}
                  >
                    <MdDeleteForever className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <center>
            <p className="font-poppins text-[36px] font-semibold leading-[120%] tracking-normal text-center">
              No favorite products yet.
            </p>
          </center>
        )}
      </div>
    </div>
  )
}
