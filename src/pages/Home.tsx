import Hero from "@/components/modules/HomePage/HeroSection"
import AboutPage from "./About"
import Contact from "./Contact"

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero/>
      <AboutPage/>
      <Contact/>
    </div>
  )
}

export default Home