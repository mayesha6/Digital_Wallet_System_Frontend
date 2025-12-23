import Hero from "@/components/modules/HomePage/HeroSection"
import AboutPage from "./About"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Features from "./Features"
import WhyChooseSCash from "./WhyChooseUs"

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero/>
      <AboutPage/>
      <Features />
      <Contact/>
      <WhyChooseSCash />
      <FAQ />
    </div>
  )
}

export default Home