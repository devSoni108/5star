"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { StagesData } from './StagesData'; // Import your image data from StagesData.js

const Stages = () => {
  const [current, setCurrent] = useState(0);
  const length = StagesData.length;
  const imagesPerPage = 3; // Number of images to display at a time

  const nextSlide = () => {
    setCurrent((current + imagesPerPage) % length);
  };

  const prevSlide = () => {
    const nextIndex = current - imagesPerPage;
    setCurrent(nextIndex < 0 ? length - imagesPerPage : nextIndex);
  };

  return (
    <div className='pb-12'>
      <div className='relative px-8 py-20 w-full h-[full] overflow-hidden'>
        <div className='flex'>
          {StagesData.slice(current, current + imagesPerPage).map((stage, index) => (
            <div
              key={index}
              className={`w-full ${index === 0 ? 'ml-0' : 'ml-8'}`}
            >
              <div className="relative pl-2">
                <Image className='w-96 h-64 object-cover' src={stage.image} alt={stage.title} />
                <div className="text-left mt-2">{stage.title}</div>
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

export default Stages;