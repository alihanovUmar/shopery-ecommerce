import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

export default function Contact() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="contact__left__right flex items-center justify-around">
            <div data-aos="zoom-in" className="contact__left w-[50%]">
              <Card className="my-[50px]" sx={{ minHeight: '500px', width: 620 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://ewonta.ru/modules/psstoreblog/views/img/covers/22.png"
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
    </div>
  )
}
