import Image from 'next/image';

import HeroImage from './HeroImage';

export default function Example() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 sm:text-6xl">
              Styling beyond your CSS
            </h1>
            <p className="mt-4 text-xl text-white">
              Merch from your favourite tech brands all in one place.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* IMAGE GRID */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <HeroImage imageUrl="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <HeroImage imageUrl="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <HeroImage imageUrl="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <HeroImage imageUrl="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <HeroImage imageUrl="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <HeroImage imageUrl="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <HeroImage imageUrl="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-block text-center border-2 border-white rounded-full py-3 px-8 font-medium text-white hover:bg-gradient-to-r from-yellow-300 hover:white to-red-500"
              >
                View Styles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
