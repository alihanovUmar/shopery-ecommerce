import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/common/Cards/ProductCard'
import Video from '../../components/common/video/video'
import OurSpecial from './components/OurSpecial'
import Timer from './components/timer'
import SwiperTop from '../../components/ui/swiper'
import Featured from '../../components/common/featured/featured'
import { instance } from '../../utils/apiRequest'
import Customers from '../../components/common/Customers/Customers'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [dataProduct, setdataProduct] = useState([])

  useEffect(() => {
    ;(async () => {
      const dataProductPage = await instance.get('/products')
      setdataProduct(dataProductPage.data)
    })()
  }, [])

  const [matches, setMatches] = useState(window.matchMedia('(min-width: 570px)').matches)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 570px)')
    const handler = (e) => setMatches(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div>
      <div className="relative max-w-[1320px] m-auto">
        <SwiperTop />
        <div>
          <Featured />
        </div>
      </div>
      <div className="bg-[#EDF2EE] py-[100px] mt-[80px] shadow-lg hover:shadow-x transition-shadow duration-500">
        <h1 className="font-[600] text-[40px] text-center mb-[24px]">Introducing Our Products</h1>
      </div>

      <div className=" bg-slate-500 p-[100px]">
        <ProductCard className="rounded-md shadow-lg hover:shadow-x transition-shadow duration-500 border border-gray-200" />

        <div className="flex justify-end pr-[140px]">
          <Link onClick={scrollToTop} to="/card">
            <button className="w-[135px] h-[40px] gap-[10px] flex items-center justify-center rounded-[10px] box-border border border-gray-200 bg-white shadow-md">
              View All <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>

      <div>
        <OurSpecial />
      </div>

      <div>
        <Customers />
      </div>

      <div className="bg-slate-300">
        <div className="mx-auto flex overflow-hidden items-center justify-between">
          <div className="mx-auto w-[1518px] flex overflow-hidden items-center justify-between py-20">
            <img className="w-[521px]" src="/assets/images/special/special_left.png" alt="" />
            <Timer />
            <img className="w-[700px] mb-[-80px]" src="/assets/images/special/special_right.png" alt="" />
          </div>
        </div>
        <div className="bg-latestWhiteGrayReverse">
          <div className="container py-[100px]">
            <Video
              src="https://youtu.be/dLC54mz--Dk?si=u_u33hn1zg3Gym_X"
              width="1320px"
              height={matches ? '740px' : '500px'}
              title="We’re the Best Organic Farm in the World"
            />
          </div>
        </div>

        <div className="container">
          <iframe
            className="flex justify-center items-center p-[50px] rounded-md shadow-custom-lg hover:shadow-x transition-shadow duration-500  border-gray-200"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A094a39eafebde5fc80bafd04951bc4c3f9d85095f3cfaee4dac7320da26b1970&amp;source=constructor"
            width="100%"
            height="600"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  AddToWishlist: PropTypes.func,
  wishlist: PropTypes.array,
}

export default Home
