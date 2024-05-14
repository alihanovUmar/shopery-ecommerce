import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../assets/css/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'

function CakeSwiper() {
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
                src="https://thebodyprojecthome.files.wordpress.com/2018/11/healthy-breakfast1.jpg?w=1200"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://effepi.fvg.it/wp-content/uploads/2014/07/panetteria.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://i.pinimg.com/originals/a8/7b/00/a87b002b48234a1488c07195dccab25f.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[550px]"
                src="https://www.zuckerhuetl.com/uploads/pics/appartement_zuckerhuetl_soelden_verpflegung_04.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CakeSwiper
