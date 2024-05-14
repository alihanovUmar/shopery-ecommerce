import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../../assets/css/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
function FoodStoreCard() {
  return (
    <div className="container">
      <div className="pt-[68px] pb-[68px]">
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
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-[100%] h-[550px] object-cover"
              src="https://sgcctech.com/artwork/aboutus.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100%] h-[550px] object-cover"
              src="https://www.gaprealestate.com/wp-content/uploads/2022/08/about-us.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100%] h-[550px] object-cover"
              src="https://blog.digitize-info.com/wp-content/uploads/2023/06/blog-banner.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100%] h-[550px] object-cover"
              src="https://ucare.timepad.ru/e8a35d7a-2e1b-4598-a505-0cefacd7e432/poster_event_940391.jpg"
              alt=""
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default FoodStoreCard
