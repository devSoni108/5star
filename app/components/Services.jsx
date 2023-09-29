const Services = () => {
    return (
        <div className="p-8 sm:py-16 sm:px-48 bg-gray-100 text-gray-900">
            <div className="flex flex-col items-left">
                <h2 className="text-3xl text-left py-4 font-semibold">Our Offering</h2>
                <div className="h-0.5 w-48 bg-pink-300"/>
            </div>
            <div className='sm:flex text-left justify-between'>
                <div className="py-8">
                    <div className='flex flex-col items-left'>
                        <h3 className="text-xl font-semibold">For Hire</h3>
                        <div className="h-0.5 w-20 bg-pink-300"/>
                    </div>
                    <div className="p-4 text-lg">
                        <li>Centerpieces</li>
                        <li>Bridal furniture</li>
                        <li>Pillars & mandaps</li>
                        <li>Tables & chairs</li>
                        <li>Gas and electric heaters</li>
                        <li>Crockery & cutlery</li>
                        <li>Catering equipment</li>
                        <li>Marquees & tents</li>
                        <li>Indian statues & murtis</li>
                        <li>Popcorn and candy floss machine</li>
                    </div>
                </div>
                <div className="py-8">
                    <div className='flex flex-col items-left'>
                        <h3 className="text-xl font-semibold">Services</h3>
                        <div className="h-0.5 w-24 bg-pink-300"/>
                    </div>
                    <div className="p-4 text-lg">
                        <li>Catering</li>
                        <li>Fairy lights</li>
                        <li>Venue decorating</li>
                        <li>Event planning</li>
                        <li>Stages & draping</li>
                        <li>Table settings</li>
                    </div>
                    <div className='py-4'>
                        <a href="/hire" className="border-solid border-stone-900 border-2 rounded-md p-2">View For Hire</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
