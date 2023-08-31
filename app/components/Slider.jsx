"use client"
import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='pb-4'>
      <div className='relative flex justify-center p-4 w-full h-[500px] overflow-hidden'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-item ${index === current ? 'slider-item-active' : 'slider-item-hidden'}`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-gray-100 z-10">
              <h1 className="text-5xl md:text-9xl sm:py-5">Five Star</h1>
              <h3 className="text-3xl md:text-7xl sm:py-5">décor & events</h3>
            </div>
            <IoIosArrowBack
              onClick={prevSlide}
              className='absolute top-[50%] left-[20px] text-white/70 cursor-pointer select-none z-[10]'
              size={50}
            />
            {index === current && (
              <Image src={slide.image} alt={slide.alt} layout="fill" objectFit="cover" />
            )}
            <IoIosArrowForward
              onClick={nextSlide}
              className='absolute top-[50%] right-[20px] text-white/70 cursor-pointer select-none z-[10]'
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;