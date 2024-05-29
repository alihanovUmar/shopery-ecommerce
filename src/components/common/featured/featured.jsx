import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DeliveryTruck from './deliveryTruck'
import HeadPhones from './headPhones'
import ShoppingBag from './shoppingBag'
import Paccages from './paccages'

function Featured() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className="p-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { Component: DeliveryTruck, title: 'Fast delivery', description: 'Fast delivery with discount' },
          { Component: HeadPhones, title: 'Great Support 24/7', description: 'Instant access to Contact' },
          { Component: ShoppingBag, title: 'Money-Back Guarantee', description: '30 days money-back guarantee' },
          { Component: Paccages, title: 'Free Shipping', description: 'Fast delivery with confidence' },
        ].map((item, index) => (
          <div key={index} className="border border-gray-300 p-6 rounded-lg" data-aos="fade-up">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <item.Component />
            </div>
            <h2 className="font-semibold text-lg mb-2 text-center">{item.title}</h2>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
