import { Swiper, SwiperSlide } from 'swiper/react'
import foodFoto from '../../../public/assets/images/special/topSwiperFoto.png'
import foodFoto2 from '../../../public/assets/images/special/topSwiperFoto2.png'
import foodFoto3 from '../../../public/assets/images/special/topSwiperFoto3.png'
import '../../assets/css/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function SwiperTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div className="m-[50px] pt-8 pb-8 md:pt-16 md:pb-16 lg:pt-20 lg:pb-10 hidden sm:block">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        cssMode={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12">
            <div className="w-full md:w-1/2">
              <img src={foodFoto} alt="Food" className="w-full" />
            </div>
            <div className="text-center md:text-left w-full md:w-1/2 px-4 md:px-8 lg:px-12">
              <div className="relative mb-8">
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex-col text-white bg-orange-500 flex rounded-full mx-auto md:mx-0 items-center justify-center absolute -left-8 md:-left-20 lg:-left-32">
                  <span className="text-[24px] md:text-[32px] mt-2">70%</span>
                  <span className="text-[14px] md:text-[18px]">off</span>
                </div>
              </div>
              <div>
                <p className="mb-2 text-green-600">Welcome to shopery</p>
                <h1 className="family-poppins mb-4 text-2xl md:text-4xl font-semibold">
                  Fresh & Healthy <br /> Organic Food
                </h1>
                <p className="text-gray-500 mb-8 text-sm md:text-base">
                  Free shipping on all your order. we deliver, you enjoy
                </p>
                <Link onClick={scrollToTop} to="/card">
                  <Button>
                    Shop now <ArrowRight />
                  </Button>
                </Link>
              </div>
              <div className='p-[20px]'></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12">
            <div className="w-full md:w-1/2">
              <img src={foodFoto2} alt="Food" className="w-full" />
            </div>
            <div className="text-center md:text-left w-full md:w-1/2 px-4 md:px-8 lg:px-12">
              <div className="relative mb-8">
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex-col text-white bg-orange-500 flex rounded-full mx-auto md:mx-0 items-center justify-center absolute -left-8 md:-left-20 lg:-left-32">
                  <span className="text-[24px] md:text-[32px] mt-2">70%</span>
                  <span className="text-[14px] md:text-[18px]">off</span>
                </div>
              </div>
              <div>
                <p className="mb-2 text-green-600">Welcome to shopery</p>
                <h1 className="family-poppins mb-4 text-2xl md:text-4xl font-semibold">
                  Fresh & Healthy <br /> Organic Food
                </h1>
                <p className="text-gray-500 mb-8 text-sm md:text-base">
                  Free shipping on all your order. we deliver, you enjoy
                </p>
                <Link onClick={scrollToTop} to="/card">
                  <Button>
                    Shop now <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12">
            <div className="w-full md:w-1/2">
              <img src={foodFoto3} alt="Food" className="w-full" />
            </div>
            <div className="text-center md:text-left w-full md:w-1/2 px-4 md:px-8 lg:px-12">
              <div className="relative mb-8">
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex-col text-white bg-orange-500 flex rounded-full mx-auto md:mx-0 items-center justify-center absolute -left-8 md:-left-20 lg:-left-32">
                  <span className="text-[24px] md:text-[32px] mt-2">70%</span>
                  <span className="text-[14px] md:text-[18px]">off</span>
                </div>
              </div>
              <div>
                <p className="mb-2 text-green-600">Welcome to shopery</p>
                <h1 className="family-poppins mb-4 text-2xl md:text-4xl font-semibold">
                  Fresh & Healthy <br /> Organic Food
                </h1>
                <p className="text-gray-500 mb-8 text-sm md:text-base">
                  Free shipping on all your order. we deliver, you enjoy
                </p>
                <Link onClick={scrollToTop} to="/card">
                  <Button>
                    Shop now <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperTop