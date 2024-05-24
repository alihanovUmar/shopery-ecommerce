import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const special = [
  { title: '100% Fresh Cow Milk', suptitle: 'Starting at', price: '$14.99', id: 1 },
  { title: 'Drink Sale', suptitle: 'Water & Soft Drink', id: 2 },
  { title: '100% Organic', suptitle: 'Quick Breakfast', id: 3 },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

function OurSpecial() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex container justify-center items-center flex-wrap py-6 md:justify-around">
      {special.map((el) => {
        return (
          <div
            data-aos="zoom-in-up"
            className="px-6 py-10 mb-8 mt-[50px] md:mb-0"
            key={el.id}
            style={{
              backgroundImage: `url(/assets/images/special/special-top-${el.id}.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '255px',
              width: isMobile ? '100%' : '424px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <h1 className="text-white font-poppins text-2xl font-semibold leading-10">{el.title}</h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-[rgba(255,255,255,0.8)] font-poppins text-base font-medium leading-6">
                {el.suptitle}
              </h2>
              <h2 className="text-white font-poppins text-2xl font-medium leading-6">{el.price}</h2>
            </div>
            <Link onClick={scrollToTop} to="/card">
              <Button data-aos="zoom-out-right" className="mt-5">
                shop now <ArrowRight />
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default OurSpecial;
