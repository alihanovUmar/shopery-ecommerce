import { Link } from 'react-router-dom'
import LogoIcon from '../Navbar/images/LogoIcon'
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
} from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { CgMail } from 'react-icons/cg'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="w-full bg-gray-800 text-gray-300 text-xs">
      <div className="max-w-[1320px] mx-auto py-5 px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <Link onClick={scrollToTop} to="/">
              <LogoIcon color="white" className="w-24 h-24" />
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

          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] text-white font-semibold">My Account</h1>
            <div className="flex flex-col gap-2">
              {['My Account', 'Order History', 'Shopping Cart', 'Wishlist'].map((item) => (
                <Link key={item} onClick={scrollToTop} to="/" className="hover:text-primary transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] text-white font-semibold">Help</h1>
            <div className="flex flex-col gap-2">
              {['Contact', 'FAQs', 'Terms & Condition', 'Privacy Policy'].map((item) => (
                <Link key={item} onClick={scrollToTop} to="/contact" className="hover:text-primary transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] text-white font-semibold">Proxy</h1>
            <div className="flex flex-col gap-2">
              {['About', 'Shop', 'Product', 'Track Order'].map((item) => (
                <Link key={item} onClick={scrollToTop} to="/card" className="hover:text-primary transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[18px] text-white font-semibold">Categories</h1>
            <div className="flex flex-col gap-2">
              {['Drink & Water', 'Yogurt & Ice Cream', 'Cake & Bread', 'Butter & Cream'].map((item) => (
                <Link key={item} onClick={scrollToTop} to={`/${item.replace(/ & /g, '').replace(/ /g, '').toLowerCase()}`} className="hover:text-primary transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8"></div>

        <div className="flex flex-wrap justify-between items-center pt-3">
          <p className="text-xs text-center w-full lg:w-auto">&copy; 2024 MegaCenter eCommerce. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
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
  )
}
