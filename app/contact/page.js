import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Form from '../components/Form';

const contact = () => {
  return (
    <div className="p-5 text-black z-[2] text-center">
      <div className="p-5 bg-black">
        <Navbar />
      </div>
      <h1 className="pt-5 text-7xl">Contact Us</h1>
      <h2 className="py-5 text-5xl">Get in touch with us for<br/>all your event and decor needs</h2>
      
      <div className='px-4 sm:px-8 sm:flex justify-around items-center text-left'>
        <div className='max-w-500'>
          <p className='text-xl sm:text-2xl'>
            Planning an event or need some help with getting things off the ground?<br/>
            Contact us to add the 5 Star touch to your event.
          </p>
          <h6 className='text-xl p-4'>Contact forms not your thing?</h6>
          <ul className='text-lg sm:text-2xl'>
            <li>Cell: 083 278 2608</li>
            <li>Phone: 011 854 8299</li>
            <li>Email: 5starcatering@absamail.co.za</li>
          </ul>
        </div>
        
        <div className='flex-1'> {/* Updated */}
          <Form />
        </div>
        
      </div>

      <Footer />
    </div>
    
  )
}

export default contact