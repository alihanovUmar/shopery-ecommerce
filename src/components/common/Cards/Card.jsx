import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../../contexts/store'
import { SlBasket } from 'react-icons/sl'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

export function Card() {
  const { cart, addToFavorites, favoriteProducts, removeFromFavorites, setShoppingCart } = useContext(CartContext)
  const [isBasketClicked, setIsBasketClicked] = useState([])
  const [localCart, setLocalCart] = useState([])

  useEffect(() => {
    const localCartData = JSON.parse(localStorage.getItem('cart'))
    if (localCartData) {
      setLocalCart(localCartData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleAddToBasket = (product) => {
    setIsBasketClicked((prev) => [...prev, product.id])

    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart]
      const productIndex = updatedCart.findIndex((item) => item.id === product.id)
      if (productIndex !== -1) {
        updatedCart[productIndex].quantity = (updatedCart[productIndex].quantity || 0) + 1
      } else {
        updatedCart.push({ ...product, quantity: 1 })
      }
      return updatedCart
    })

    console.log(`Product with id ${product.id} added to basket.`)
  }

  const handleAddToFavorites = (product) => {
    const isFavorite = favoriteProducts.some((favProduct) => favProduct.id === product.id)
    if (isFavorite) {
      removeFromFavorites(product.id)
      console.log(`Product with id ${product.id} removed from favorites.`)
    } else {
      addToFavorites(product)
      console.log(`Product with id ${product.id} added to favorites.`)
    }
  }

  return (
    <div className="container">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex gap-[30px] flex-wrap my-[100px]">
        {cart &&
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-2xl border border-gray-300 w-[300px] h-[420px] text-left flex flex-col"
            >
              <img className="w-full h-[220px] object-contain rounded-lg mb-4" src={item.img} alt="" />
              <div data-aos="fade-down" className="text p-2">
                <h2 className="text-black-600 font-poppins text-[30px] font-normal leading-relaxed">{item.title}</h2>
                <p className="w-[250px] text-black-600 font-poppins text-base font-normal leading-relaxed overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {item.description}
                </p>
                <div className="text-[20px] font-normal font-poppins flex gap-5 items-center mb-4">
                  <h3 className="text-gray-600 ">{item.prices}</h3>
                  {item.discount && <h3 className="text-red-400 line-through">{item.discount}</h3>}
                </div>
                <div className="flex justify-between">
                  <button
                    className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                      ${
                        isBasketClicked.some((clickedProductId) => clickedProductId === item.id)
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-600'
                      }`}
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
  )
}
