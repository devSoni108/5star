import '../Home.module.css'

import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer'

const gallery = () => {
  return (
    <div className="p-5 text-black z-[2] text-center bg-gray-100">
      <div className="p-5">
        <Navbar />
      </div>
      <h1 className="pt-5 text-7xl">Have a look at our gallery</h1>
      <h2 className="py-5 text-5xl">We offer complete walk-in walk-out events</h2>
      <Gallery />
      <CTA />
      <Footer />
    </div>
  )
}

export default gallery
