import React, { useContext } from 'react'
import { MdDeleteForever, MdOutlineFavoriteBorder } from 'react-icons/md'
import { CartContext } from '../../contexts/store'

export default function ShoppingCart() {
  const { shoppingCart, favoriteProducts, addToFavorites, removeFromFavorites, removeFromCart } =
    useContext(CartContext)

  const handleToggleFavorite = (id) => {
    const isFavorite = isProductFavorite(id)
    if (isFavorite) {
      removeFromFavorites(id)
    } else {
      const productToAdd = shoppingCart.find((item) => item.id === id)
      addToFavorites(productToAdd)
    }
  }

  const handleRemoveFromCart = (id) => {
    removeFromCart(id)
  }

  const isProductFavorite = (id) => favoriteProducts.some((favProduct) => favProduct.id === id)

  const calculateTotalPrice = () => {
    return shoppingCart
      .reduce((total, item) => {
        const price = parseFloat(item.prices.replace('$', ''))
        return total + price
      }, 0)
      .toFixed(2)
  }

  const calculateDiscountedTotalPrice = () => {
    return shoppingCart
      .reduce((total, item) => {
        const price = item.discount
          ? parseFloat(item.discount.replace('$', ''))
          : parseFloat(item.prices.replace('$', ''))
        return total + price
      }, 0)
      .toFixed(2)
  }

  const handleOrder = () => {
    alert('Заказ оформлен!')
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4 m-[60px] flex justify-center">Shopping Cart</h1>
      <hr className="m-[50px]" />
      <div className="flex justify-between">
        <div className="flex overflow-x-auto gap-4 h-[430px] mt-[70px] bg-white rounded-lg shadow-md p-1 custom-scrollbar">
          {shoppingCart.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 w-[280px] flex-shrink-0">
              <img src={item.img} alt={item.title} className="w-full h-40 object-contain mb-4" />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-500 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">{item.prices}</p>
                {item.discount && <p className="text-red-500 line-through">{item.discount}</p>}
              </div>
              <div className="flex justify-between gap-[8px] mt-[10px]">
                <button
                  className={`w-[120px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md ${
                    isProductFavorite(item.id) ? 'bg-black text-white' : 'bg-white text-gray-600'
                  }`}
                  onClick={() => handleToggleFavorite(item.id)}
                >
                  <MdOutlineFavoriteBorder className="text-lg" />
                </button>
                <button
                  className="w-[120px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <MdDeleteForever className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 border-t border-gray-200 flex justify-center">
          <div className="sticky top-0 left-0 right-0 bg-white rounded-lg shadow-md p-4 w-[330px] text-center">
            <div>
              {shoppingCart.slice(0, 4).map((item) => (
                <div className="flex items-center justify-between" key={item.id}>
                  <div className="flex items-center gap-[10px]">
                    <img src={item.img} alt={item.title} className="w-[50px] h-[50px] object-contain mb-4" />
                    <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  </div>
                  <p>{item.prices}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-between m-[15px]">
                <p>Subtotal:</p>
                <p className="text-x font-semibold">{calculateDiscountedTotalPrice()}</p>
              </div>
              <hr />
              <div className="flex items-center justify-between m-[15px]">
                <p>Shipping:</p>
                <p className="text-x font-semibold">Free</p>
              </div>
              <hr />
              <p className="text-[18px] font-semibold m-[15px]">Discounted Total Price: ${calculateTotalPrice()}</p>
              <button
                className="w-[306px] h-[51px] rounded-[43px] bg-gradient-to-r from-[#00b307] to-[#15d11bac] text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                onClick={handleOrder}
              >
                Заказать товары
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-[50px]" />
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #15d11bac #f9fafb;
        }

        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
