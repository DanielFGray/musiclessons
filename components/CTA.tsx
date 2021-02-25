export default function CTA() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-transparent bg-gradient-to-r from-secondBrand-400 to-brand-400 bg-clip-text">
            Get in touch or create an account.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a
            href="#"
            className={`
              flex
              items-center
              justify-center
              px-4
              py-3
              text-base
              font-medium
              text-white
              border
              border-transparent
              rounded-md
              shadow-sm
              bg-gradient-to-r
              from-secondBrand-600
              to-brand-600
              hover:from-secondBrand-700
              hover:to-brand-700
            `}
          >
            Learn more
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 text-base font-medium border border-transparent text-brand-800 rounded-md shadow-sm bg-brand-50 hover:bg-brand-100"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  )
}
