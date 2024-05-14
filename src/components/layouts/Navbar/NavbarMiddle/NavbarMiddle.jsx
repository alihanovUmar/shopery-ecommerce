import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../images/LogoIcon'
import { Button } from '../../../ui/button'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { SlBasket } from 'react-icons/sl'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CartContext } from '../../../../contexts/store'

const NavbarMiddle = () => {
  const [input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [isBasketClicked, setIsBasketClicked] = useState({})
  const [isFavoriteClicked, setIsFavoriteClicked] = useState({})
  const { showModal, modalItem, cart, favoriteProducts } = useContext(CartContext);


  const handleAddToFavorites = (id) => {
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

  const handleSearch = () => {
    if (input.trim() === '') {
      setSearchResults([])
      setSearched(false)
    } else {
      const results = cart.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
      setSearchResults(results)
      setSearched(true)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="py-6">
      <div className="flex items-center justify-between max-w-[1320px] m-auto">
        <div className="">
          <Link to="/" className="cursor-pointer hover:opacity-90 transition-all inline-block">
            <LogoIcon />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between px-4 border-r-primary py-1 gap-1 border border-gray-200 rounded-l-[6px] w-[366px]">
            <CiSearch size={32} />
            <input
              type="text"
              className="bg-transparent w-full p-[7px] outline-none border-none text-gray-500 text-[15px]"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="">
            <Button className="rounded-l-[0px]" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/favorite" className="cursor-pointer relative">
            <AiOutlineHeart size={30} />
            <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px] ">
              {favoriteProducts.length}
            </p>
          </Link>
          <div className="h-6 w-[1px] bg-gray-200 "></div>
          <Link to="/shoppingCart">
            <div className="flex items-center gap-3">
              <div className="cursor-pointer relative">
                <BsHandbag size={30} />
                <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px] ">
                  0
                </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-[11px] text-gray-700">Shopping cart:</p>
                <p className="text-[14px] text-gray-900 font-semibold">
                  {modalItem ? `$${modalItem.prices}` : '$0.00'}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {showModal && modalItem && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modalItem.title}</h2>
            <p>{modalItem.description}</p>
          </div>
        </div>
      )}
      {searched && input.trim() !== '' && (
        <div className="flex flex-wrap justify-center mt-4">
          {searchResults.map((item) => (
            <div
              key={item.id}
              className="m-[55px] bg-white rounded-lg shadow-2xl border border-gray-300 w-[300px] h-[400px] text-left flex flex-col"
            >
              <img src={item.img} alt={item.title} className="w-[100%] h-[200px] object-cover rounded-md" />
              <div className="m-[15px]">
                <h2 className="text-black-600 font-poppins text-[30px] font-normal leading-relaxed">{item.title}</h2>
                <p className="w-[250px] text-black-600 font-poppins text-base font-normal leading-relaxed overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {item.description}
                </p>
                <div className="text-[20px] font-normal font-poppins flex gap-5 items-center mb-4">
                  <h3 className="text-gray-600 ">{item.prices}</h3>
                  <h3 className="text-red-400 line-through">{item.discount}</h3>
                </div>
                <div className="mt-[10px] flex justify-between">
                  <button
                    className={`w-[130px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
                    ${isBasketClicked[item.id] ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                    onClick={() => handleAddToBasket(item.id)}
                  >
                    <SlBasket className="text-lg" />
                  </button>
                  <button
                    className={`w-[130px] h-[40px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 shadow-md 
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
      )}
    </div>
  )
}

export default NavbarMiddle
