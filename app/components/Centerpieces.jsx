"use client"

import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Centerpieces = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const imagesPerPage = 3; // Number of images to display at a time

  const nextSlide = () => {
    setCurrent((current + imagesPerPage) % length);
  };

  const prevSlide = () => {
    const nextIndex = current - imagesPerPage;
    setCurrent(nextIndex < 0 ? length - imagesPerPage : nextIndex);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='pb-4'>
      <div className='relative px-8 py-20 w-full h-[full] overflow-hidden'>
        <div className='flex'>
          {slides.slice(current, current + imagesPerPage).map((slide, index) => (
            <div
              key={index}
              className={`w-full ${index === 0 ? 'ml-0' : 'ml-8'}`}
            >
              <div className="relative pl-2">
                <Image className='h-96 w-auto' src={slide.image} alt={slide.alt} />
                <div className="mt-2 text-left">{slide.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute pt-8">
            <IoIosArrowDropleft
                onClick={prevSlide}
                className='text-black/70 cursor-pointer select-none'
                size={45}
            />
        </div>
        <div className="absolute pt-8 left-20">
            <IoIosArrowDropright
                onClick={nextSlide}
                className='text-black/70 cursor-pointer select-none'
                size={45}
            />
        </div>
      </div>
    </div>
  );
};

export default Centerpieces;

