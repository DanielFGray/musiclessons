import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Nav() {
  const [mobileMenuVisible, setMobileMenu] = useState(false)
  const [flyoutVisible, setFlyout] = useState(false)
  return (
    <header>
      <div className="relative bg-gray-800">
        <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-secondBrand-600-to-brand-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
              aria-expanded="false"
              onClick={() => setMobileMenu(true)}
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                type="button"
                className="inline-flex items-center text-base font-medium text-gray-500 bg-white group rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                aria-expanded="false"
                onClick={() => setFlyout(s => !s)}
              >
                <span>Solutions</span>
                {/*
                    Heroicon name: solid/chevron-down

                    Item active: "text-gray-600", Item inactive: "text-gray-400"
                  */}
                <svg
                  className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* 'Solutions' flyout menu, show/hide based on flyout menu state.  */}
              <Transition
                show={flyoutVisible}
                enter="transition ease-out duration-50"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div className="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                      <a
                        href="#"
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600 sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/inbox */}
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Inbox
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get a better understanding of where your traffic is
                            coming from.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600 sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/annotation */}
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Messaging
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600 sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/chat-alt-2 */}
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Live Chat
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Your customers' data will be safe and secure.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600 sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/question-mark-circle */}
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Knowledge Base
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Connect with third-party tools that you're already
                            using.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Partners
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Company
            </a>
          </nav>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className={`
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                ml-8
                text-base
                font-medium
                text-white
                border
                border-transparent
                whitespace-nowrap
                rounded-md
                shadow-sm
                bg-gradient-to-r
                from-secondBrand-600
                to-brand-600
                hover:from-secondBrand-700
                hover:to-brand-700
              `}
            >
              Sign up
            </a>
          </div>
        </div>
        {/* Mobile menu, show/hide based on mobile menu state. */}
        <Transition
          show={mobileMenuVisible}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute inset-x-0 top-0 z-30 p-2 transition transform origin-top-right md:hidden">
            <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-secondBrand-600-to-brand-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className={`
                        inline-flex
                        items-center
                        justify-center
                        p-2
                        text-gray-400
                        bg-white
                        rounded-md
                        hover:text-gray-500
                        hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-brand-500
                      `}
                      onClick={() => setMobileMenu(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    <a
                      href="#"
                      className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600">
                        {/* Heroicon name: outline/inbox */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Inbox
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600">
                        {/* Heroicon name: outline/annotation */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Messaging
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600">
                        {/* Heroicon name: outline/chat-alt-2 */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Live Chat
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-secondBrand-600 to-brand-600">
                        {/* Heroicon name: outline/question-mark-circle */}
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Knowledge Base
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Partners
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Company
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className={`
                      flex
                      items-center
                      justify-center
                      w-full
                      px-4
                      py-2
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
                    Sign up
                  </a>
                  <p className="mt-6 text-base font-medium text-center text-gray-500">
                    Existing customer?
                    <a href="#" className="text-gray-900">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  )
}
