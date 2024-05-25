import Container from '../../../../components/common/Container'
import BookOffIcon from '../Icons/bookOffIcon'
import FoodIcon from '../Icons/foodIcon'
import FoodNetworkIcon from '../Icons/foodNetworkIcon'
import MangoIcon from '../Icons/mangoIcon'
import SeriesIcon from '../Icons/seriesIcon'

function AboutLogo() {
  return (
    <Container>
      <div className="flex items-center justify-around gap-[80px] flex-wrap p-[50px]">
        <a
          href="#"
          className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-#00b207"
        >
          <FoodNetworkIcon />
        </a>
        <a
          href="#"
          className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-#00b207"
        >
          <MangoIcon />
        </a>
        <a
          href="#"
          className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-#00b207"
        >
          <FoodIcon />
        </a>
        <a
          href="#"
          className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-#00b207"
        >
          <BookOffIcon />
        </a>
        <a
          href="#"
          className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-#00b207"
        >
          <SeriesIcon />
        </a>
      </div>
    </Container>
  )
}

export default AboutLogo
