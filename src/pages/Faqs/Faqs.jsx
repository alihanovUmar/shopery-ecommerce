import { useState } from 'react'
import Accordions from './component/Accordion'
function Faqs() {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: 'Let me talk to you',
      data: ` is the best Computer Science portal  
      It contains well written, well thought  
     and well explained computer science and programming  
     articles.`,
      isOpen: false,
    },
    {
      key: 2,
      title: 'Let me talk to you',
      data: ` is the best Computer Science portal  
      It contains well written, well thought  
     and well explained computer science and programming  
     articles.`,
      isOpen: false,
    },
    {
      key: 3,
      title: 'Let me talk to you',
      data: `  is the best Computer Science portal  
            It contains well written, well thought  
           and well explained computer science and programming  
           articles.`,
      isOpen: false,
    },
  ])
  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen }
      } else {
        return { ...accord, isOpen: false }
      }
    })

    setAccordion(updatedAccordions)
  }
  return (
    <div>
      <div className="container">
        <div className="flex justify-center items-center gap-x-30 mt-[40px]">
          <div>
            <h1 className="w-[532px] text-[48px] text-[#1A1A1A] font-semibold">
              Welcome, Let’s Talk About Our MegaCenter
            </h1>
            <div className="h-[300px]">
              <div className="mt-[30px]">
                {accordions.map((accordion) => (
                  <Accordions
                    key={accordion.key}
                    title={accordion.title}
                    data={accordion.data}
                    isOpen={accordion.isOpen}
                    toggleAccordion={() => toggleAccordion(accordion.key)}
                  />
                ))}
              </div>
            </div>
          </div>
          <img
            src="https://www.ami55.ru/assets/img/news/1-prinimaem-zakazy-onlajn-24-chasa-v-sutki-.jpeg"
            alt="faqs-image"
            className="w-[700px] h-[700px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Faqs
