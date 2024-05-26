import { Link } from 'react-router-dom';
import LogoIcon from '../Navbar/images/LogoIcon';
import {
  FaCcApplePay,
  FaCcVisa,
  FaCcDiscover,
  FaCcMastercard,
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { CgMail } from 'react-icons/cg';
import { useEffect, useState } from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Мобильный вид для ширины менее 768 пикселей
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-gray-800 text-gray-300 text-xs">
      <div className="max-w-[1320px] mx-auto p-5 px-4">
        <div className="flex flex-wrap justify-center max-[330px]:text-center md:justify-around items-center gap-[50px]">
          <div className="flex flex-col gap-5 mb-6 md:mb-0">
            <Link className="bg-white w-25 h-26 rounded-[10px]" onClick={scrollToTop} to="/">
              <LogoIcon className="w-24 h-24" />
            </Link>
            <div className="flex flex-col gap-3">
              <Link onClick={scrollToTop} to="/contact">
                <div className="flex items-center gap-2 text-white pt-[15px] p-2 border-b border-primary transition duration-300 hover:text-primary">
                  <FaPhoneSquareAlt className="text-lg" /> (+996) 555 55-55-55
                </div>
                <div className="flex items-center gap-2 text-white pt-[15px] p-2 border-b border-primary transition duration-300 hover:text-primary">
                  <CgMail className="text-lg" /> mega@gmail.com
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-6 md:mb-0">
            <h1 className="text-[18px] text-white font-semibold">Мой аккаунт</h1>
            <div className="flex flex-col gap-2">
              {['Мой аккаунт', 'История заказов', 'Корзина', 'Избранное'].map((item) => (
                <Link key={item} onClick={scrollToTop} to="/" className="hover:text-primary transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-6 md:mb-0">
            <h1 className="text-[18px] text-white font-semibold">Помощь</h1>
            <div className="flex flex-col gap-2">
              {['Контакты', 'FAQ', 'Условия', 'Политика конфид-ности'].map((item) => (
                <Link key={item} onClick={scrollToTop} to="/contact" className="hover:text-primary transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {(isMobile || window.innerWidth < 1024) && (
            <div className="flex flex-col gap-4 mb-6 md:mb-0">
              <h1 className="text-[18px] text-white font-semibold">Прокси</h1>
              <div className="flex flex-col gap-2">
                {['О нас', 'Магазин', 'Продукт', 'Отслеживание заказа'].map((item) => (
                  <Link key={item} onClick={scrollToTop} to="/card" className="hover:text-primary transition duration-300">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 mb-6 md:mb-0">
            <h1 className="text-[18px] text-white font-semibold">Категории</h1>
            <div className="flex flex-col gap-2">
              {['Напитки и вода', 'Йогурты и мороженое', 'Торты и хлеб', 'Масло и сливки'].map((item) => (
                <Link key={item} onClick={scrollToTop} to={`/${item.replace(/ & /g, '').replace(/ /g, '').toLowerCase()}`} className="hover:text-primary transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8"></div>

        <div className="flex max-[420px]:justify-center flex-wrap justify-between mx-auto items-center pt-3">
          <p className="text-xs text-center w-full lg:w-auto">&copy; 2024 FullOrganic Commerce. All Rights Reserved.</p>
          <div className="flex  items-center gap-4 mt-4 lg:mt-0">
            {[FaCcApplePay, FaCcVisa, FaCcDiscover, FaCcMastercard].map((Icon, index) => (
              <Icon key={index} className="text-2xl cursor-pointer hover:text-primary transition duration-300 transform hover:scale-110" />
            ))}
            <div className="flex items-center border border-gray-700 rounded-lg p-2 cursor-pointer hover:border-primary transition duration-300">
              <RiSecurePaymentFill className="text-lg" />
              <div className="ml-2 text-center">
                <p className="text-xs">Secure</p>
                <p className="text-xs">Payment</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
              <Icon key={index} className="text-xl text-white cursor-pointer hover:text-primary transition duration-300 transform hover:scale-110" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}