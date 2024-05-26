import { useState } from 'react';
import Accordions from './component/Accordion';

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
  ]);

  const toggleAccordion = (accordionKey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionKey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });
    setAccordion(updatedAccordions);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mt-10 lg:mt-16">
        <div className="lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl text-[#1A1A1A] font-semibold mb-4 lg:mb-6">
            Welcome, Let’s Talk About Our MegaCenter
          </h1>
          <div className="mt-6">
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
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img
            src="https://www.ami55.ru/assets/img/news/1-prinimaem-zakazy-onlajn-24-chasa-v-sutki-.jpeg"
            alt="faqs-image"
            className="w-full h-auto lg:w-auto lg:h-[700px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Faqs;