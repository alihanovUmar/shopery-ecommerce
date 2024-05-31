import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import LogoIcon from '../images/LogoIcon';
import { CartContext } from '../../../../contexts/store';
import { useTranslation } from 'react-i18next';
import { translationKeys } from '../../../../utils/translation/translationKeys';
import { IoSearchOutline } from "react-icons/io5";

const NavbarMiddle = () => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { cart, favoriteProducts, shoppingCart } = useContext(CartContext);
  const { t } = useTranslation();

  const handleSearch = () => {
    if (input.trim()) {
      const results = cart.filter((product) => product.title.toLowerCase().includes(input.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mx-[10px] my-[10px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between max-w-[1260px] mx-auto px-[1px]">
        <Link to="/" className="cursor-pointer hover:opacity-90 transition-all inline-block mb-4 md:mb-0">
          <LogoIcon />
        </Link>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <div className="flex">
            <div className="flex items-center w-full md:w-auto justify-between px-4 border-r-primary py-1 gap-1 border border-gray-200 rounded-l-lg">
              <IoSearchOutline  size={28} />
              <input
                type="text"
                className="bg-transparent w-full p-2 outline-none border-none text-gray-500 text-sm"
                placeholder={t(translationKeys['Search'])}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  handleSearch();
                }}
                onKeyPress={handleKeyPress}
              />
            </div>
            <Button className="rounded-l-none" onClick={handleSearch}>
              {t(translationKeys['Search'])}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/favorite" className="relative cursor-pointer">
            <AiOutlineHeart size={24} />
            <p className="absolute right-[-3px] top-[-5px] w-4 h-4 flex items-center justify-center border border-white rounded-full bg-hardPrimary text-white text-xs">
              {favoriteProducts.length}
            </p>
          </Link>
          <div className="h-6 w-px bg-gray-200"></div>
          <Link to="/shoppingCart" className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <SlBasket size={24} />
              <p className="absolute right-[-3px] top-[-5px] w-4 h-4 flex items-center justify-center border border-white rounded-full bg-hardPrimary text-white text-xs">
                {shoppingCart.length}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-gray-700">{t(translationKeys['Shopping cart:'])}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {searchResults.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-8">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center shadow-lg rounded-lg w-full md:w-64 gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-secondary hover:to-primary transform hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-20 h-20 object-contain rounded-lg bg-white"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{product.title}</p>
                    <p className="text-sm text-gray-600">{product.prices}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMiddle;
