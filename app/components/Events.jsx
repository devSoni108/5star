import Image from 'next/image';
import Isle from '../assets/home/isle.jpeg';

const Events = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      <div className="sm:px-16 flex flex-col items-center text-center">
        <h2 className="text-5xl p-4">Event Planning</h2>
        <div className="h-0.5 w-1/2 bg-pink-300" />
      </div>

      <div className="pt-6">
        <div className="px-2 py-4 sm:flex justify-evenly items-center">
          <div className="max-w-lg">
            <h3 className="text-3xl p-2 pb-4">A personal touch to make your event truly memorable</h3>
            <p className="text-xl p-2 pb-4">We provide a complete range of event planning services that cater to all types of events, from weddings and birthdays to corporate events, geeths, nelungus, mehndi nights, and all kinds of parties.</p>
            <div className='py-4'>
              <a href="/gallery" className="border-solid border-stone-900 border-2 rounded-md p-2">View Gallery</a>
            </div>
          </div>
          <div className="pt-6 sm:pt-0 drop-shadow-md">
            <Image src={Isle} alt="wedding isle" width={350} height={350} className="py-8 sm:max-w-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;