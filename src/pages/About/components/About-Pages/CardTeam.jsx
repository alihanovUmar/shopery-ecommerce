import React, { useContext, useEffect, useState } from 'react'
import Container from '../../../../components/common/Container'
import { instance } from '../../../../utils/apiRequest'
import { SlBasket } from 'react-icons/sl'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CartContext } from '../../../../contexts/store'

function CardTeam() {
  const [data, setData] = useState({})

  const getData = async () => {
    const res = await instance.get('/aboutUs')
    setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const Left = () => {
    let Slider = document.querySelector('#slider')
    Slider.scrollLeft = Slider.scrollLeft + 337
  }

  const Right = () => {
    let Slider = document.querySelector('#slider')
    Slider.scrollLeft = Slider.scrollLeft - 345
  }

  const { cart, addToFavorites } = useContext(CartContext)

  const [isBasketClicked, setIsBasketClicked] = useState({})
  const [isFavoriteClicked, setIsFavoriteClicked] = useState({})

  const handleAddToFavorites = (id) => {
    addToFavorites(id) // Mahsulotni favoritlar ro'yxatiga qo'shish
    setIsFavoriteClicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
    console.log(`Product with id ${id} added to favorites.`)
  }

  const handleAddToBasket = (id) => {
    setIsBasketClicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
    console.log(`Product with id ${id} added to basket.`)
  }

  return (
    <div className="bg-gradient-to-b from-[#F2F2F2] to-[#FFF] ">
        <div className="pt-[80px] text-center">
          <h1 className="text-[48px] font-[600]">Our popular product</h1>

          <div className="container">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" my-[50px] flex gap-[30px] flex-wrap"
            >
              {cart.slice(0, 8).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-2xl border border-gray-300 w-[300px] h-[420px] text-left flex flex-col"
                >
                  <img className="w-full h-[220px] object-contain rounded-lg mb-4" src={item.img} alt="" />
                  <div data-aos="fade-down" className="text p-2">
                    <h2 className="text-black-600 font-poppins text-[30px] font-normal leading-relaxed">
                      {item.title}
                    </h2>
                    <p className="w-[250px] text-black-600 font-poppins text-base font-normal leading-relaxed overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {item.description}
                    </p>
                    <div className="text-[20px] font-normal font-poppins flex gap-5 items-center mb-4">
                      <h3 className="text-gray-600 ">{item.prices}</h3>
                      <h3 className="text-red-400 line-through">{item.discount}</h3>
                    </div>
                    <div className="flex justify-between">
                      <button
                        className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                    ${isBasketClicked[item.id] ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                        onClick={() => handleAddToBasket(item.id)}
                      >
                        <SlBasket className="text-lg" />
                      </button>
                      <button
                        className={`w-[135px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                    ${isFavoriteClicked[item.id] ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                        onClick={() => handleAddToFavorites(item.id)}
                      >
                        <MdOutlineFavoriteBorder className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardTeam
