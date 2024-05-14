import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DeliveryTruck from './deliveryTruck';
import HeadPhones from './headPhones';
import ShoppingBag from './shoppingBag';
import Paccages from './paccages';

function Featured() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="flip-down">
      <div className="flex mx-0">
        {[
          { Component: DeliveryTruck, title: 'Free Shipping', description: 'Free shipping with discount' },
          { Component: HeadPhones, title: 'Great Support 24/7', description: 'Instant access to Contact' },
          { Component: ShoppingBag, title: 'Money-Back Guarantee', description: '30 days money-back guarantee' },
          { Component: Paccages, title: 'Free Shipping', description: 'Free shipping with discount' },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[330px] h-[222px] border border-[#E6E6E6] p-[40px] "
            data-aos="flip-down">
            <div className="w-[70px] h-[70px] border border-[#DAE5DA] rounded-[50%] bg-white flex items-center justify-center mb-4">
              <item.Component />
            </div>
            <h2 className="font-semibold text-base mb-2">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
