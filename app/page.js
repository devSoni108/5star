import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Events from "./components/Events"
import Services from "./components/Services"
import About from "./components/About"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cards />
      <Events />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
