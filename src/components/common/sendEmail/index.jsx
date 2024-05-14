import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../../ui/button'

function SendEmail() {
  const [email, setEmail] = useState('')

  const sendEmail = () => {
    // eslint-disable-next-line no-extra-semi
    ; (async () => {
      try {
        emailjs.send(
          'service_9b1piuw',
          'template_31kxhvg',
          {
            from_name: 'MegaCenter',
            reply_to: 'bu juda ajoyib habar',
            message:
              "bizni saytdan foydalanganingiz uchun raxmat \n bu saytdan hali ancha vaqt foydalanasiz degan umiddamiz \n agar sayt tuzish kerak bo'lsa shu manzillarga murojat qiling.",
            to_email: email,
            to_name: email,
          },
          'KiJukHoeyLNnyatMO'
        )
        setEmail('')
      } catch (error) {
        console.error(error)
      }
    })()
  }

  return (
    <div className=" container flex items-center max-xl:flex-col max-xl:items-start max-xl:gap-5 justify-between py-12 bg-greenGrays-greenGray0.5">
      <div className=" bg-white rounded-full p-0 max-[570px]:bg-transparent">
      </div>
    </div>
  )
}

export default SendEmail
