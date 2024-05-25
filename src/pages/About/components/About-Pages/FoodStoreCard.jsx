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
              className="w-[100%] h-[550px] object-cover max-[600px]:h-[440px] max-[500px]:h-[380px] max-[400px]:h-[300px] max-[350px]:h-[280px] "
              src="https://ir-3.ozone.ru/s3/multimedia-4/6823567948.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100%] h-[550px] object-cover max-[600px]:h-[440px] max-[500px]:h-[380px] max-[400px]:h-[300px] max-[350px]:h-[280px] "
              src="https://klau.club/uploads/posts/2023-08/1693409567_klau-club-p-sochnie-ovoshchi-krasivo-45.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[550px] object-cover max-[600px]:h-[440px] max-[500px]:h-[380px] max-[400px]:h-[300px] max-[350px]:h-[280px] "
              src="https://www.wmj.ru/thumb/1280x720/smart/filters:quality(75)/imgs/2019/06/07/11/3403065/dbe2fd6e8bdcd39ee873bda4f7e84168cc0fbcde.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[100%] h-[550px] object-cover max-[600px]:h-[440px] max-[500px]:h-[380px] max-[400px]:h-[300px] max-[350px]:h-[280px] "
              src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663700169_11-mykaleidoscope-ru-p-sochnie-frukti-oboi-11.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FoodStoreCard
