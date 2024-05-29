import { Swiper, SwiperSlide } from 'swiper/react'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default function AboutSwiper() {
  return (
    <>
      <div className="container">
        <div className="m-[50px] max-[1145px]:hidden ">
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px] object-cover"
                src="https://www.inventiva.co.in/wp-content/uploads/2022/01/Amazon-logo.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px] object-cover"
                src="https://img.freepik.com/premium-vector/abstract-eco-logo_38668-35.jpg?w=2000"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[500px] object-cover"
                src="https://relaksy.ru/image/catalog/poduhisefektompamjati/papakatr/eko.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <section>
        <div className="container">
          <center>
            <h2 className='text-[48px] font-[600] mt-[60px]' >Our branches</h2>
          </center>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A678c40cd9a90f3f84f9dd164f5f5d6d026a5b5e9e16d5e6c5d8e70295f08ef8b&amp;source=constructor"
            frameborder="0"
            className="rounded-[10px] shadow-2xl my-[80px] w-[92%] h-[500px] flex justify-center
             items-center mx-auto"
          ></iframe>
        </div>
      </section>
    </>
  )
}
