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
        <div className="m-[50px]">
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
          <div className="contact__left__right flex items-center justify-around">
            <div data-aos="zoom-in" className="contact__left w-[50%] object-contain">
              <Card className="my-[50px] object-contain" sx={{ minHeight: '300px', width: 620 }}>
                <CardMedia
                  sx={{
                    height: '500px', 
                    width: '100%',
                    backgroundSize: 'contain',
                  }}
                  image="https://aux-shop.ru/thumb/2/hCQBUyoKVBuHfH9Wl9Y8KA/r/d/besplatnaya_dostavka.png"
                  alt="Yosemite National Park"
                />

                <CardContent sx={{ justifyContent: 'flex-end' }}>
                  <Typography className="py-5px]" variant="h6" component="div" color="text.primary">
                    Contact us
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div data-aos="zoom-in-left" className="contact__right flex flex-col-reverse gap-[20px]">
              <a href="https://www.instagram.com/_akbarov_l07l?igsh=MWVsajNjMnF0dm15NA==">
                <button className="flex items-center justify-center gap-[10px] text-black-500  border-2 border-orange-500 transition-transform duration-300 ease-in-out transform rounded-full w-[500px] h-[70px] hover:bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-95 hover:bg-transparent hover:text-white hover:border-red-500 transition-all duration-300 hover:border-red-500">
                  <RiInstagramFill className="text-[20px]" /> Instagram
                </button>
              </a>

              <a href="https://t.me/la_tahzan1">
                <button className="flex items-center justify-center gap-[15px] rounded-full w-[500px] h-[70px] hover:bg-gradient-to-r from-blue-500 to-pink-500 border-2 border-blue-500 text-black-500 transition-transform duration-300 ease-in-out transform hover:scale-95 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 hover:text-white hover:border-blue-500 transition-all duration-300">
                  <FaTelegramPlane className="text-[20px]" /> Telegram
                </button>
              </a>

              <a href="https://wa.me/996502429090">
                <button className="flex items-center justify-center gap-[10px] rounded-full w-[500px] h-[70px] hover:bg-gradient-to-r from-green-400 to-green-700 border-2 border-green-500 text-black-500 transition-transform duration-300 ease-in-out transform hover:scale-[0.95] hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800 hover:text-white hover:border-green-500 transition-all duration-300">
                  <FaWhatsapp className="text-[20px]" /> Whats App
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
