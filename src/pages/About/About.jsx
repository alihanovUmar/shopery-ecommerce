import AboutLogo from './components/About-Pages/AboutLogo'
import CardTeam from './components/About-Pages/CardTeam'
import FoodStoreCard from './components/About-Pages/FoodStoreCard'
import AboutSwiper from './components/AboutSwiper/AboutSwiper'

function About() {
  return (
    <>
      <center>
        <h2 className="mt-[50px] text-2xl font-bold">About Us</h2>
      </center>
      <FoodStoreCard />
      <CardTeam />
      <AboutLogo />
      <AboutSwiper />
    </>
  )
}

export default About
