import Image from 'next/image'

import Gold from '../assets/home/gold-1.jpg'
import Lights from '../assets/home/fairy-lights.jpg'
import Hire from '../assets/home/for-hire.jpg'

const Cards = () => {
  return (
    <div className='p-4 text-gray-900 bg-gray-100'>
        <div className='text-center py-4'>
            <h2 className='text-5xl'>With a touch of elegance</h2>
        </div>
        <div className='sm:flex justify-between text-2xl md:text-3xl'>
            <div className='cursor-pointer p-4'>
                <h4>decor</h4>
                <div>
                <Image className='rounded shadow' src={Gold} alt='Gold mandap' width={300} height={500}/>
                </div>
            </div>
            <div className='cursor-pointer p-4'>
                <h4>events</h4>
                <Image className='rounded shadow' src={Lights} alt='Fairy lights' width={300} height={500} />
            </div>
            <div className='cursor-pointer p-4'>
                <h4>for hire</h4>
                <Image className='rounded shadow' src={Hire} alt='Crockery hire' width={300} height={500} />
            </div>
        </div>
    </div>
  );
};

export default Cards