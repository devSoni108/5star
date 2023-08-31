import Image from 'next/image'
import about from '../assets/home/about.png'

const About = () => {
    return (
        <div className='p-4 py-8 sm:px-32'>
            <div className="flex flex-col items-left">
                <h1 className='text-5xl py-4'>About Us</h1>
                <div className="h-0.5 w-1/4 bg-pink-300"/>
            </div>
        <div className='sm:flex justify-between items-center p-8'>
            <div className='max-w-370'>
                <p>
                We are a décor and events, family run business and have been planning events and special occasions for over 15 years.
                <br/>
                Our team are experienced venue decorators and event organisers. We cater to events in and around Johannesburg, Pretoria and The Vaal.
                </p>
            </div>
            <div className='py-8'>
              <Image 
              src={about}
              alt='about five star'
              width={300}
              height={300}
              />
            </div>
        </div>
        </div>
    )
}

export default About