"use client"
import React, { useState } from 'react';
import Form from './Form';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  return (
    <div className='p-4 md:py-8 md:px-32 bg-gray-100'>
      <div className='text-center py-8'>
        <h2 className='text-5xl p-4'>Get in touch with us</h2>
        <div className="h-0.5 mx-auto w-1/2 bg-pink-300" />
      </div>
      <div className='sm:flex justify-around items-center text-left'>
        <div className='max-w-xl p-4'>
          <p className='text-xl sm:text-2xl pb-4'>
            Planning an event or need some help with getting things off the ground?<br/>
            Contact us to add the 5 Star touch to your event.
          </p>
          <h6 className='text-xl p-4'>Contact forms not your thing?</h6>
          <ul className='text-lg sm:text-2xl pt-4'>
            <li>Cell: 083 278 2608</li>
            <li>Phone: 011 854 8299</li>
            <li>Email: 5starcatering@absamail.co.za</li>
          </ul>
        </div>
        
        <div className='flex-1 pb-8'> {/* Updated */}
          <Form />
        </div>
        
      </div>
    </div>
  );
};

export default CTA;
