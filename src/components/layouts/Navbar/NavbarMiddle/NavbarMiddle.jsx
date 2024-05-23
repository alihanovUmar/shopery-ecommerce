import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../ui/button'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import LogoIcon from '../images/LogoIcon'
import { CartContext } from '../../../../contexts/store'
import { useTranslation } from 'react-i18next' 
import { translationKeys } from '../../../../utils/translation/translationKeys' 
import { SlBasket } from "react-icons/sl";

const NavbarMiddle = () => {
  const [input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const { cart, favoriteProducts, shoppingCart } = useContext(CartContext)
  const { t } = useTranslation() 

  const handleSearch = () => {
    if (input.trim()) {
      const results = cart.filter((product) => product.title.toLowerCase().includes(input.toLowerCase()))
      setSearchResults(results)
    } else {
      setSearchResults([])
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
        <div>
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
              onChange={(e) => {
                setInput(e.target.value)
                handleSearch()
              }}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div>
            <Button className="rounded-l-[0px]" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/favorite" className="cursor-pointer relative">
            <AiOutlineHeart size={30} />
            <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px]">
              {favoriteProducts.length}
            </p>
          </Link>
          <div className="h-6 w-[1px] bg-gray-200"></div>
          <Link to="/shoppingCart">
            <div className="flex items-center gap-3">
              <div className="cursor-pointer relative">
              <SlBasket size={30} />
                <p className="flex items-center justify-center border-[1px] border-white absolute right-[-3px] top-[-5px] w-[18px] h-[18px] rounded-full bg-hardPrimary text-white text-[10px]">
                  {shoppingCart.length}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] text-gray-700 w-[50px]">{t(translationKeys['Shopping cart:'])}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="container">
        {searchResults.length > 0 && (
          <div>
            <div className="flex justify-between flex-wrap gap-[100px]">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center shadow-custom rounded-lg w-[300px] gap-[15px] p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-secondary hover:to-primary transform hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-[80px] h-[80px] bg-white object-contain rounded-lg"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{product.title}</p>
                    <p className="text-gray-600 text-sm">{product.prices}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarMiddle
