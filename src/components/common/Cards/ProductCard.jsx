import React, { useContext, useState, useEffect } from 'react'
import { SlBasket } from 'react-icons/sl'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CartContext } from '../../../contexts/store'

export default function ProductCard() {
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
    <div className="container mx-auto p-4">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="my-[50px] hfeff gap-[30px] flex min-[860px]:justify-center flex-wrap overflow-y-auto max-[860px]:flex-nowrap  max-[860px]:w-[580px] max-[655px]:w-[540px]  max-[590px]:w-[500px] max-[550px]:w-[450px]  max-[500px]:w-[400px] max-[450px]:w-[350px] max-[400px]:w-[300px] max-[350px]:w-[260px]"
      >
        {cart.slice(0, 8).map((item, index) => (
          <div  
            key={index}
            className="bg-white rounded-lg shadow-2xl border border-gray-300 w-[300px] max-[430px]:w-[230px] h-[420px] max-[430px]:h-[340px] text-left flex flex-col mb-4"
          >
            <img
              className="w-full h-[220px] max-[430px]:h-[160px] object-contain rounded-lg mb-4"
              src={item.img}
              alt=""
            />
            <div data-aos="fade-down" className="text p-2">
              <h2 className="text-black-600 font-poppins text-[30px] max-[430px]:text-[22px] font-normal leading-relaxed">
                {item.title}
              </h2>
              <p className="w-[250px] max-[430px]:w-[200px] text-black-600 font-poppins text-base font-normal leading-relaxed overflow-hidden whitespace-nowrap overflow-ellipsis">
                {item.description}
              </p>
              <div className="text-[20px] font-normal font-poppins flex gap-5 items-center mb-4">
                <h3 className="text-gray-600">{item.prices}</h3>
                <h3 className="text-red-400 line-through">{item.discount}</h3>
              </div>
              <div className="flex justify-between">
                <button
                  className={`w-[130px] max-[860px]:w-[120px] max-[430px]:w-[98px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
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
                  className={`w-[130px] max-[860px]:w-[120px] max-[430px]:w-[98px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
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
