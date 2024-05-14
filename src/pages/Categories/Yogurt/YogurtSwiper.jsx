import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../assets/css/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'

function YogurtSwiper() {
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
                  className="w-[100%] h-[550px]"
                  src="https://www.drcabottrio.com.au/wp-content/uploads/2017/02/Dr-Trio-Cabot-Recipes-3-Ingredient-Healthy-Frozen-Yoghurt-1200x550_c.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://enjoyslo.com/wp-content/uploads/2019/04/icecream.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://www.lekkerschmekker.de/wp-content/uploads/2020/06/strawberry-3304967_1920-1200x550.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://www.consumer.es/app/uploads/fly-images/292728/atun-en-conserva-1200x550-cc.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default YogurtSwiper
