import { GalleryData } from './GalleryData';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl mx-auto px-4 py-8">
    {GalleryData.map(({ id, image, alt, width, height, title }) => (
      <div key={id} className="bg-gray-200 break-inside-avoid relative">
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
    </div>
  );
};

export default Gallery;