"use client"
import { Link } from '@/navigation'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import "@/app/[locale]/globals.css"

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


export default function Loginui({ signIn }: { signIn: string }) {
  const [open, setopen] = useState(false)

  return (

    <div className="relative">
      <Link href={"/logIn"}>
        <button
          onMouseEnter={() => { setopen(!open) }} className="flex items-center justify-center flex-row gap-2 max-sm:h-10 max-sm:w-10 max-sm:bg-slate-500 max-sm:rounded-full max-sm:hover:bg-slate-600 hover:scale-105 hover:border-[1px] rounded p-1 focus:border-[1px]"
        >
          <svg width="28" height="28" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2918 3C15.1194 3 16.6147 4.35 16.6147 6C16.6147 7.65 15.1194 9 13.2918 9C11.4642 9 9.96884 7.65 9.96884 6C9.96884 4.35 11.4642 3 13.2918 3ZM13.2918 18C17.7778 18 22.9283 19.935 23.2606 21H3.32295C3.70508 19.92 8.82242 18 13.2918 18ZM13.2918 0C9.61993 0 6.64589 2.685 6.64589 6C6.64589 9.315 9.61993 12 13.2918 12C16.9636 12 19.9377 9.315 19.9377 6C19.9377 2.685 16.9636 0 13.2918 0ZM13.2918 15C8.85565 15 0 17.01 0 21V24H26.5836V21C26.5836 17.01 17.7279 15 13.2918 15Z" fill="#F8F8F8" />
          </svg>
          <div className="text-2xl max-sm:hidden sm:whitespace-nowrap  sm:text-[20px] font-bold text-white font-['Roboto'] ">
            <a href="ar/logIn">
              {signIn}
            </a>
          </div>
        </button>
      </Link>

      {open ?
        <div
          onMouseLeave={() => { setopen(false) }}
          className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className='absolute -top-5 left-10 bg-transparent h-5 w-[400px] '>
            <div className='triangle-up absolute inset-x-1/2 border-x-8 border-b-8 border-t-0 border-solid border-blue-500'></div>
          </div>
          <div className="w-screen bg-[lightblue] max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        : null}

    </div>
  )
}



{/* <div className="relative">
<button onMouseEnter={() => { setopen(!open) }} className="flex items-center justify-center flex-row gap-2 max-sm:h-10 max-sm:w-10 max-sm:bg-slate-500 max-sm:rounded-full max-sm:hover:bg-slate-600 hover:scale-105 hover:border-[1px] rounded p-1 focus:border-[1px]">

  <svg width="28" height="28" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2918 3C15.1194 3 16.6147 4.35 16.6147 6C16.6147 7.65 15.1194 9 13.2918 9C11.4642 9 9.96884 7.65 9.96884 6C9.96884 4.35 11.4642 3 13.2918 3ZM13.2918 18C17.7778 18 22.9283 19.935 23.2606 21H3.32295C3.70508 19.92 8.82242 18 13.2918 18ZM13.2918 0C9.61993 0 6.64589 2.685 6.64589 6C6.64589 9.315 9.61993 12 13.2918 12C16.9636 12 19.9377 9.315 19.9377 6C19.9377 2.685 16.9636 0 13.2918 0ZM13.2918 15C8.85565 15 0 17.01 0 21V24H26.5836V21C26.5836 17.01 17.7279 15 13.2918 15Z" fill="#F8F8F8" />
  </svg>
  <div className="text-2xl max-sm:hidden sm:whitespace-nowrap  sm:text-[20px] font-bold text-white font-['Roboto'] ">
    <a href="ar/logIn">
      {signIn}
    </a>
  </div>
</button>

{open ?
  <div>
    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {solutions.map((item) => (
            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div> : null}

</div> */}