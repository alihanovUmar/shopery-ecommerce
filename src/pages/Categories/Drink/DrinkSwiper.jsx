import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../assets/css/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'

function DrinkSwiper() {
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
                src="https://rare-gallery.com/uploads/posts/810955-Drinks-Juice-Tomatoes-Kiwi-Citrus-Highball-glass.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://canceractive.com/media/articles/meta/images/0nxiv137jhwyybistock669973646.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://w.forfun.com/fetch/c3/c3049138dcdd1e825a1845e39a6bfe48.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src=" https://i.pinimg.com/originals/42/0b/a3/420ba3ad7ffa50dfc4aec2605a4cca87.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src=" https://w.forfun.com/fetch/52/5294fdf440d2ec9cde9e9e783bdfcbd4.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default DrinkSwiper


