import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../assets/css/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'

function ButterSwiper() {
  return (
    <div className="pt-[68px] pb-[68px]">
      <div className="container">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          cssMode={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
          className="mySwiper h-[550px] object-contain"
        >
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[600px]"
                src="https://www.thespruceeats.com/thmb/MuAsU_wA6I21KJkIVENVBCjAQ7E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-cheese-peanut-butter-balls-521134-step-01-b2239e90a0d74ee8ae9239b6149f6d72.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[600px]"
                src="https://berrycake.ru/wa-data/public/shop/products/97/45/24597/images/19227/19227.970.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[600px]"
                src="https://gitacinta.com/wp-content/uploads/2020/08/Cara-Membuat-Butter-Cream..jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[600px]"
                src="https://mykaleidoscope.ru/x/uploads/posts/2023-05/1684938573_mykaleidoscope-ru-p-slivochnii-krem-dlya-biskvitnogo-torta-ins-60.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ButterSwiper
