import React from 'react'

export default function Hero({
  img,
  primary,
  secondary,
}: {
  img: { src: string; alt: string }
  primary: React.ReactNode
  secondary: React.ReactNode
}) {
  return (
    <div className="relative bg-gray-50">
      <div className="lg:relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              {primary}
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {secondary}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="shadow rounded-md">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent bg-secondBrand-600 rounded-md hover:bg-brand-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 shadow rounded-md sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent text-brand-600 rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={img.src}
            alt={img.alt}
          />
        </div>
      </div>
    </div>
  )
}
